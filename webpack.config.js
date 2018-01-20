const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
}
