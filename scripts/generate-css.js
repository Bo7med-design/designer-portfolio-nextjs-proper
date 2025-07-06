const fs = require('fs');
const path = require('path');

// Check if we're building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/designer-portfolio-nextjs-proper' : '';

console.log(`Building for ${isGithubPages ? 'GitHub Pages' : 'local development'}`);

// Read the template files
const criticalCssPath = path.join(__dirname, '../src/styles/critical.css');
const globalsCssPath = path.join(__dirname, '../src/app/globals.css');
const layoutPath = path.join(__dirname, '../src/app/layout.tsx');

let criticalCss = fs.readFileSync(criticalCssPath, 'utf8');
let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');
let layoutTsx = fs.readFileSync(layoutPath, 'utf8');

// Replace paths with the correct base path
if (isGithubPages) {
  // Update CSS font paths
  criticalCss = criticalCss.replace(/url\('\/fonts\//g, `url('${basePath}/fonts/`);
  globalsCss = globalsCss.replace(/url\('\/fonts\//g, `url('${basePath}/fonts/`);
  
  // Update layout.tsx asset paths
  layoutTsx = layoutTsx.replace(/href="\/fonts\//g, `href="${basePath}/fonts/`);
  layoutTsx = layoutTsx.replace(/href="\/hero-image\.webp"/g, `href="${basePath}/hero-image.webp"`);
  layoutTsx = layoutTsx.replace(/href="\/manifest\.json"/g, `href="${basePath}/manifest.json"`);
  layoutTsx = layoutTsx.replace(/href="\/favicon\.ico"/g, `href="${basePath}/favicon.ico"`);
  layoutTsx = layoutTsx.replace(/href="\/logo192\.png"/g, `href="${basePath}/logo192.png"`);
  
  // Update metadata image paths
  layoutTsx = layoutTsx.replace(/url: '\/hero-image\.webp'/g, `url: '${basePath}/hero-image.webp'`);
  layoutTsx = layoutTsx.replace(/images: \['\/hero-image\.webp'\]/g, `images: ['${basePath}/hero-image.webp']`);
  
  console.log('Updated asset paths for GitHub Pages deployment');
} else {
  // Ensure local development uses correct paths
  criticalCss = criticalCss.replace(/url\('\/designer-portfolio-nextjs-proper\/fonts\//g, `url('/fonts/`);
  globalsCss = globalsCss.replace(/url\('\/designer-portfolio-nextjs-proper\/fonts\//g, `url('/fonts/`);
  
  // Reset layout.tsx paths for local development
  layoutTsx = layoutTsx.replace(/href="\/designer-portfolio-nextjs-proper\/fonts\//g, `href="/fonts/`);
  layoutTsx = layoutTsx.replace(/href="\/designer-portfolio-nextjs-proper\/hero-image\.webp"/g, `href="/hero-image.webp"`);
  layoutTsx = layoutTsx.replace(/href="\/designer-portfolio-nextjs-proper\/manifest\.json"/g, `href="/manifest.json"`);
  layoutTsx = layoutTsx.replace(/href="\/designer-portfolio-nextjs-proper\/favicon\.ico"/g, `href="/favicon.ico"`);
  layoutTsx = layoutTsx.replace(/href="\/designer-portfolio-nextjs-proper\/logo192\.png"/g, `href="/logo192.png"`);
  
  // Reset metadata paths
  layoutTsx = layoutTsx.replace(/url: '\/designer-portfolio-nextjs-proper\/hero-image\.webp'/g, `url: '/hero-image.webp'`);
  layoutTsx = layoutTsx.replace(/images: \['\/designer-portfolio-nextjs-proper\/hero-image\.webp'\]/g, `images: ['/hero-image.webp']`);
  
  console.log('Reset asset paths for local development');
}

// Write the updated files
fs.writeFileSync(criticalCssPath, criticalCss);
fs.writeFileSync(globalsCssPath, globalsCss);
fs.writeFileSync(layoutPath, layoutTsx);

console.log(`All asset paths updated successfully`);