module.exports = {
  context: __dirname + '/src',

  entry: {
    html: './index.html',
    js: './js/entry.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'dist',
    open: true,
    inline: true
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};