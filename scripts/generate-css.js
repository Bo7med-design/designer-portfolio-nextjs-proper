const fs = require('fs');
const path = require('path');

// Check if we're building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/designer-portfolio-nextjs-proper' : '';

console.log(`Building for ${isGithubPages ? 'GitHub Pages' : 'local development'}`);

// Read the template CSS files
const criticalCssPath = path.join(__dirname, '../src/styles/critical.css');
const globalsCssPath = path.join(__dirname, '../src/app/globals.css');

let criticalCss = fs.readFileSync(criticalCssPath, 'utf8');
let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');

// Replace font URLs with the correct base path
if (isGithubPages) {
  criticalCss = criticalCss.replace(/url\('\/fonts\//g, `url('${basePath}/fonts/`);
  globalsCss = globalsCss.replace(/url\('\/fonts\//g, `url('${basePath}/fonts/`);
  
  console.log('Updated font paths for GitHub Pages deployment');
} else {
  // Ensure local development uses correct paths
  criticalCss = criticalCss.replace(/url\('\/designer-portfolio-nextjs-proper\/fonts\//g, `url('/fonts/`);
  globalsCss = globalsCss.replace(/url\('\/designer-portfolio-nextjs-proper\/fonts\//g, `url('/fonts/`);
  
  console.log('Reset font paths for local development');
}

// Write the updated CSS files
fs.writeFileSync(criticalCssPath, criticalCss);
fs.writeFileSync(globalsCssPath, globalsCss);

console.log(`CSS files updated successfully`);