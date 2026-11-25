export const DEFAULT_BADGE_COLOR = '#059669';

export const BADGE_COLOR_PRESETS = [
  { name: 'Emerald', hex: '#059669' },
  { name: 'Blue', hex: '#2563EB' },
  { name: 'Amber', hex: '#D97706' },
  { name: 'Rose', hex: '#E11D48' },
  { name: 'Violet', hex: '#7C3AED' },
  { name: 'Slate', hex: '#334155' },
];

/**
 * Normalize a hex color string to #RRGGBB format or fallback to DEFAULT_BADGE_COLOR.
 */
export function normalizeBadgeColor(hex) {
  if (typeof hex !== 'string') return DEFAULT_BADGE_COLOR;
  const trimmed = hex.trim();
  if (/^#[0-9A-Fa-f]{6}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  return DEFAULT_BADGE_COLOR;
}

/**
 * Compute readable text color (#FFFFFF or #0F172A) based on YIQ luminance of a hex background.
 */
export function getBadgeContrastColor(hex) {
  const clean = normalizeBadgeColor(hex).replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 155 ? '#0F172A' : '#FFFFFF';
}
