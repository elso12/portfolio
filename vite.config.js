import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ensures correct paths when deployed
  build: {
    outDir: 'dist', // default, matches Netlify publish folder
  },
})
