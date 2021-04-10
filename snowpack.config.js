module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [['snowpack-plugin-elm', { verbose: true }]],
  devOptions: {
    open: 'none',
    output: 'stream',
  },
};
