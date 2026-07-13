import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    __IS_DEV__: command === 'serve',
  },
  build: {
    rollupOptions: {
      external: (id) => id.includes('local-assets'),
    },
  },
}));
