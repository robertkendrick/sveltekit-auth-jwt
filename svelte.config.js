import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		files: {
			lib: './src/lib'
		}
	}
};

export default config;
