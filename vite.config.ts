import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use the repo name so GitHub Pages serves assets from the right path
  base: '/Deployment/',
  plugins: [react()],
});
