export const DEFAULT_PROJECT_PLACEHOLDER = '/images/project-placeholder.jpg';
export const DEFAULT_SITE_LOGO = '/images/logo-wsm.jpg';
export const DEFAULT_AVATAR_PLACEHOLDER = DEFAULT_SITE_LOGO;

export const DEFAULT_PROJECT_CATEGORIES = [
  { value: 'Industri', label: 'Industri & Pergudangan' },
  { value: 'Komersial', label: 'Komersial & Perkantoran' },
  { value: 'Residensial', label: 'Residensial & Hunian' },
  { value: 'Infrastruktur', label: 'Infrastruktur & Sipil' },
  { value: 'Bangunan Pendidikan', label: 'Bangunan Pendidikan' },
  { value: 'Bangunan Kesehatan', label: 'Bangunan Kesehatan' },
  { value: 'Bangunan Penginapan', label: 'Bangunan Penginapan' },
];

/**
 * Defensive client-side auto-sort matching Project::orderedForPortfolio():
 * 1. Most recent year first (year DESC)
 * 2. Same year: "Berjalan" before "Selesai"
 * 3. Same year & status: newest record first (id DESC)
 */
export function sortProjectsByRecency(projects = []) {
  if (!Array.isArray(projects)) {
    return [];
  }

  return [...projects].sort((a, b) => {
    const yearDiff = (Number(b?.year) || 0) - (Number(a?.year) || 0);
    if (yearDiff !== 0) {
      return yearDiff;
    }

    const statusRankA = a?.status === 'Berjalan' ? 0 : 1;
    const statusRankB = b?.status === 'Berjalan' ? 0 : 1;
    if (statusRankA !== statusRankB) {
      return statusRankA - statusRankB;
    }

    return (Number(b?.id) || 0) - (Number(a?.id) || 0);
  });
}

/**
 * Resolve the active website logo URL with safe fallback to the static default logo.
 */
export function resolveSiteLogoUrl(logoUrl) {
  return resolveImageUrl(logoUrl, DEFAULT_SITE_LOGO);
}

/**
 * Synchronize the browser tab favicon dynamically during Inertia SPA navigation/updates.
 */
export function syncBrowserFavicon(logoUrl) {
  if (typeof document === 'undefined') {
    return;
  }

  const href = resolveSiteLogoUrl(logoUrl);
  let link = document.getElementById('site-favicon') || document.querySelector("link[rel*='icon']");

  if (!link) {
    link = document.createElement('link');
    link.id = 'site-favicon';
    link.rel = 'icon';
    document.head.appendChild(link);
  }

  const lowerHref = href.toLowerCase();
  if (lowerHref.endsWith('.png')) {
    link.type = 'image/png';
  } else if (lowerHref.endsWith('.webp')) {
    link.type = 'image/webp';
  } else if (lowerHref.endsWith('.avif')) {
    link.type = 'image/avif';
  } else if (lowerHref.endsWith('.ico')) {
    link.type = 'image/x-icon';
  } else {
    link.type = 'image/jpeg';
  }

  if (link.getAttribute('href') !== href) {
    link.setAttribute('href', href);
  }
}

const VALID_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
const VALID_EXT_REGEX = /\.(jpe?g|png|webp|avif)$/i;

/**
 * Resolve any image URL format (React /storage/uploads/..., Filament uploads/..., external URLs)
 * into a browser-safe src with graceful legacy/empty fallback.
 */
export function resolveImageUrl(url, fallback = DEFAULT_PROJECT_PLACEHOLDER) {
  if (!url || typeof url !== 'string') {
    return fallback;
  }

  const trimmed = url.trim();
  if (!trimmed || trimmed.includes('1541888946425')) {
    return fallback;
  }

  if (trimmed.startsWith('uploads/')) {
    return `/storage/${trimmed}`;
  }

  if (trimmed.startsWith('storage/uploads/')) {
    return `/${trimmed}`;
  }

  return trimmed;
}

/**
 * Normalize project gallery_images (supports string[] or { url, caption }[] or JSON string)
 * into a clean array of { url, caption }.
 */
export function normalizeProjectGallery(galleryImages) {
  let raw = galleryImages;
  if (typeof raw === 'string') {
    try {
      raw = JSON.parse(raw);
    } catch {
      raw = [];
    }
  }

  if (!Array.isArray(raw)) {
    return [];
  }

  const seen = new Set();
  const normalized = [];

  for (const entry of raw) {
    let url = '';
    let caption = '';

    if (typeof entry === 'string') {
      url = entry.trim();
    } else if (entry && typeof entry === 'object') {
      url = typeof entry.url === 'string' ? entry.url.trim() : '';
      caption = typeof entry.caption === 'string' ? entry.caption : '';
    }

    if (!url || url.includes('1541888946425')) {
      continue;
    }

    const resolved = resolveImageUrl(url, '');
    if (!resolved || seen.has(resolved)) {
      continue;
    }

    seen.add(resolved);
    normalized.push({ url: resolved, caption });
  }

  return normalized;
}

/**
 * Build the combined public media list for a project:
 * Cover thumbnail first, followed by deduplicated gallery_images.
 */
export function getProjectMediaList(project) {
  const coverUrl = resolveImageUrl(project?.thumbnail_url, DEFAULT_PROJECT_PLACEHOLDER);
  const gallery = normalizeProjectGallery(project?.gallery_images);

  const items = [
    {
      url: coverUrl,
      caption: project?.title || 'Foto Utama Proyek',
      isCover: true,
    },
  ];

  const seen = new Set([coverUrl]);
  for (const item of gallery) {
    if (!seen.has(item.url)) {
      seen.add(item.url);
      items.push({
        url: item.url,
        caption: item.caption || project?.title || 'Dokumentasi Proyek',
        isCover: false,
      });
    }
  }

  return items;
}

