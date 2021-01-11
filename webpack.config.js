const path = require('path')
//const plugins = [];
module.exports = {
  entry: {
      home: path.resolve(__dirname,'./src/Controllers/Index.tsx'),
    //   adicionar: path.resolve(__dirname,'./src/Views/Tabela/Adicionar.tsx'),
    //  // Tabela: './src/Views/Tabela/Tabela.tsx',
    //   NotFound: path.resolve(__dirname,'./src/Views/NotFound/PaginaNaoEncontrada.tsx')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
    historyApiFallback: true,
  }
  
}