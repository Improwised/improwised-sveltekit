import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions:
		{
			output:{
				manualChunks:(id) =>
				{
					return "appm-bundle";

				}
			}
		},
		// cssTarget: 'chrome61',
		// minify: 'esbuild', // Minifies CSS and JS
		// cssCodeSplit: true, // Splits CSS into separate files per chunk
	},

});
