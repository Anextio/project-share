import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        sveltekit(),
        tsconfigPaths() // This helps Vitest to understand the path aliases from jsconfig.json or tsconfig.json
    ],
    test: {
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,ts}'],
        globals: true
    }
});