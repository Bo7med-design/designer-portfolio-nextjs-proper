# GitHub Pages Asset Path Fix

## Problem
When deploying the Next.js portfolio to GitHub Pages at `https://bo7med-design.github.io/designer-portfolio-nextjs-proper/`, the public assets (fonts, images) were not loading because they were being referenced with absolute paths that didn't account for the GitHub Pages base path.

## Root Cause
- GitHub Pages serves the site from a subdirectory: `/designer-portfolio-nextjs-proper/`
- Assets were referenced as `/fonts/...` and `/images/...` which tried to load from the root domain
- The correct paths should be `/designer-portfolio-nextjs-proper/fonts/...` and `/designer-portfolio-nextjs-proper/images/...`

## Solution Implemented

### 1. Next.js Configuration Updates
- Fixed `assetPrefix` in `next.config.js` to properly prefix assets
- Ensured `basePath` is correctly set for GitHub Pages deployment

### 2. CSS Asset Path Handling
- Created `scripts/generate-css.js` to automatically update font paths in CSS files during build
- The script runs before the Next.js build and updates:
  - `src/styles/critical.css`
  - `src/app/globals.css`
- Font URLs are updated from `/fonts/...` to `/designer-portfolio-nextjs-proper/fonts/...` for GitHub Pages builds

### 3. Image Asset Path Utility
- Created `src/utils/assetPath.ts` utility function
- Updated hero components to use `getAssetPath()` for image sources
- The utility automatically detects GitHub Pages deployment and prefixes paths accordingly

### 4. GitHub Actions Workflow Updates
- Added CSS generation step to the deployment workflow
- Ensures assets are properly prefixed before building the static site

## Files Modified
- `next.config.js` - Fixed assetPrefix configuration
- `package.json` - Updated export script to run CSS generation
- `.github/workflows/deploy-pages.yml` - Added CSS generation step
- `src/components/HeroSection.tsx` - Updated to use asset path utility
- `src/components/OptimizedHeroSection.tsx` - Updated to use asset path utility
- `src/components/PerformantHeroSection.tsx` - Updated to use asset path utility
- `src/styles/critical.css` - Font paths updated for GitHub Pages
- `src/app/globals.css` - Font paths updated for GitHub Pages

## Files Created
- `scripts/generate-css.js` - Automated CSS path generation script
- `src/utils/assetPath.ts` - Asset path utility function

## Result
After these changes, all public assets (fonts, images) should now load correctly on the GitHub Pages deployment at `https://bo7med-design.github.io/designer-portfolio-nextjs-proper/`.

## Testing
The fix has been tested by:
1. Running `npm run export` locally to verify the build process
2. Confirming CSS files are updated with correct paths
3. Verifying the output directory contains all assets
4. Pushing changes to trigger automatic GitHub Pages deployment

The portfolio should now display correctly with all fonts and images loading properly.