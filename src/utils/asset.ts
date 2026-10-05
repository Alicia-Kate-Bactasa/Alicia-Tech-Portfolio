/**
 * Utility to resolve asset URLs consistently across all environments:
 * - Local Vite dev server
 * - Vercel deployment (root path '/')
 * - GitHub Pages (repository subpath e.g. '/Alicia-Tech-Portfolio/')
 * - Figma Make preview (FIGMA_PUBLIC_URL)
 *
 * It attaches a cache-busting version parameter to ensure browsers
 * on all devices always load the latest photos and assets rather than
 * serving stale cached data or corrupted Git LFS pointers.
 */

// Bump this version string whenever assets are updated to guarantee immediate fresh loads
export const ASSET_VERSION = "20261005_v3"

export function assetUrl(path: string, bustCache = true): string {
  if (!path) return ""

  // Return external URLs or data URIs as-is
  if (/^(?:https?:|\/\/|data:)/i.test(path)) {
    return path
  }

  // Get base URL from Vite ('./' or '/' or repo subpath)
  const base = import.meta.env.BASE_URL || "./"
  const cleanBase = base.endsWith("/") ? base : `${base}/`
  const cleanPath = path.startsWith("/") ? path.slice(1) : path
  const resolved = `${cleanBase}${cleanPath}`

  if (!bustCache) {
    return resolved
  }

  const separator = resolved.includes("?") ? "&" : "?"
  return `${resolved}${separator}v=${ASSET_VERSION}`
}
