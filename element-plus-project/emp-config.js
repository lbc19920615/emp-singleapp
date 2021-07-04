const withFrameWork = require('@efox/emp-vue3')
console.log(process.env)
module.exports = withFrameWork(({config}) => {
  const projectName = 'elementPlusProject'
  const port = 8812
  config.output.publicPath(`http://localhost:${port}/`)
  // config.output.publicPath(``)
  config.devServer.port(port)

  config.module.rule('pug')
    .test(/\.pug$/)
    .use('pug-html-loader')
    .loader('pug-html-loader')
    .end()

  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'emp.js',
        remotes: {
          '@v3p': 'elementPlusBase',
          '@v3b': 'vue3Base',
        },
        exposes: {},
        shared: {
          vue: {eager: true, singleton: true, requiredVersion: '^3.0.2'},
          'element-plus': {eager: true, singleton: true, requiredVersion: '^1.0.1-beta.0'},
        },
      },
    }
    return args
  })
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'Element Plus Project',
        files: {
          js: [
            'http://localhost:8005/emp.js',
            'http://localhost:8813/emp.js'
          ],
        },
      },
    }
    return args
  })
})
