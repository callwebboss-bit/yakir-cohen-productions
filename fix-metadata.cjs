const fs = require('fs');
const path = require('path');

function fixMetadataFiles(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && file !== 'node_modules') {
      fixMetadataFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');

      if (content.includes('viewport:') || content.includes('themeColor:')) {
        console.log(`Fixing: ${filePath}`);

        // Extract viewport and themeColor from metadata
        const viewportMatch = content.match(/viewport:\s*['"]([^'"]*)['"]/);
        const themeColorMatch = content.match(/themeColor:\s*['"]([^'"]*)['"]/);

        let newContent = content;

        // Remove viewport and themeColor from metadata object
        newContent = newContent.replace(/,\s*viewport:\s*['"][^'"]*['"]/g, '');
        newContent = newContent.replace(/,\s*themeColor:\s*['"][^'"]*['"]/g, '');
        newContent = newContent.replace(/viewport:\s*['"][^'"]*['"],?\s*/g, '');
        newContent = newContent.replace(/themeColor:\s*['"][^'"]*['"],?\s*/g, '');

        // Add separate exports
        let exports = '';

        if (viewportMatch) {
          exports += `export const viewport = "${viewportMatch[1]}";\n\n`;
        }

        if (themeColorMatch) {
          exports += `export const themeColor = "${themeColorMatch[1]}";\n\n`;
        }

        // Insert exports before the metadata export
        const metadataIndex = newContent.indexOf('export const metadata');
        if (metadataIndex !== -1) {
          newContent = newContent.slice(0, metadataIndex) + exports + newContent.slice(metadataIndex);
        }

        fs.writeFileSync(filePath, newContent);
      }
    }
  }
}

fixMetadataFiles('./src/app');