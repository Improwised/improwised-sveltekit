// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
    site: import.meta.env.VITE_BASE_URL ?? process.env.VITE_BASE_URL,
    integrations: [mdx(), sitemap(), svelte(), tailwind()],
});
