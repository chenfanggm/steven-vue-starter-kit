const path = require('path')
const _lowerCase = require('lodash/lowerCase')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')

// define module root
var moduleResolveRoot = []
if (process.env.ENV_LANG) {
  moduleResolveRoot.push(path.resolve(__dirname, '../src/i18n', _lowerCase(process.env.ENV_LANG)))
}
moduleResolveRoot.push(path.resolve(__dirname, '../src'))

module.exports = {
  entry: {
    app: [
      'font-awesome-sass-loader',
      './src/app.js'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    root: moduleResolveRoot,
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'COMPONENTS': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    /*preLoaders: [
      { test: /\.(js|vue)$/, loader: 'eslint', include: projectRoot, exclude: /node_modules/ },
    ],*/
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', include: projectRoot, exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'vue-html' },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders()
  }
}
