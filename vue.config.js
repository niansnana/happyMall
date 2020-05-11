/**
* @author niansnana
* @Description 配置vue，mock模拟数据
* @Start_Writing_Date 2020-05-10 13:36:50
* @Last_Modified_Date 2020-05-10 13:36:50
*/
const mockGoodsData = require('./mock/goods.json')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
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
  // mock 假想数据
  devServer: {
    port: 8080,
    before (app) {
      app.get('/api/goods', (req, res) => {
        res.json({
          status: 200,
          data: mockGoodsData
        })
      })
    }
  }
}
