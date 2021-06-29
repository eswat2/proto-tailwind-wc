import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";

export const config: Config = {
  namespace: 'proto-tailwind-wc',
  devServer: {
    reloadStrategy: 'pageReload',
  },
  plugins: [
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
        cssnano()
      ]
    }),
  ],
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
