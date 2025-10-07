const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/assets/Hangout Codex Symbol Final (1).svg');
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../src/app');

async function generateIcons() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);

    // Generate icon-192.png
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✓ Generated icon-192.png');

    // Generate icon-512.png
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✓ Generated icon-512.png');

    // Generate apple-icon.png (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-icon.png'));
    console.log('✓ Generated apple-icon.png');

    // Generate favicon.ico (32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(appDir, 'favicon.png'));
    console.log('✓ Generated favicon.png (you can convert this to .ico if needed)');

    // Generate og-default.png (1200x630 for Open Graph)
    await sharp(svgBuffer)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'og-default.png'));
    console.log('✓ Generated og-default.png');

    console.log('\n✅ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();