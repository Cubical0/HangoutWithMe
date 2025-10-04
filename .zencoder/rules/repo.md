---
description: Repository Information Overview
alwaysApply: true
---

# Hangout Finance Web Application Information

## Summary
A Next.js web application for a cryptocurrency trading platform called "Hangout Finance" or "CryptoTrade". The project uses React 19, TypeScript, and Tailwind CSS for styling. It features smooth scrolling with Lenis, animations with Framer Motion, and 3D graphics with Three.js.

## Structure
- **src/app**: Next.js app router pages and layouts
- **src/components**: React components organized by type (layout, sections, UI)
- **src/hooks**: Custom React hooks including Lenis scroll integration
- **src/lib**: Utility functions and shared code
- **public**: Static assets and images

## Language & Runtime
**Language**: TypeScript
**Version**: TypeScript 5.x
**Build System**: Next.js build system
**Package Manager**: npm/yarn (both supported)

## Dependencies
**Main Dependencies**:
- Next.js 15.5.3 (App Router)
- React 19.1.0
- Framer Motion 12.23.12
- Three.js 0.180.0
- @react-three/fiber 9.3.0
- Lenis 1.3.11 (smooth scrolling)
- Tailwind CSS 4.x
- Lucide React 0.544.0 (icons)

**Development Dependencies**:
- ESLint 9.x
- TypeScript 5.x
- Tailwind CSS tooling

## Build & Installation
```bash
# Install dependencies
npm install
# or
yarn install

# Development server
npm run dev
# or
yarn dev

# Production build
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start
```

## Main Files & Resources
**Entry Points**:
- `src/app/layout.tsx`: Root layout with providers and global components
- `src/app/page.tsx`: Homepage component
- `src/app/globals.css`: Global CSS styles

**Configuration Files**:
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind
- `eslint.config.mjs`: ESLint configuration

**Key Components**:
- `src/components/providers/LenisProvider.tsx`: Smooth scrolling provider
- `src/components/layout/Navbar.tsx`: Site navigation
- `src/components/sections/*`: Page-specific content sections
- `src/components/ui/*`: Reusable UI components including Vortex effect