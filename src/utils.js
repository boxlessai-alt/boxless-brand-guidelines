/**
 * Read a URL query parameter by key.
 * @param {string} key
 * @returns {string}
 */
export function getParam(key) {
  const params = new URLSearchParams(window.location.search);
  const value = params.get(key);
  return value ? decodeURIComponent(value) : '';
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
 * Load Google Fonts using WebFontLoader.
 * @param {string} fontHeading
 * @param {string} fontBody
 * @returns {Promise<void>}
 */
export function loadFonts(fontHeading, fontBody) {
  const heading = fontHeading && fontHeading !== 'Inter' ? fontHeading : 'Inter';
  const body = fontBody && fontBody !== 'Inter' ? fontBody : 'Inter';

  return new Promise((resolve) => {
    import('webfontloader').then((WebFontModule) => {
      const WebFont = WebFontModule.default || WebFontModule;
      WebFont.load({
        google: {
          families: [heading, body],
        },
        active: () => resolve(),
        inactive: () => resolve(),
      });
    }).catch(() => resolve());
  });
}
