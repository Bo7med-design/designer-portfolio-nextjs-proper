const fs = require('fs');
const path = require('path');

// Read the rename mapping
const renameMapping = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'rename-mapping.json'), 'utf8')
);

// Read the project data file
const projectDataPath = path.join(__dirname, '../src/data/projectsData.ts');
let projectData = fs.readFileSync(projectDataPath, 'utf8');

// Apply all the renames
Object.keys(renameMapping).forEach(oldPath => {
  const newPath = renameMapping[oldPath];
  // Escape special characters for regex
  const escapedOldPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`'${escapedOldPath}'`, 'g');
  projectData = projectData.replace(regex, `'${newPath}'`);
});

// Write the updated file
fs.writeFileSync(projectDataPath, projectData);

console.log('Updated projectsData.ts with new filenames');

// Also update CSS files with new font names
const criticalCssPath = path.join(__dirname, '../src/styles/critical.css');
const globalsCssPath = path.join(__dirname, '../src/app/globals.css');

let criticalCss = fs.readFileSync(criticalCssPath, 'utf8');
let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');

// Update font references
criticalCss = criticalCss.replace(/Anton-Regular\.woff2/g, 'anton-regular.woff2');
criticalCss = criticalCss.replace(/ReadexPro-VariableFont_HEXP,wght\.woff2/g, 'readexpro-variablefonthexpwght.woff2');

globalsCss = globalsCss.replace(/Anton-Regular\.woff2/g, 'anton-regular.woff2');
globalsCss = globalsCss.replace(/ReadexPro-VariableFont_HEXP,wght\.woff2/g, 'readexpro-variablefonthexpwght.woff2');

fs.writeFileSync(criticalCssPath, criticalCss);
fs.writeFileSync(globalsCssPath, globalsCss);

console.log('Updated CSS files with new font filenames');

// Update layout.tsx with new font names
const layoutPath = path.join(__dirname, '../src/app/layout.tsx');
let layoutTsx = fs.readFileSync(layoutPath, 'utf8');

layoutTsx = layoutTsx.replace(/Anton-Regular\.woff2/g, 'anton-regular.woff2');
layoutTsx = layoutTsx.replace(/ReadexPro-VariableFont_HEXP,wght\.woff2/g, 'readexpro-variablefonthexpwght.woff2');

fs.writeFileSync(layoutPath, layoutTsx);

console.log('Updated layout.tsx with new font filenames');
console.log('All files updated successfully!');