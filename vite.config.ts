import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Match the GitHub Pages repo path without a leading slash
  base: 'Deployment/',
  plugins: [react()],
});
