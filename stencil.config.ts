import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwind from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';

export const config: Config = {
  namespace: 'proto-tailwind-wc',
  plugins: [
    tailwind({
      tailwindCssPath: './src/styles/app.pcss',
      tailwindConf: tailwindConfig
    }),
    postcss({
      plugins: [
        autoprefixer()
      ]
    })
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
