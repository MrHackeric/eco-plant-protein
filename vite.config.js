import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png'],
  base: '/',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Optional if you want to style SVGs as icons
      },
    }),
    tailwindcss(),
  ],
})