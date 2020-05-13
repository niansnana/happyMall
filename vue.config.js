/**
* @author niansnana
* @Description 配置vue，mock模拟数据
* @Start_Writing_Date 2020-05-10 13:36:50
* @Last_Modified_Date 2020-05-10 13:36:50
*/
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 打包相对路径
  publicPath: '/',
  // 放置静态资源目录
  assetsDir: 'static',
  // 取消 source map
  productionSourceMap: false,
  // 设置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('plugin', resolve('src/plugin'))
      .set('utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
  },
  devServer: {
    host: 'localhost',
    https: false,
    //配置跨域
    proxy: {
      '/dev': {
        target: 'http://127.0.0.1:3001',
        ws: true,
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/dev': ''
        }
      },
      '/prod': {
        target: 'http://47.102.197.151:3001',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/prod': ''
        }
      }
    }
  }
}
