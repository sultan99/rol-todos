const R = require(`ramda`)
const BundleAnalyzerPlugin = require(`webpack-bundle-analyzer`).BundleAnalyzerPlugin
const CopyPlugin = require(`copy-webpack-plugin`)
const DynamicCdnWebpackPlugin = require(`dynamic-cdn-webpack-plugin`)
const HtmlWebPackPlugin = require(`html-webpack-plugin`)
const cdnResolvers = require(`./cdn-resolvers`)
const path = require(`path`)

const rootPath = dir => path.resolve(__dirname, dir)

const common = {
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
      'actions': rootPath(`src/store/actions`),
      'components': rootPath(`src/components`),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: rootPath(`src/index.html`)
    })
  ]
}

const develop = {
  mode: `development`,
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new CopyPlugin([{
      from: rootPath(`./public`)
    }]),
  ],
}

const production = {
  mode: `production`,
  plugins: [
    new CopyPlugin([{
      from: rootPath(`./public`),
      to: rootPath(`./dist`)
    }]),
    new DynamicCdnWebpackPlugin({
      env: `production`,
      resolver: cdnResolvers
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: `static`,
      reportFilename: rootPath(`bundle-report.html`)
    }),
  ],
}

const makeConfigs = R.mergeDeepWith(R.concat, common)

const config = (
  process.env.NODE_ENV === `production`
    ? makeConfigs(production)
    : makeConfigs(develop)
)

module.exports = config
