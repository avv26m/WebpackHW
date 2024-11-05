const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'production',
    stats: {
        children: false
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    devServer: {
        static: './dist',
        open: true,
        hot: false,
    },
    devtool: 'inline-source-map',
    plugins: [
              new MiniCssExtractPlugin(),
              new HtmlWebpackPlugin({
                  title: 'Development',
                  template: "./src/index.pug"
              })],
    module: {
    rules: [
      {
       use: [{
           loader: MiniCssExtractPlugin.loader,
           options: {
           esModule: true
           }
       }, 'css-loader'],
          test: /\.css$/,
      },
        {
            test: /\.pug$/,
            use: 'pug-loader',
        }
    ]
  }
}