import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$js: path.resolve('./src/js'),
			$store: path.resolve('./src/store'),
			$type: path.resolve('./src/type')
		}
	}
};

export default config;
