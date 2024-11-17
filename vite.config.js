import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true, // Yönlendirme sorunlarını çözer
  },
});
