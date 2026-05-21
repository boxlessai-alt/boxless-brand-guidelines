/**
 * Read a URL query parameter by key.
 * @param {string} key
 * @returns {string}
 */
export function getParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || '';
}

/**
 * Convert a Google Drive sharing URL to a direct image URL.
 * @param {string} url
 * @returns {string}
 */
export function convertGoogleDriveUrl(url) {
  if (!url) return url;
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}=s0`;
  }
  return url;
}

/**
 * Inject a Google Font <link> tag into <head>.
 * @param {string} fontName
 */
export function loadFont(fontName) {
  if (!fontName || fontName === 'DM Sans') return;
  const link = document.createElement('link');
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}:wght@400;700&display=swap`;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}
