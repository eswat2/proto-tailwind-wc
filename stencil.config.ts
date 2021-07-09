import { Config } from '@stencil/core';
import tailwind from 'proto-stencil-tailwind';

export const config: Config = {
  namespace: 'proto-tailwind-wc',
  plugins: [
    tailwind({
      inputFile: './src/styles/app.pcss',
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
