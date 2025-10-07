# Icon Generation Scripts

This directory contains scripts to generate all required icon files from the HangoutCodex logo SVG.

## Files Generated

The scripts generate the following icon files:

### Public Directory (`/public`)
- `icon-192.png` - 192x192 PNG icon for PWA
- `icon-512.png` - 512x512 PNG icon for PWA
- `apple-icon.png` - 180x180 PNG icon for Apple devices
- `og-default.png` - 1200x630 PNG for Open Graph social sharing

### App Directory (`/src/app`)
- `favicon.ico` - 32x32 ICO file for browser favicon

## Usage

To regenerate all icons from the source SVG:

```bash
npm run generate-icons
```

## Source File

The icons are generated from:
`/public/assets/Hangout Codex Symbol Final (1).svg`

## Scripts

- `generate-icons.js` - Converts SVG to PNG files in various sizes
- `generate-favicon-ico.js` - Converts PNG to ICO format for favicon

## Dependencies

- `sharp` - High-performance image processing
- `to-ico` - PNG to ICO conversion

These are installed as dev dependencies in package.json.