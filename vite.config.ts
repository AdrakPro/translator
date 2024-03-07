import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit(), purgeCss()],
  test: {
    include: ['src/tests/**/*.test.{js,ts}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
    reporters: ['verbose'],
    restoreMocks: true
  },
  resolve: {
    alias: {
      $routes: path.resolve(__dirname, './src/routes')
    }
  }
});
