const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const EXAMPLES_DIR = path.resolve(__dirname, 'examples');

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
    if (dir === 'build') {
      return entries;
    }

    var isDraft = dir.charAt(0) === '_';
    var isDirectory = fs.lstatSync(path.join(EXAMPLES_DIR, dir)).isDirectory();

    if (!isDraft && isDirectory) {
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');
    }

    return entries;
  }, {});
}

module.exports = {

  entry: buildEntries(),

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'examples/__build__',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },
  resolve: {
   extensions: ['', '.scss', '.css', '.js', '.json'],
 },
 postcss: [autoprefixer],
 sassLoader: {
   data: '@import "theme/_config.scss";',
    includePaths: [path.resolve(__dirname, './examples/basic')]
 },
  plugins: [
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

};
