import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'profile.jpg'],
      manifest: {
        name: 'Sahitya Biswas | Data Scientist & AI Engineer',
        short_name: 'SB Portfolio',
        description: 'Data Scientist & AI Engineer Portfolio',
        theme_color: '#020202',
        background_color: '#020202',
        display: 'standalone',
        start_url: '/Portfolio/',
        icons: [
          {
            src: '/Portfolio/favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/Portfolio/favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
