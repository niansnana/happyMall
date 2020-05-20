<!--
 * @author niansnana
 * @Description 商品参数信息
 * @Start_Writing_Date 2020-05-09 09:38:31
 * @Last_Modified_Date 2020-05-09 09:38:56
-->
<template>
  <div>
    <!-- 信息 -->
    <div class="info">
      <p>
        <span>￥</span>
        {{goodsDetail.price}}
      </p>
      <van-row class="info_title" type="flex" justify="space-between">
        <van-col class="van-multi-ellipsis--l2">{{goodsDetail.title}}</van-col>
        <van-col>
          <van-icon name="share" />分享
        </van-col>
      </van-row>
      <van-row class="info_more" type="flex" justify="space-between">
        <van-col span="6">快递：免运费</van-col>
        <van-col span="6" align="center">月销{{goodsDetail.sales}}</van-col>
        <van-col span="6" align="right">{{goodsDetail.address}}</van-col>
      </van-row>
    </div>
    <!-- 服务 -->
    <van-cell class="service" is-link @click="showService=true">
      <template #title>
        <small>服务</small>
        <span>付款后48小时内发货·15天退货...</span>
      </template>
    </van-cell>
    <!-- 规格 && 参数 -->
    <div class="specification">
      <van-cell is-link @click="showspecification=true">
        <template #title>
          <small>规格</small>
          <span class="custom-title van-ellipsis">请选择 颜色分类</span>
        </template>
      </van-cell>
      <van-cell is-link @click="showParameter=true">
        <template #title>
          <small>参数</small>
          <span class="custom-title van-ellipsis">品牌 型号...</span>
        </template>
      </van-cell>
    </div>
    <!-- 服务-弹出框cancel-text="取消" -->
    <van-action-sheet class="serviceActionSheet" v-model="showService" title="基础服务">
      <ul>
        <li v-for="(service, index) in serviceData" :key="index">
          <van-icon :name="service.icon" />
          <div>
            <span>{{service.title}}</span>
            <small>{{service.desc}}</small>
          </div>
        </li>
        <p>其他</p>
        <ul style="padding: 0px;">
          <li v-for="(serviceElse, index) in serviceDataElse" :key="index">
            <van-icon :name="serviceElse.icon" />
            <span>{{serviceElse.title}}</span>
          </li>
        </ul>
      </ul>
      <div class="serviceButton" @click="showService=false">
        <van-button type="primary" size="large">完成</van-button>
      </div>
    </van-action-sheet>
    <!-- 规格-弹出框 -->
    <van-sku
      v-model="showspecification"
      stepper-title="数量"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
    >
      <!-- 自定义 sku actions -->
      <template #sku-actions>
        <div class="van-sku-actions">
          <van-button square size="large" type="warning" @click="onPointClicked">确定</van-button>
        </div>
      </template>
    </van-sku>
    <!-- 参数-弹出框 -->
    <van-action-sheet
      class="serviceActionSheet parameterActionSheet"
      v-model="showParameter"
      title="产品参数"
    >
      <ul>
        <li v-for="(parameter, index) in ParameterData" :key="index">
          <span>{{parameter.title}}</span>
          <div>{{parameter.name}}</div>
        </li>
      </ul>
      <div class="serviceButton" @click="showParameter=false">
        <van-button type="primary" size="large">完成</van-button>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import bus from '@/utils/bus'
