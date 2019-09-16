const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    header: path.resolve('webcomponent/cm-header/index.mjs'),
  },
  output: {
    jsonpScriptType: 'module',
    filename: 'cm-[name].js',
    chunkFilename: 'cm-[name].bundle.js',
    path: path.resolve('static/js/webcomponent'),
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.mhtml$/,
        use: './mhtmlLoader',
      },
    ],
  },
};
