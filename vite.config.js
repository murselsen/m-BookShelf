import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  root: './',
  base: '/',
  plugins: [react()],

  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
       
      },
    },
    open: true,
  },
});
