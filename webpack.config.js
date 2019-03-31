/* eslint-disable*/
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.svg$|\.png$|\.jpg$|\.jpeg$|\.gif$|\.otf$|\.ttf$|\.woff$|\.eot$|\.woff2$/,
        use: [
          'url-loader?limit=25000&name=[path][name].[hash].[ext]'
        ],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/docs',
    publicPath: '/test-messenger',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};