// import franken from 'franken-ui/plugin-vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		// franken({ customPalette: {} }),
		tailwindcss()
	]
});
