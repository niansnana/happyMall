/**
* @author niansnana
* @Description 配置vue，mock模拟数据
* @Start_Writing_Date 2020-05-10 13:36:50
* @Last_Modified_Date 2020-05-10 13:36:50
*/
const mockGoodsData = require('./mock/goods.json')

module.exports = {
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
