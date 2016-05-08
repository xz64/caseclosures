import path from 'path';

let outputDir = 'dist';

let config = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: outputDir,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  devtool: 'source-map'
};

export default config;