import { mapGetters } from 'vuex'
export default {
  props: ['goodsDetail'],
  data () {
    return {
      showService: false, // 服务弹窗
      showspecification: false, // 规格弹窗
      showParameter: false, // 参数弹窗
      goodsId: 1, // 商品ID,
      quota: 10, // 限购数,
      quotaUsed: 1, // 已经购买的数量
      sku: {
        hide_stock: false, // 是否隐藏商品剩余库存
        price: '1.00', // 默认价格（单位元）
        // 参数列表
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '1215', // skuValueId：规格值 id
                name: '黑色', // skuValueName：规格值名称
                imgUrl: 'http://img.alicdn.com/imgextra/i3/12844594/O1CN01uaj2911jo65Mb35fy_!!12844594.jpg_120x120q50s150.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: 'http://img.alicdn.com/imgextra/i3/12844594/O1CN01uaj2911jo65Mb35fy_!!12844594.jpg_120x120q50s150.jpg' // 用于预览显示的规格类目图片
              },
              {
                id: '1193',
                name: '红色',
                imgUrl: 'https://gw.alicdn.com/bao/uploaded/i3/3966181746/O1CN011GWIdu1Oli5nI0OUA_!!3966181746.jpg_200x200Q50s50.jpg',
                previewImgUrl: 'https://gw.alicdn.com/bao/uploaded/i3/3966181746/O1CN011GWIdu1Oli5nI0OUA_!!3966181746.jpg_200x200Q50s50.jpg'
              }
            ],
            k_s: 's2' // list参数列表
          },
          {
            k: '尺寸',
            v: [
              {
                id: '110',
                name: 'M'
              },
              {
                id: '111',
                name: 'S'
              },
              {
                id: '112',
                name: 'L'
              }
            ],
            k_s: 's1'
          }
        ],
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2260, // skuId，下单时后端需要
            price: 50, // 价格（单位分）
            s1: '110',
            s2: '111',
            s3: '112'
          }
        ],
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '1', // 是否必填 '1' 表示必填
            placeholder: '拜托拜托很想要，赶紧上架吧' // 可选值，占位文本
          }
        ]
      },
      goods: {
        // 数据结构见下方文档
        picture: 'https://img.alicdn.com/imgextra/i4/12844594/O1CN011jo5ypdzUfFzjG7_!!12844594.jpg_120x120q50s150.jpg'
      },
      serviceData: [
        { icon: 'passed', title: '付款后48小时内发货', desc: '' },
        { icon: 'passed', title: '15天退货', desc: '15天退货，退货邮费买家承担' },
        { icon: 'passed', title: '1次破损补寄', desc: '商品在运输途中出现破损的，消费者可向卖家提出补寄申请，可补寄1次，补寄邮费由买家承担' },
        { icon: 'passed', title: '订单险', desc: '保险公司全程担保赔付该商品每笔交易的售后' },
        { icon: 'passed', title: '运费险', desc: '卖家为您购买的商品投保退货运费险（保单生效以确认订单页展示的运费险为准）' }
      ],
      serviceDataElse: [
        { icon: 'passed', title: '蚂蚁花呗' },
        { icon: 'passed', title: '信用卡支付' },
        { icon: 'passed', title: '集分宝' }
      ],
      ParameterData: [
        { title: '品牌', name: 'Home Road' },
        { title: '型号', name: '9713' },
        { title: '风格', name: '田园' },
        { title: '颜色分类', name: '黑色,深胡桃色真皮摇椅,原木色摇椅,原木色布艺摇椅带脚蹬,真皮深色加脚蹬,黑色真皮折扣价,库存榉木躺椅蓝色红色灰色布' },
        { title: '是否可定制', name: '否' },
        { title: '适用对象', name: '成人' },
        { title: '是否组装', name: '整装' },
        { title: '包装体积', name: '0.88' }
      ]
    }
  },
  mounted () {
    bus.$on('changeSpecificationStatus', value => {
      this.showspecification = value
    })
  },
  computed: {
    ...mapGetters([
      'userName'
    ])
  },
  methods: {
    onPointClicked () {
      const collectCart = this.userName
      const id = this.goodsDetail.id
      this.$api.cartsAddFn({ collectCart, id }).then(res => {
        if (res.code === 200) {
          this.$toast.success('添加成功！')
          this.showspecification = false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.info, .service, .specification
  margin-bottom 10px
.info
  background-color #fff
  padding 10px
  box-sizing border-box
  p
    margin 0
    color #ff5000
    font-size 24px
    span
      font-size 12px
  .info_title
    align-items center
    margin 5px 0px
    .van-col
      &:nth-child(1)
        width 75%
        line-height 20px
        color #333
        font-weight 700
      &:nth-child(2)
        width 20%
        font-size 14px
        text-align center
        border-radius 20px
        padding 2px 0
        box-sizing border-box
        color rgb(153, 153, 153)
        background-color rgb(244, 244, 244)
  .info_more
    white-space nowrap
    font-size 12px
    color rgb(153, 153, 153)
.van-cell
  >>> .van-cell__title
    display flex
  small, span
    white-space nowrap
  small
    color #999
    margin-right 15px
.van-action-sheet, .van-sku
  height 80%
.serviceActionSheet
  ul
    width 100%
    padding 10px
    box-sizing border-box
    li
      width 100%
      display flex
      margin 15px 0px
      .van-icon
        color #ff5000
        margin-right 15px
        margin-top 5px
      div
        display flex
        flex-direction column
        span, small
          color #999
          font-size 14px
          small
            margin-top 10px
    p
      text-align center
      margin-bottom 0px
      font-size 15px
  .serviceButton
    width 100%
    text-align center
    position absolute
    bottom 20px
    .van-button
      color #ffffff
      border-radius 20px
      border 0
      width 90%
      height 40px
      background-image linear-gradient(to right, #FF9000 0%, #FF5000 100%)
.parameterActionSheet
  ul
    li
      width 100%
      span
        width 20%
      div
        width 70%
        margin-left 10%
</style>
