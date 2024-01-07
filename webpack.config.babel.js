import path from 'path';

module.exports = {
  entry: {
    jcrop: './build/js/jcrop.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Jcrop'
  },
  resolve: {
    alias: { }
  }
};

