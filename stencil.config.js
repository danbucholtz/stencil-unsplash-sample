exports.config = {
  serviceWorker: {
    swSrc: 'src/sw.js'
  },
  globalStyle: 'src/global/app.css',
  plugins: [
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
