const PostCompilePlugin = require('webpack-post-compile-plugin')
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
module.exports = {
  chainWebpack: config => {
    const conf = config.toConfig()
    config
        .plugin('post-compile')
        .use(PostCompilePlugin, [{
          config: {
            module: {
              rules: [...conf.module.rules]
            }
          }
        }])
        .end()
        .plugin('transform-modules')
        .use(TransformModulesPlugin)
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
