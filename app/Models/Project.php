<?php

namespace App\Models;

use App\Support\MediaStorage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'gallery_images' => 'array',
        'is_featured' => 'boolean',
        'project_value' => 'integer',
        'year' => 'integer',
        'order' => 'integer',
    ];

    protected static function booted(): void
    {
        static::saving(function (self $project): void {
            $project->thumbnail_url = MediaStorage::normalizeUrl($project->thumbnail_url);
            $project->gallery_images = MediaStorage::normalizeGalleryItems($project->gallery_images);
        });

        static::updated(function (self $project): void {
            if ($project->wasChanged('thumbnail_url') || $project->wasChanged('gallery_images')) {
                $oldUrls = array_values(array_filter([
                    $project->getOriginal('thumbnail_url'),
                    ...MediaStorage::extractGalleryUrls($project->getOriginal('gallery_images')),
                ]));
                $newUrls = array_values(array_filter([
                    $project->thumbnail_url,
                    ...MediaStorage::extractGalleryUrls($project->gallery_images),
                ]));

                MediaStorage::deleteUnusedDiff($oldUrls, $newUrls);
            }
        });

        static::deleted(function (self $project): void {
            MediaStorage::deleteIfUnused($project->thumbnail_url);
            foreach (MediaStorage::extractGalleryUrls($project->gallery_images) as $galleryUrl) {
                MediaStorage::deleteIfUnused($galleryUrl);
            }
        });
    }
}
