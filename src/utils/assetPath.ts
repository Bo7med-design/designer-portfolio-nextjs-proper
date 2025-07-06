/**
 * Utility function to handle asset paths for GitHub Pages deployment
 * Ensures assets are properly prefixed with the base path when deployed
 */

// Check if we're in production and building for GitHub Pages
const isProduction = process.env.NODE_ENV === 'production';
const isGithubPages = typeof window !== 'undefined' 
  ? window.location.hostname === 'bo7med-design.github.io'
  : process.env.GITHUB_PAGES === 'true';

const basePath = isProduction && isGithubPages 
  ? '/designer-portfolio-nextjs-proper' 
  : '';

/**
 * Get the correct asset path for images, fonts, and other static assets
 * @param path - The asset path starting with /
 * @returns The properly prefixed asset path
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return the path with proper base path prefix
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}

/**
 * Get the correct asset path for use in CSS url() functions
 * @param path - The asset path starting with /
 * @returns The properly prefixed asset path for CSS
 */
export function getCSSAssetPath(path: string): string {
  return getAssetPath(path);
}

export default getAssetPath;