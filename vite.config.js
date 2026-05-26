import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    hmr: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'katex': ['katex']
        }
      }
    }
  }
}
