const fs = require('fs');
const path = require('path');

// Read the rename mapping
const renameMapping = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'rename-mapping.json'), 'utf8')
);

// Function to update a file with new paths
function updateFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Apply all the renames
  Object.keys(renameMapping).forEach(oldPath => {
    const newPath = renameMapping[oldPath];
    // Escape special characters for regex
    const escapedOldPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`"${escapedOldPath}"`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, `"${newPath}"`);
      updated = true;
    }
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${path.basename(filePath)}`);
  }
}

// Update component files
const componentsDir = path.join(__dirname, '../src/components');
const enhancedDir = path.join(componentsDir, 'enhanced');

// List of component files to update
const componentFiles = [
  path.join(enhancedDir, 'BrezelJourneySection.tsx'),
  // Add other component files that might have hardcoded paths
];

console.log('Updating component files...');
componentFiles.forEach(updateFile);

// Also update any other files that might have image references
const otherFiles = [
  path.join(__dirname, '../src/app/layout.tsx'),
];

otherFiles.forEach(updateFile);

console.log('Component update complete!');