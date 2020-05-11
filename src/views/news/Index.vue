<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="消息">
      <template #right>
        <van-icon name="certificate" size="18" color="#fcfdff" />
      </template>
    </van-nav-bar>
    <!-- 搜索 -->
    <van-search v-model="serValue" placeholder="搜索" />
    <Index />
    <!-- 消息列表 -->
    <van-card
      :desc="item.content"
      :title="item.nickname"
      :thumb="item.portrait"
      v-for="(item, index) in messageList"
      :key="index"
      v-show="token"
    >
      <template #tags>
        <van-tag type="danger">{{ item.unread }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import Index from 'components/notLogged/Index'
import { mapGetters } from 'vuex'
export default {
  components: { Index },
  data () {
    return {
      serValue: '',
      messageList: [
        { nickname: '交易物流', content: '【菜鸟驿站】您的快递已被代收', portrait: 'http://www.lasmjj.com/images/image/20180518093012601260.jpg', unread: 2 },
        { nickname: '服务通知', content: '福利领取通知', portrait: 'http://www.internetke.com/uploads/allimg/141115/seoIco/01.png', unread: 5 },
        { nickname: '彩色的羽毛', content: '好的亲', portrait: 'https://pic2.zhimg.com/80/v2-f50307a56f235eeb59424bec25e4cec9_720w.jpg', unread: 3 }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>

<style scoped>
.van-nav-bar {
  background-color: #f38b4e;
}
.van-card {
  margin: 0;
  background: #fff;
  height: 75px;
  border-bottom: 1px solid #f0f0f0;
}
.van-card__header,
.van-card__content {
  height: 65px;
}
.van-card__thumb {
  height: 60px;
  width: 60px;
}
/deep/ .van-card__thumb img {
  border-radius: 40px;
}
.van-card__content {
  min-height: 60px;
}
.van-card__title {
  font-size: 15px;
  margin-top: 15px;
  color: #d0671f;
}
.van-card__desc {
  color: #8e8c8a;
  margin-top: 5px;
}
.van-tag {
  border-radius: 1.2em;
  position: absolute;
  right: 0;
  bottom: 50%;
}
</style>
