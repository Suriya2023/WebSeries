import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Web Series - Movies',
        short_name: 'Web Series',
        description: 'Discover and watch latest movies, TV shows, and anime',
        theme_color: '#7cb3c0',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'icon_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/suriya2023\.github\.io\/WebSeries\/.*/,
            handler: 'StaleWhileRevalidate', // ✅ Fix: Capitalized correctly
            options: {
              cacheName: 'webSeries-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          }
        ]
      }
    })
  ],
  base: "/WebSeries/"
});
