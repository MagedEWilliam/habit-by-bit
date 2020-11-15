import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  outputTargets: [{
    type: 'www',  
    serviceWorker: {
      swSrc: 'src/sw-base.js',
      globPatterns: ['**/*.{js,css,json,html,ico,png,esm,esm.js}']
    }
  }],
};
