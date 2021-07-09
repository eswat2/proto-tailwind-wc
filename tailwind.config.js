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
  plugins: [],
};
