import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BoneheadLabsSite/',
  server: {
    port: 3000,
    open: true
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'css/[name]-[hash].[ext]'
      }
    }
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
})
