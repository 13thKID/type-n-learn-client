const path = require('path')

module.exports = {
  publicPath: './',
  lintOnSave: true,
  devServer: {
    host: 'localhost'
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: './[name].css',
            chunkFilename: './[name].css'
          }
        ])
    }
    if (config.plugins.has('html')) {
      config.plugin("html").tap(args => { // eslint-disable-line
        return [
          {
            title: 'TypeNLearn',
            template: path.join(__dirname, '/public/index.html'),
            minify: {
              removeAttributeQuotes: false
            }
          }
        ]
      })
    }
    config.entryPoints.delete('app')
    // config.optimization.splitChunks(false)
  },

  configureWebpack: {
    output: {
      path: path.resolve(__dirname, 'dist'),
      // filename: 'typenlearn.js',
      // chunkFilename: 'typenlearn.chunk.js',
      library: 'typenlearn'
    },
    entry: {
      typenlearn: './src/main.js'
    },
    optimization: {
      splitChunks: false
    }
  }
}
