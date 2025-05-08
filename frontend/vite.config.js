import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Required for path.resolve
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      // Add more aliases as needed
    },
  },
});