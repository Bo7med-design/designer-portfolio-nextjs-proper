const fs = require('fs');
const path = require('path');

// Function to rename files by removing spaces and special characters
function sanitizeFilename(filename) {
  return filename
    .replace(/\s+/g, '-')  // Replace spaces with hyphens
    .replace(/[^a-zA-Z0-9.-]/g, '')  // Remove special characters except hyphens and dots
    .toLowerCase();
}

// Function to recursively rename files in a directory
function renameFilesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  const renames = [];
  
  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subRenames = renameFilesInDirectory(itemPath);
      renames.push(...subRenames);
    } else if (stat.isFile()) {
      const sanitized = sanitizeFilename(item);
      if (sanitized !== item) {
        const newPath = path.join(dirPath, sanitized);
        fs.renameSync(itemPath, newPath);
        renames.push({
          old: item,
          new: sanitized,
          directory: path.basename(dirPath)
        });
        console.log(`Renamed: ${item} -> ${sanitized}`);
      }
    }
  });
  
  return renames;
}

// Start renaming from public directory
const publicDir = path.join(__dirname, '../public');
console.log('Starting file renaming process...');

const allRenames = renameFilesInDirectory(publicDir);

// Generate mapping for updating project data
const renameMapping = {};
allRenames.forEach(rename => {
  const oldPath = `/${rename.directory}/${rename.old}`;
  const newPath = `/${rename.directory}/${rename.new}`;
  renameMapping[oldPath] = newPath;
});

// Write the mapping to a file for reference
fs.writeFileSync(
  path.join(__dirname, 'rename-mapping.json'),
  JSON.stringify(renameMapping, null, 2)
);

console.log(`\nRenamed ${allRenames.length} files.`);
console.log('Rename mapping saved to scripts/rename-mapping.json');
console.log('\nNext step: Update projectsData.ts with the new filenames.');