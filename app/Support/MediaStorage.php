<?php

namespace App\Support;

use App\Models\CompanySetting;
use App\Models\Project;
use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class MediaStorage
{
    private const SUPPORTED_IMAGE_EXTENSIONS = ['jpg', 'png', 'webp', 'avif'];

    private const SUPPORTED_IMAGE_MIMES = [
        'image/jpeg' => 'jpg',
        'image/jpg' => 'jpg',
        'image/pjpeg' => 'jpg',
        'image/png' => 'png',
        'image/webp' => 'webp',
        'image/avif' => 'avif',
    ];

    /**
     * Safely verify whether an uploaded file is a supported image (JPEG, PNG, WebP, or AVIF)
     * even when php-fileinfo / shell_exec are unavailable or getMimeType() returns null.
     */
    public static function isSupportedUploadedImage(UploadedFile $file): bool
    {
        if (!$file->isValid()) {
            return false;
        }

        $mime = null;
        try {
            $mime = $file->getMimeType();
        } catch (\Throwable) {
            $mime = null;
        }

        if (is_string($mime) && $mime !== '') {
            $normalizedMime = strtolower(trim($mime));
            if (array_key_exists($normalizedMime, self::SUPPORTED_IMAGE_MIMES)) {
                return true;
            }

            // Explicitly reject non-image MIME types unless generic binary stream (older libmagic on AVIF/WebP)
            if ($normalizedMime !== 'application/octet-stream') {
                return false;
            }
        }

        $path = $file->getPathname() ?: $file->getRealPath();
        if (is_string($path) && $path !== '' && is_file($path) && is_readable($path)) {
            if (self::detectImageExtensionFromFile($path) !== null) {
                return true;
            }
        }

        try {
            $guessed = $file->guessExtension();
            if (is_string($guessed) && $guessed !== '') {
                $ext = self::normalizeImageExtension($guessed);
                if (in_array($ext, self::SUPPORTED_IMAGE_EXTENSIONS, true)) {
                    return true;
                }
            }
        } catch (\Throwable) {
            // Ignore Symfony MimeTypes LogicException / TypeError
        }

        return false;
    }

    /**
     * Safely detect the canonical file extension ("jpg", "png", "webp", or "avif") for an uploaded image.
     */
    public static function detectImageExtension(UploadedFile $file): string
    {
        try {
            $guessed = $file->guessExtension();
            if (is_string($guessed) && $guessed !== '') {
                $ext = self::normalizeImageExtension($guessed);
                if (in_array($ext, self::SUPPORTED_IMAGE_EXTENSIONS, true)) {
                    return $ext;
                }
            }
        } catch (\Throwable) {
            // Fall through when php-fileinfo/shell_exec is disabled or getMimeType() returns null
        }

        $path = $file->getPathname() ?: $file->getRealPath();
        if (is_string($path) && $path !== '' && is_file($path) && is_readable($path)) {
            $detected = self::detectImageExtensionFromFile($path);
            if ($detected !== null) {
                return $detected;
            }
        }

        $clientExt = self::normalizeImageExtension(
            (string) preg_replace('/[^a-zA-Z0-9]/', '', (string) $file->getClientOriginalExtension())
        );
        if (in_array($clientExt, self::SUPPORTED_IMAGE_EXTENSIONS, true)) {
            return $clientExt;
        }

        return 'webp';
    }

    private static function normalizeImageExtension(string $extension): string
    {
        $ext = strtolower(trim($extension));

        return match ($ext) {
            'jpeg' => 'jpg',
            'avifs' => 'avif',
            default => $ext,
        };
    }

    /**
     * Inspect magic bytes and getimagesize() without depending on php-fileinfo.
     */
    private static function detectImageExtensionFromFile(string $path): ?string
    {
        $bytes = @file_get_contents($path, false, null, 0, 32);
        if (is_string($bytes) && $bytes !== '') {
            if (str_starts_with($bytes, "\xFF\xD8\xFF")) {
                return 'jpg';
            }

            if (str_starts_with($bytes, "\x89PNG\r\n\x1A\n")) {
                return 'png';
            }

            if (strlen($bytes) >= 12 && substr($bytes, 0, 4) === 'RIFF' && substr($bytes, 8, 4) === 'WEBP') {
                return 'webp';
            }

            if (
                strlen($bytes) >= 12
                && substr($bytes, 4, 4) === 'ftyp'
                && (
                    in_array(substr($bytes, 8, 4), ['avif', 'avis'], true)
                    || str_contains(substr($bytes, 16), 'avif')
                    || str_contains(substr($bytes, 16), 'avis')
                )
            ) {
                return 'avif';
            }
        }

        try {
            $info = @getimagesize($path);
            if (is_array($info) && isset($info[2])) {
                $imageType = (int) $info[2];
                if ($imageType === IMAGETYPE_JPEG) {
                    return 'jpg';
                }
                if ($imageType === IMAGETYPE_PNG) {
                    return 'png';
                }
                if (defined('IMAGETYPE_WEBP') && $imageType === IMAGETYPE_WEBP) {
                    return 'webp';
                }
                if (defined('IMAGETYPE_AVIF') && $imageType === IMAGETYPE_AVIF) {
                    return 'avif';
                }
            }
        } catch (\Throwable) {
            // Ignore getimagesize failures
        }

        return null;
    }
    /**
     * Normalize stored image URLs so React (/admin) and Filament (/filament)
     * always persist a consistent format.
     */
    public static function normalizeUrl(?string $value): ?string
    {
        if ($value === null) {
            return null;
        }

        $trimmed = trim($value);
        if ($trimmed === '') {
            return null;
        }

        // Convert relative disk paths (e.g. "uploads/projects/abc.webp") to "/storage/uploads/..."
        if (str_starts_with($trimmed, 'uploads/')) {
            return '/storage/' . ltrim($trimmed, '/');
        }

        if (str_starts_with($trimmed, 'storage/uploads/')) {
            return '/' . ltrim($trimmed, '/');
        }

        return $trimmed;
    }

    /**
     * Normalize project gallery_images into a consistent array of ['url' => ..., 'caption' => ...].
     * Supports both legacy string arrays and structured objects.
     *
     * @return array<int, array{url: string, caption: string}>
     */
    public static function normalizeGalleryItems(mixed $items, int $maxItems = 12): array
    {
        if (is_string($items)) {
            $decoded = json_decode($items, true);
            $items = is_array($decoded) ? $decoded : [];
        }

        if (!is_array($items)) {
            return [];
        }

        // Preserve exact numeric index order even if Validator::validated() reordered mixed scalar/array entries
        if (!empty($items) && array_reduce(array_keys($items), static fn (bool $carry, int|string $k): bool => $carry && is_int($k), true)) {
            ksort($items, SORT_NUMERIC);
        }

        $result = [];
        $seen = [];

        foreach ($items as $entry) {
            $rawUrl = null;
            $rawCaption = '';

            if (is_string($entry)) {
                $rawUrl = $entry;
            } elseif (is_array($entry)) {
                $rawUrl = is_string($entry['url'] ?? null) ? $entry['url'] : null;
                $rawCaption = is_string($entry['caption'] ?? null) ? trim($entry['caption']) : '';
            }

            $normalizedUrl = self::normalizeUrl($rawUrl);
            if ($normalizedUrl === null || isset($seen[$normalizedUrl])) {
                continue;
            }

            $seen[$normalizedUrl] = true;
            $result[] = [
                'url' => $normalizedUrl,
                'caption' => mb_substr($rawCaption, 0, 255),
            ];

            if (count($result) >= $maxItems) {
                break;
            }
        }

        return $result;
    }

    /**
     * Extract a flat list of normalized URLs from gallery_images (supports string[] or object[]).
     *
     * @return array<int, string>
     */
    public static function extractGalleryUrls(mixed $items): array
    {
        return array_values(array_map(
            static fn (array $item): string => $item['url'],
            self::normalizeGalleryItems($items, 100)
        ));
    }

    /**
     * Extract the public-disk relative path ONLY for managed local uploads under "uploads/...".
     * Returns null for external URLs or static public assets like "/images/*".
     */
    public static function toPublicDiskPath(?string $url): ?string
    {
        if ($url === null) {
            return null;
        }

        $trimmed = trim($url);
        if ($trimmed === '' || str_contains($trimmed, "\0") || str_contains($trimmed, '..')) {
            return null;
        }

        $normalized = str_replace('\\', '/', $trimmed);

        if (str_starts_with($normalized, '/storage/uploads/')) {
            return ltrim(substr($normalized, strlen('/storage/')), '/');
        }

        if (str_starts_with($normalized, 'storage/uploads/')) {
            return ltrim(substr($normalized, strlen('storage/')), '/');
        }

        if (str_starts_with($normalized, 'uploads/')) {
            return ltrim($normalized, '/');
        }

        return null;
    }

    /**
     * Format a stored image URL for Filament ImageColumn display
     * (disk-relative path for local uploads, full URL for /images/* or external URLs).
     */
    public static function toFilamentImageState(?string $url): ?string
    {
        $diskPath = self::toPublicDiskPath($url);
        if ($diskPath !== null) {
            return $diskPath;
        }

        if ($url === null || trim($url) === '') {
            return null;
        }

        $trimmed = trim($url);
        if (str_starts_with($trimmed, '/')) {
            return url($trimmed);
        }

        return $trimmed;
    }

    /**
     * Check whether a managed upload URL is still referenced by any database record.
     */
    public static function isReferencedAnywhere(string $normalizedUrl, string $diskPath): bool
    {
        $candidates = array_values(array_unique([$normalizedUrl, $diskPath, ltrim($normalizedUrl, '/')]));

        if (Project::whereIn('thumbnail_url', $candidates)->exists()) {
            return true;
        }

        $projectsWithGallery = Project::whereNotNull('gallery_images')->get(['gallery_images']);
        foreach ($projectsWithGallery as $project) {
            foreach (self::extractGalleryUrls($project->gallery_images) as $galleryUrl) {
                $norm = self::normalizeUrl($galleryUrl);
                $path = self::toPublicDiskPath($galleryUrl);
                if (in_array($norm, $candidates, true) || ($path !== null && in_array($path, $candidates, true))) {
                    return true;
                }
            }
        }

        if (Service::whereIn('image_url', $candidates)->exists()) {
            return true;
        }

        if (Testimonial::whereIn('avatar_url', $candidates)->exists()) {
            return true;
        }

        $sectionSettings = CompanySetting::whereIn('key', ['section_hero', 'section_about_data'])->get();
        foreach ($sectionSettings as $setting) {
            $decoded = json_decode((string) $setting->value, true);
            if (!is_array($decoded)) {
                continue;
            }

            $sectionKey = str_replace('section_', '', $setting->key);
            $urls = self::extractSectionImageUrls($sectionKey, $decoded);
            foreach ($urls as $url) {
                $norm = self::normalizeUrl($url);
                $path = self::toPublicDiskPath($url);
                if (in_array($norm, $candidates, true) || ($path !== null && in_array($path, $candidates, true))) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Safely delete a managed upload from the public disk if no record still references it.
     */
    public static function deleteIfUnused(?string $url): bool
    {
        $diskPath = self::toPublicDiskPath($url);
        if ($diskPath === null) {
            return false;
        }

        $normalized = '/storage/' . $diskPath;

        if (self::isReferencedAnywhere($normalized, $diskPath)) {
            return false;
        }

        if (class_exists(\finfo::class)) {
            try {
                $disk = Storage::disk('public');
                if ($disk->exists($diskPath)) {
                    return $disk->delete($diskPath);
                }

                return false;
            } catch (\Throwable $e) {
                if (!str_contains($e->getMessage(), 'finfo')) {
                    Log::warning('Failed to delete unused media file from public disk', [
                        'disk_path' => $diskPath,
                        'exception' => $e::class,
                        'message' => $e->getMessage(),
                    ]);

                    return false;
                }
            }
        }

        // Native filesystem fallback when php-fileinfo (finfo) is not installed on the server
        $safePath = self::resolveSafeStoragePath($diskPath);
        if ($safePath !== null && is_file($safePath)) {
            return @unlink($safePath);
        }

        return false;
    }

    /**
     * Store an uploaded file directly into storage/app/public/{directory}/{filename}
     * using native PHP filesystem APIs so uploads succeed even when php-fileinfo (finfo) is disabled.
     */
    public static function storeUploadedFileNatively(UploadedFile $file, string $directory, string $filename): string|false
    {
        $cleanDir = trim(str_replace('\\', '/', $directory), '/');
        $cleanName = basename($filename);

        if ($cleanDir === '' || $cleanName === '' || str_contains($cleanDir, '..') || str_contains($cleanName, '..')) {
            return false;
        }

        $targetDir = storage_path('app/public/' . $cleanDir);

        if (!is_dir($targetDir) && !@mkdir($targetDir, 0775, true) && !is_dir($targetDir)) {
            return false;
        }

        $destination = $targetDir . DIRECTORY_SEPARATOR . $cleanName;
        $sourcePath = $file->getRealPath();
        if (!is_string($sourcePath) || $sourcePath === '' || !is_readable($sourcePath)) {
            $sourcePath = $file->getPathname();
        }

        if (!is_string($sourcePath) || $sourcePath === '' || !is_readable($sourcePath)) {
            return false;
        }

        $contents = @file_get_contents($sourcePath);
        if ($contents === false) {
            return false;
        }

        if (@file_put_contents($destination, $contents) === false) {
            return false;
        }

        @chmod($destination, 0644);

        return "{$cleanDir}/{$cleanName}";
    }

    /**
     * Guess Content-Type header from file extension without relying on php-fileinfo (finfo).
     */
    public static function guessMimeTypeFromExtension(string $path): ?string
    {
        $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        return match ($ext) {
            'jpg', 'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'webp' => 'image/webp',
            'avif' => 'image/avif',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            default => null,
        };
    }

    /**
     * Extract image URLs from JSON section payloads (hero / about_data).
     *
     * @return array<int, string>
     */
    public static function extractSectionImageUrls(string $section, array $data): array
    {
        $urls = [];

        if ($section === 'hero' && isset($data['slides']) && is_array($data['slides'])) {
            foreach ($data['slides'] as $slide) {
                if (is_array($slide) && !empty($slide['image']) && is_string($slide['image'])) {
                    $urls[] = $slide['image'];
                }
            }
        }

        if ($section === 'about_data') {
            foreach (['photo_main_url', 'photo_secondary_url'] as $key) {
                if (!empty($data[$key]) && is_string($data[$key])) {
                    $urls[] = $data[$key];
                }
            }
        }

        return $urls;
    }

    /**
     * Normalize image URLs inside a section payload before persisting.
     */
    public static function normalizeSectionImages(string $section, array $data): array
    {
        if ($section === 'hero' && isset($data['slides']) && is_array($data['slides'])) {
            foreach ($data['slides'] as $index => $slide) {
                if (is_array($slide) && array_key_exists('image', $slide)) {
                    $data['slides'][$index]['image'] = self::normalizeUrl(is_string($slide['image']) ? $slide['image'] : null) ?? '';
                }
            }
        }

        if ($section === 'about_data') {
            foreach (['photo_main_url', 'photo_secondary_url'] as $key) {
                if (array_key_exists($key, $data)) {
                    $data[$key] = self::normalizeUrl(is_string($data[$key]) ? $data[$key] : null) ?? '';
                }
            }
        }

        return $data;
    }

    /**
     * Delete any previously managed files that were removed or replaced in a URL list.
     *
     * @param array<int, string> $oldUrls
     * @param array<int, string> $newUrls
     */
    public static function deleteUnusedDiff(array $oldUrls, array $newUrls): void
    {
        $normalizedOld = array_filter(array_map([self::class, 'normalizeUrl'], $oldUrls));
        $normalizedNew = array_filter(array_map([self::class, 'normalizeUrl'], $newUrls));

        $removed = array_diff(array_unique($normalizedOld), array_unique($normalizedNew));

        foreach ($removed as $url) {
            self::deleteIfUnused($url);
        }
    }

    /**
     * Safely resolve a requested path inside storage/app/public preventing path traversal.
     */
    public static function resolveSafeStoragePath(string $path): ?string
    {
        if ($path === '' || str_contains($path, "\0") || str_contains($path, '..')) {
            return null;
        }

        $publicRoot = realpath(storage_path('app/public'));
        if ($publicRoot === false) {
            return null;
        }

        $cleanRelative = ltrim(str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $path), DIRECTORY_SEPARATOR);
        $candidate = realpath($publicRoot . DIRECTORY_SEPARATOR . $cleanRelative);

        if ($candidate === false || !is_file($candidate)) {
            return null;
        }

        $rootPrefix = rtrim($publicRoot, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;

        if (DIRECTORY_SEPARATOR === '\\') {
            if (!str_starts_with(strtolower($candidate), strtolower($rootPrefix))) {
                return null;
            }
        } else {
            if (!str_starts_with($candidate, $rootPrefix)) {
                return null;
            }
        }

        return $candidate;
    }

    /**
     * Return the effective PHP upload limit in bytes (minimum of upload_max_filesize and post_max_size).
     */
    public static function phpMaxUploadBytes(): int
    {
        $uploadMax = self::parseIniSize((string) ini_get('upload_max_filesize'));
        $postMax = self::parseIniSize((string) ini_get('post_max_size'));

        if ($uploadMax > 0 && $postMax > 0) {
            return min($uploadMax, $postMax);
        }

        return max($uploadMax, $postMax, 2 * 1024 * 1024);
    }

    /**
     * Parse PHP shorthand ini byte values (e.g. "2M", "8M", "512K").
     */
    public static function parseIniSize(string $value): int
    {
        $trimmed = trim($value);
        if ($trimmed === '' || $trimmed === '0') {
            return 0;
        }

        $unit = strtolower(substr($trimmed, -1));
        $number = (float) $trimmed;

        return match ($unit) {
            'g' => (int) ($number * 1024 * 1024 * 1024),
            'm' => (int) ($number * 1024 * 1024),
            'k' => (int) ($number * 1024),
            default => (int) $number,
        };
    }
}
