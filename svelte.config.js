// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare';
import sveltePreprocess from 'svelte-preprocess';
import makeAttractionsImporter from 'attractions/importer.js';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // preprocess: [sveltePreprocess()],
  // preprocess: [
  //   sveltePreprocess({
  //     scss: {
  //       importer: makeAttractionsImporter(),
  //     },
  //   }),
  // ],
  preprocess: [
    sveltePreprocess({
      scss: {
        importer: makeAttractionsImporter({
          themeFile: './static/css/theme.scss'
        }),
        includePaths: ['./static/css'],
      },
    }),
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
