#!/usr/bin/env node

/**
 * Quick SEO & Analytics Check for HangoutCodex
 * Run: node scripts/check-seo.js
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    log(`  ✓ ${description}`, 'green');
    return true;
  } else {
    log(`  ✗ ${description}`, 'red');
    log(`    Missing: ${filePath}`, 'yellow');
    return false;
  }
}

function checkEnvVar(varName) {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    if (envContent.includes(varName) && !envContent.includes(`${varName}=\n`)) {
      log(`  ✓ ${varName}`, 'green');
      return true;
    }
  }
  log(`  ⚠ ${varName} not configured`, 'yellow');
  return false;
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(searchString)) {
      log(`  ✓ ${description}`, 'green');
      return true;
    }
  }
  log(`  ✗ ${description}`, 'red');
  return false;
}

async function main() {
  log('\n╔════════════════════════════════════════════════════════╗', 'cyan');
  log('║     HangoutCodex SEO & Analytics Verification         ║', 'cyan');
  log('╚════════════════════════════════════════════════════════╝\n', 'cyan');

  let score = 0;
  let total = 0;

  // Analytics Components
  log('📊 Analytics Components:', 'blue');
  total += 3;
  score += checkFile('src/components/analytics/GoogleAnalytics.tsx', 'Google Analytics') ? 1 : 0;
  score += checkFile('src/components/analytics/Clarity.tsx', 'Microsoft Clarity') ? 1 : 0;
  score += checkFile('src/components/analytics/Mixpanel.tsx', 'Mixpanel') ? 1 : 0;

  // Analytics Helper
  log('\n🔧 Analytics Helpers:', 'blue');
  total += 1;
  score += checkFile('src/lib/mixpanel.ts', 'Mixpanel helper functions') ? 1 : 0;

  // SEO Files
  log('\n🔍 SEO Configuration:', 'blue');
  total += 4;
  score += checkFile('src/app/layout.tsx', 'Root layout with metadata') ? 1 : 0;
  score += checkFile('src/app/sitemap.ts', 'Dynamic sitemap') ? 1 : 0;
  score += checkFile('src/app/robots.ts', 'Robots.txt') ? 1 : 0;
  score += checkFile('src/lib/seo.ts', 'SEO utility library') ? 1 : 0;

  // Check for correct branding
  log('\n🏷️  Branding Check:', 'blue');
  total += 3;
  score += checkFileContent('src/app/layout.tsx', 'HangoutCodex', 'Layout uses HangoutCodex branding') ? 1 : 0;
  score += checkFileContent('src/lib/seo.ts', 'hangoutcodex.com', 'SEO lib uses correct domain') ? 1 : 0;
  score += checkFileContent('src/app/sitemap.ts', 'hangoutcodex.com', 'Sitemap uses correct domain') ? 1 : 0;

  // PWA
  log('\n📱 PWA Configuration:', 'blue');
  total += 1;
  score += checkFile('public/manifest.json', 'PWA manifest') ? 1 : 0;

  // Required Images
  log('\n🖼️  SEO Images (REQUIRED):', 'blue');
  total += 4;
  score += checkFile('public/og-default.png', 'Open Graph image (1200x630)') ? 1 : 0;
  score += checkFile('public/icon-192.png', 'App icon 192x192') ? 1 : 0;
  score += checkFile('public/icon-512.png', 'App icon 512x512') ? 1 : 0;
  score += checkFile('public/apple-icon.png', 'Apple touch icon (180x180)') ? 1 : 0;

  // Environment Variables
  log('\n🔐 Environment Variables:', 'blue');
  total += 4;
  score += checkEnvVar('NEXT_PUBLIC_SITE_URL') ? 1 : 0;
  score += checkEnvVar('NEXT_PUBLIC_GA_MEASUREMENT_ID') ? 1 : 0;
  score += checkEnvVar('NEXT_PUBLIC_CLARITY_ID') ? 1 : 0;
  score += checkEnvVar('NEXT_PUBLIC_MIXPANEL_TOKEN') ? 1 : 0;

  // Documentation
  log('\n📚 Documentation:', 'blue');
  total += 3;
  score += checkFile('ANALYTICS_SETUP.md', 'Analytics guide') ? 1 : 0;
  score += checkFile('SEO_SETUP.md', 'SEO guide') ? 1 : 0;
  score += checkFile('QUICK_START.md', 'Quick start guide') ? 1 : 0;

  // Calculate percentage
  const percentage = Math.round((score / total) * 100);
  
  log('\n' + '═'.repeat(60), 'cyan');
  
  if (percentage === 100) {
    log(`\n🎉 PERFECT SCORE: ${score}/${total} (${percentage}%)`, 'green');
    log('\n✨ Everything is set up correctly!', 'green');
    log('   Your SEO and analytics are fully operational.', 'green');
  } else if (percentage >= 80) {
    log(`\n✅ GOOD: ${score}/${total} (${percentage}%)`, 'green');
    log('\n👍 Most components are configured.', 'green');
    log('   Review the items marked with ✗ or ⚠ above.', 'yellow');
  } else if (percentage >= 60) {
    log(`\n⚠️  FAIR: ${score}/${total} (${percentage}%)`, 'yellow');
    log('\n📋 Several items need attention.', 'yellow');
    log('   Check QUICK_START.md for next steps.', 'yellow');
  } else {
    log(`\n❌ NEEDS WORK: ${score}/${total} (${percentage}%)`, 'red');
    log('\n🔧 Many components are missing.', 'red');
    log('   Follow QUICK_START.md to complete setup.', 'yellow');
  }

  // Next steps
  log('\n📋 Next Steps:', 'blue');
  
  const missingImages = !fs.existsSync(path.join(process.cwd(), 'public/og-default.png'));
  const missingEnv = !fs.existsSync(path.join(process.cwd(), '.env.local'));
  
  if (missingImages) {
    log('   1. ⚡ Create SEO images (see SEO_SETUP.md)', 'yellow');
  }
  if (missingEnv) {
    log('   2. ⚡ Set up .env.local file', 'yellow');
  }
  log('   3. 🧪 Test: npm run build && npm run start', 'cyan');
  log('   4. 🌐 Submit sitemap to Google Search Console', 'cyan');
  log('   5. 📊 Verify analytics are working', 'cyan');

  log('\n📚 Documentation:', 'blue');
  log('   • QUICK_START.md - Fast setup guide', 'cyan');
  log('   • ANALYTICS_SETUP.md - How to use Mixpanel', 'cyan');
  log('   • SEO_SETUP.md - Complete SEO guide', 'cyan');

  log('\n' + '═'.repeat(60) + '\n', 'cyan');
}

main().catch(console.error);