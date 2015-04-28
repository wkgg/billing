module.exports = {
  entry: './javascript/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
