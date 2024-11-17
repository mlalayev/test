import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist', // Vercel, `dist` klasörünü bekler
    sourcemap: true  // Debug için opsiyonel
  }
});
