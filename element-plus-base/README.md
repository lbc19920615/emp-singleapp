# Emp Vue3  
## 依赖库 package.json
```json
  "devDependencies": {
    "@efox/emp-cli": "^1.0.29",
    "@vue/compiler-sfc": "^3.0.0-rc.10",
    "vue-loader": "^16.0.0-beta.5"
  },
  "dependencies": {
    "vue": "^3.0.0-rc.10"
  },
```
## 微前端配置 emp-config.js
```javascript
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
//
const ProjectRootPath = path.resolve('./')
// const packagePath = path.join(ProjectRootPath, 'package.json')
// const {dependencies} = require(packagePath)
//
const {getConfig} = require(path.join(ProjectRootPath, './src/config'))
//
module.exports = ({config, env, empEnv}) => {
  const confEnv = env === 'production' ? 'prod' : 'dev'
  const conf = getConfig(empEnv || confEnv)
  // config.entry('web')
  const srcPath = path.resolve('./src')
  config.entry('index').clear().add(path.join(srcPath, 'main.js'))
  // vue 3 编译构建
  config.resolve.alias.set('vue', '@vue/runtime-dom')
  config.plugin('vue3').use(VueLoaderPlugin, [])
  config.module
    .rule('vue')
    .test(/\.vue$/)
    .use('vue-loader')
    .loader('vue-loader')
  //
  const host = conf.host
  const port = conf.port
  const projectName = 'vue3Base'
  const publicPath = conf.publicPath
  config.output.publicPath(publicPath)
  config.devServer.port(port)
  //
  config.plugin('mf').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        name: projectName,
        library: {type: 'var', name: projectName},
        filename: 'emp.js',
        remotes: {
          vue3Components: 'vue3Components',
        },
        exposes: {},
        /*  shared: {
          ...dependencies,
        }, */
      },
    }
    return args
  })
  //
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        title: 'EMP Vue3 Base',
        files: {
          js: [conf.baseRemoteEntry],
        },
      },
    }
    return args
  })
}

``` 