const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Production mode
  
  entry: './src/client/index.js', // Entry point
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
  ],

};
