// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/EcoGoWeb/',  // Set the base path
  build: {
    chunkSizeWarningLimit: 1000  // Increase the chunk size limit (in KB)
  }
});