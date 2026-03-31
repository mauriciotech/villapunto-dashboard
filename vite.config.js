import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3232,
    host: true,
  },
  build: {
    outDir: 'dist',
  },
});
