import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';

const plugins = [
  require('tailwindcss'),
  require('autoprefixer'),
  require('cssnano'),
]

export const config: Config = {
  namespace: 'proto-tailwind-wc',
  plugins: [
    postcss({
      plugins
    }),
  ],
  devServer: {
    reloadStrategy: 'pageReload',
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
