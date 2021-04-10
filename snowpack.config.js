const fg = require('fast-glob');

function excludeEverythingButEntryPoints(entryPoints) {
  if (process.env.NODE_ENV === 'development') return [];

  if (!Array.isArray(entryPoints)) entryPoints = [entryPoints];

  // If our main entry points are in nested subfolders of 'src/', we can instead use
  // `fg.sync('src/**/*.elm')` and remove the `concat('*/*.elm')`.
  return fg
    .sync('src/*.elm', {
      ignore: entryPoints.map((v) => `src/${v}`),
    })
    .map((v) => v.replace(/^src\//, ''))
    .concat('*/*.elm');
}

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  exclude: excludeEverythingButEntryPoints('Sandbox1.elm'),
  plugins: [
    ['snowpack-plugin-elm', { verbose: true }],
    ['@snowpack/plugin-sass'],
  ],
  devOptions: {
    open: 'none',
    output: 'stream',
  },
};
