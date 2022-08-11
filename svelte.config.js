/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

const config = {
  kit: {
    alias: {
      $components: 'src/components',
      $store: 'src/store',
      $icons: 'src/components/icons',
      $utils: 'src/utils'
    },
    adapter: adapter()
  },
  preprocess: preprocessor({ scss: { prependData: `@use 'src/styles/config/_index.scss'as *;` } })
};
export default config;
