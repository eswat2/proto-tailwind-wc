const tw_clrs = require('proto-tailwindcss-clrs');

module.exports = {
  mode: 'jit',
  corePlugins: {
    preflight: false,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.css', './src/**/*.tsx'],
  },
  theme: {},
  variants: {},
  plugins: [
    tw_clrs({
      map: {
        bada55: '#bada55',
        slate: '#708090',
        slate4: '#4e5964',
        white: '#ffffff',
      },
    }),
  ],
};
