import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_TIMESTAMP: new Date().toISOString(),
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/**',
      },
    ],
  },
  // Fabric.js and pdfkit need to be excluded from SSR bundling
  serverExternalPackages: [
    'fabric',
    'pdfkit',
    'sharp',
    'canvas',
    '@napi-rs/canvas',
    'pdfjs-dist',
    'nodemailer',
  ],
}

export default nextConfig
