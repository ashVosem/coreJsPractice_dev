const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname,'public') 
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HTMLPlugin({
      //filename: 'index.[chunkhash].html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }, 
} 
