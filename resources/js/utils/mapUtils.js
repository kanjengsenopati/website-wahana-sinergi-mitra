const ALLOWED_GOOGLE_MAP_HOSTS = new Set([
  'google.com',
  'www.google.com',
  'maps.google.com',
  'maps.app.goo.gl',
  'goo.gl',
]);

const GOOGLE_DOMAIN_REGEX = /^(?:www\.|maps\.)?google\.[a-z]{2,3}(?:\.[a-z]{2})?$/i;

/**
 * Clean a phone number and build a WhatsApp click-to-chat URL.
 */
export function buildWhatsAppUrl(
  phone,
  message = 'Halo CV. Wahana Sinergi Mitra, saya ingin berkonsultasi mengenai proyek konstruksi.'
) {
  if (!phone || typeof phone !== 'string') {
    return '';
  }

  const digits = phone.replace(/\D/g, '').replace(/^0/, '62');
  if (!digits) {
    return '';
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/**
 * Parse and validate a GPS coordinate string ("lat, lng" or "lat lng").
 */
export function parseCoordinates(raw) {
  if (!raw || typeof raw !== 'string') {
    return null;
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  const match = trimmed.match(/^\s*(-?\d{1,2}(?:\.\d+)?)\s*[,;\s]\s*(-?\d{1,3}(?:\.\d+)?)\s*$/);
  if (!match) {
    return null;
  }

  const lat = Number.parseFloat(match[1]);
  const lng = Number.parseFloat(match[2]);

  if (Number.isNaN(lat) || Number.isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    return null;
  }

  return {
    lat,
    lng,
    formatted: `${match[1]}, ${match[2]}`,
  };
}

/**
 * Sanitize either a plain Google Maps URL or a pasted <iframe> embed snippet.
 * Returns { url, isValid } where url is empty string for empty input and isValid is false for untrusted hosts.
 */
export function extractGoogleMapInput(raw) {
  if (!raw || typeof raw !== 'string') {
    return { url: '', isValid: true };
  }

  let candidate = raw.trim();
  if (!candidate) {
    return { url: '', isValid: true };
  }

  if (candidate.toLowerCase().includes('<iframe')) {
    const srcMatch = candidate.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
    if (!srcMatch) {
      return { url: '', isValid: false };
    }
    candidate = srcMatch[1].replace(/&amp;/g, '&').trim();
  }

  try {
    const parsed = new URL(candidate);
    const host = parsed.hostname.toLowerCase();
    const isHttps = parsed.protocol === 'https:';
    const isGoogleHost = ALLOWED_GOOGLE_MAP_HOSTS.has(host) || GOOGLE_DOMAIN_REGEX.test(host);

    if (!isHttps || !isGoogleHost) {
      return { url: '', isValid: false };
    }

    if (host === 'goo.gl' && !parsed.pathname.startsWith('/maps')) {
      return { url: '', isValid: false };
    }

    return { url: candidate, isValid: true };
  } catch {
    return { url: '', isValid: false };
  }
}

/**
 * Extract pinpoint coordinates from a Google Maps URL (!3d...!4d..., query params, or @lat,lng).
 */
export function extractCoordinatesFromGoogleMapUrl(url) {
  if (!url || typeof url !== 'string') {
    return null;
  }

  const pinMatch = url.match(/!3d(-?\d{1,2}\.\d+)!4d(-?\d{1,3}\.\d+)/);
  if (pinMatch) {
    return parseCoordinates(`${pinMatch[1]}, ${pinMatch[2]}`);
  }

  const queryMatch = url.match(/[?&](?:q|query|ll|destination)=(-?\d{1,2}\.\d+)(?:,|%2C|\+)(-?\d{1,3}\.\d+)/i);
  if (queryMatch) {
    return parseCoordinates(`${queryMatch[1]}, ${queryMatch[2]}`);
  }

  const atMatch = url.match(/@(-?\d{1,2}\.\d+),(-?\d{1,3}\.\d+)/);
  if (atMatch) {
    return parseCoordinates(`${atMatch[1]}, ${atMatch[2]}`);
  }

  return null;
}

/**
 * Resolve embeddable & external Google Maps URLs plus precision flags for the Workshop location.
 */
export function resolveWorkshopMap({ coordinates = '', mapUrl = '', address = '' } = {}) {
  const parsedCoords = parseCoordinates(coordinates);
  const { url: cleanMapUrl, isValid: isMapUrlValid } = extractGoogleMapInput(mapUrl);

  const isEmbedUrl = Boolean(cleanMapUrl && cleanMapUrl.toLowerCase().includes('/maps/embed'));
  const isShortLink = Boolean(
    cleanMapUrl && /^https:\/\/(?:maps\.app\.goo\.gl|goo\.gl\/maps)\//i.test(cleanMapUrl)
  );
  const urlCoords = extractCoordinatesFromGoogleMapUrl(cleanMapUrl);
  const effectiveCoords = parsedCoords || urlCoords;

  let embedUrl = '';
  let isPrecise = false;

  if (isEmbedUrl) {
    embedUrl = cleanMapUrl;
    isPrecise = true;
  } else if (effectiveCoords) {
    embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(effectiveCoords.formatted)}&hl=id&z=17&output=embed`;
    isPrecise = true;
  } else if (address && address.trim()) {
    embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address.trim())}&hl=id&z=16&output=embed`;
    isPrecise = false;
  }

  let externalUrl = '';
  if (cleanMapUrl && !isEmbedUrl) {
    externalUrl = cleanMapUrl;
  } else if (effectiveCoords) {
    externalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(effectiveCoords.formatted)}`;
  } else if (address && address.trim()) {
    externalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.trim())}`;
  }

  return {
    embedUrl,
    externalUrl,
    coordinatesLabel: effectiveCoords?.formatted || '',
    isPrecise,
    isMapUrlValid,
    isShortLinkWithoutCoords: isShortLink && !parsedCoords,
    hasInvalidCoordinatesInput: Boolean(coordinates && coordinates.trim() && !parsedCoords),
  };
}
