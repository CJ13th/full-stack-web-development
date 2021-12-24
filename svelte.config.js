import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			server: {
				hmr: { //hot module reloading
					clientPort: process.env.HMR_HOST ? 443: 3000, //are we working on our local machine or Gitpod
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring('https://'.length) :'localhost'
				}
			}
		}
	}
};

export default config;
