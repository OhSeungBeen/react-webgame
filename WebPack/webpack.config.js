const path = require('path');

module.exports = {
  name: 'exemple',
  mode: 'development', // development <-> production
  devtool: 'eval', // eval <-> hidden-source-map
  resolve:{
    extensions: ['.js', '.jsx']
  },
  // Input
  entry: {
    app: ['./client']
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions']
            }
          }],
           '@babel/preset-react'
          ],
      }
    }]
  },

  // Output
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }

}