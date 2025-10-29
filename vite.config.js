import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    open: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true,
      interval: 500
    }
  },
  css: {
    devSourcemap: true
  }
})