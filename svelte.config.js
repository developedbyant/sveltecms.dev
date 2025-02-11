import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			svelteCMS:"src/svelteCMS/*",
			kitDocs:"src/kitDocs/*",
            client:"src/client/*",
		}
	}
};

export default config;
