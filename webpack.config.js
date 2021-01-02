const path = require('path')
module.exports = {
  entry: './src/Controllers/Index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.jpg|svg|png$/,
      //   exclude: [/node_modules/],
      //   use: ['file-loader']
      // },
      {
        test: /\.jpg|svg|png$/,
        exclude: [/node_modules/],
        use: ['url-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  
}