/**
 * Check whether a selected File is a supported image by MIME type or filename extension.
 */
export function isSupportedImageFile(file) {
  if (!file) return false;
  if (file.type && VALID_MIME_TYPES.includes(file.type.toLowerCase())) {
    return true;
  }
  return VALID_EXT_REGEX.test(file.name || '');
}

/**
 * Read a cookie value from document.cookie.
 */
function getCookieValue(name) {
  if (typeof document === 'undefined' || !document.cookie) {
    return '';
  }
  const cookies = document.cookie.split(';');
  for (const part of cookies) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) {
      return rest.join('=');
    }
  }
  return '';
}

/**
 * Build fresh CSRF headers for fetch() requests in an Inertia SPA.
 * Important: Laravel checks X-CSRF-TOKEN before X-XSRF-TOKEN, so never send a stale meta token
 * alongside a fresh XSRF-TOKEN cookie.
 */
export function getFreshCsrfHeaders(pageCsrfToken = '') {
  if (pageCsrfToken && typeof pageCsrfToken === 'string') {
    return { 'X-CSRF-TOKEN': pageCsrfToken };
  }

  const xsrfCookie = getCookieValue('XSRF-TOKEN');
  if (xsrfCookie) {
    try {
      return { 'X-XSRF-TOKEN': decodeURIComponent(xsrfCookie) };
    } catch {
      return { 'X-XSRF-TOKEN': xsrfCookie };
    }
  }

  const metaToken =
    typeof document !== 'undefined'
      ? document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
      : '';

  return metaToken ? { 'X-CSRF-TOKEN': metaToken } : {};
}

/**
 * Format byte sizes into human-readable Indonesian labels (KB / MB).
 */
export function formatFileSize(bytes) {
  if (!bytes || bytes <= 0) return '0 KB';
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Load an HTMLImageElement from a File using an Object URL.
 */
function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(objectUrl);
      reject(err);
    };
    img.src = objectUrl;
  });
}

/**
 * Convert a Canvas to a Blob asynchronously.
 */
function canvasToBlob(canvas, mimeType, quality) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), mimeType, quality);
  });
}

/**
 * Automatically resize & compress large images on the client via HTML5 Canvas
 * so smartphone/DSLR photos reliably pass PHP's default 2MB upload_max_filesize
 * and load fast for website visitors.
 */
export async function compressImageIfNeeded(
  file,
  {
    maxDimension = 1920,
    targetMaxBytes = 1.5 * 1024 * 1024,
    preserveTransparency = false,
  } = {}
) {
  if (!file || typeof window === 'undefined' || typeof document === 'undefined') {
    return { file, wasCompressed: false };
  }

  try {
    const img = await loadImageFromFile(file);
    const { naturalWidth: origW, naturalHeight: origH } = img;
    const needsResize = origW > maxDimension || origH > maxDimension;
    const needsCompress = file.size > targetMaxBytes;

    if (!needsResize && !needsCompress) {
      return { file, wasCompressed: false };
    }

    let targetW = origW;
    let targetH = origH;
    if (needsResize) {
      const ratio = Math.min(maxDimension / origW, maxDimension / origH);
      targetW = Math.max(1, Math.round(origW * ratio));
      targetH = Math.max(1, Math.round(origH * ratio));
    }

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return { file, wasCompressed: false };
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, targetW, targetH);

    // Keep alpha channel intact for transparent logos (PNG/WebP/AVIF)
    const isTransparentSource =
      preserveTransparency &&
      ['image/png', 'image/webp', 'image/avif'].includes((file.type || '').toLowerCase());
    const preferredTypes = isTransparentSource
      ? ['image/webp', 'image/png']
      : ['image/webp', 'image/jpeg'];
    const qualities = isTransparentSource ? [0.92, 0.85, 0.78] : [0.85, 0.76, 0.66, 0.56];
    let bestBlob = null;

    for (const mimeType of preferredTypes) {
      let supported = true;
      for (const quality of qualities) {
        const blob = await canvasToBlob(canvas, mimeType, quality);
        if (!blob || (mimeType === 'image/webp' && blob.type !== 'image/webp')) {
          supported = false;
          break;
        }
        bestBlob = blob;
        if (blob.size <= targetMaxBytes || mimeType === 'image/png') {
          break;
        }
      }
      if (supported && bestBlob) {
        break;
      }
    }

    if (!bestBlob) {
      return { file, wasCompressed: false };
    }

    // If somehow the re-encoded file is larger than original and original is already under target, keep original
    if (bestBlob.size >= file.size && file.size <= targetMaxBytes) {
      return { file, wasCompressed: false };
    }

    const ext = bestBlob.type === 'image/webp' ? 'webp' : bestBlob.type === 'image/png' ? 'png' : 'jpg';
    const baseName = (file.name || 'image').replace(/\.[^.]+$/, '') || 'image';
    const optimizedFile = new File([bestBlob], `${baseName}.${ext}`, {
      type: bestBlob.type,
      lastModified: Date.now(),
    });

    return {
      file: optimizedFile,
      wasCompressed: true,
      originalSize: file.size,
      compressedSize: optimizedFile.size,
    };
  } catch {
    // Fallback gracefully to original file if canvas decode is unsupported
    return { file, wasCompressed: false };
  }
}
