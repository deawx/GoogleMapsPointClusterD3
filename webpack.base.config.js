module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.ejs$/,
        loaders: ["ejs"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?sourceMap"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
