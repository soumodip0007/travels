/**
 * Image Optimization Utility
 * Provides helpers for responsive images and optimization
 */

/**
 * Generate optimized image URL with query parameters
 * Useful for services like Unsplash, Cloudinary, etc.
 * @param {string} url - Original image URL
 * @param {number} width - Desired width
 * @param {number} quality - Image quality (1-100)
 * @returns {string} Optimized URL
 */
export function getOptimizedImageUrl(url, width = 800, quality = 80) {
  if (!url) return url;

  // Check if it's an Unsplash URL
  if (url.includes("unsplash.com")) {
    const params = new URLSearchParams();
    params.set("w", width);
    params.set("q", quality);
    params.set("fm", "webp"); // Request WebP format
    params.set("fit", "max");

    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}${params.toString()}`;
  }

  // For other URLs, return as-is
  return url;
}

/**
 * Generate responsive image srcSet
 * @param {string} url - Original image URL
 * @param {array} sizes - Array of widths [320, 640, 1200, etc.]
 * @returns {string} srcSet string for img tag
 */
export function generateSrcSet(url, sizes = [320, 640, 1200]) {
  if (!url || !url.includes("unsplash.com")) {
    return "";
  }

  return sizes
    .map((size) => `${getOptimizedImageUrl(url, size, 80)} ${size}w`)
    .join(", ");
}

/**
 * Get blurred placeholder URL
 * @param {string} url - Original image URL
 * @returns {string} Small blurred image URL
 */
export function getPlaceholderUrl(url) {
  return getOptimizedImageUrl(url, 50, 20); // Very small, low quality
}

/**
 * Get thumbnail URL for gallery previews
 * @param {string} url - Original image URL
 * @returns {string} Thumbnail URL
 */
export function getThumbnailUrl(url) {
  return getOptimizedImageUrl(url, 300, 75);
}

/**
 * Get full-quality image URL
 * @param {string} url - Original image URL
 * @returns {string} Full quality image URL
 */
export function getFullQualityUrl(url) {
  return getOptimizedImageUrl(url, 1920, 90);
}
