const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const faviconPngPath = path.join(__dirname, '../src/app/favicon.png');
const faviconIcoPath = path.join(__dirname, '../src/app/favicon.ico');

async function generateFaviconIco() {
  try {
    const pngBuffer = fs.readFileSync(faviconPngPath);
    const icoBuffer = await toIco([pngBuffer], { sizes: [32] });
    fs.writeFileSync(faviconIcoPath, icoBuffer);
    console.log('✓ Generated favicon.ico');
    
    // Clean up the temporary PNG file
    fs.unlinkSync(faviconPngPath);
    console.log('✓ Cleaned up temporary favicon.png');
    
    console.log('\n✅ Favicon.ico generated successfully!');
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
    process.exit(1);
  }
}

generateFaviconIco();