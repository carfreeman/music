import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Music App',
        theme_color: '#ff5e3a',
        icons: [
          {
            src: 'assets/img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        screenshots: [{
          src: "assets/img/screenshot.png",
          sizes: "800x600",
          form_factor: "wide",
          label: "test desktop test"
        },
        {
          src: "assets/img/screenshot.png",
          sizes: "800x600",
          form_factor: "narrow",
          label: "test mobile test"
        },
      ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,}']
      },//almacenamiento en cache
    }),
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
