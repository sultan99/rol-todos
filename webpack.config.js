const CopyPlugin = require(`copy-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const cdnResolvers = require(`./cdn-resolvers`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`]
      }
    ]
  },
  resolve: {
    alias: {
      'components': rootPath(`src/components`),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: rootPath(`src/index.html`)
    }),
    new DynamicCdnWebpackPlugin({
      env: `production`,
      resolver: cdnResolvers
    }),
    new CopyPlugin([{
      from: rootPath(`./public`), to: `./assets`
    }]),
  ]
}
