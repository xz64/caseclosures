import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let title = 'Case Closures';
let outputDir = 'dist';

let config = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: outputDir,
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: title,
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  devtool: 'source-map'
};

export default config;
