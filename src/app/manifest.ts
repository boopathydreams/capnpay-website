import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cap'n Pay - AI-Native Payment App",
    short_name: "Cap'n Pay",
    description: "India's first AI-native payment app with smart budget caps and safe-to-spend insights",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/images/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/icon-maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['finance', 'productivity', 'business'],
    lang: 'en',
    dir: 'ltr',
    screenshots: [
      {
        src: '/images/screenshot-mobile-1.png',
        sizes: '375x812',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/images/screenshot-desktop-1.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
  }
}