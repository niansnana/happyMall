<p align="center"><img src="http://image.niansnana.com/20200511104737.png" alt="DIDIGO"></p>

## 👻happMall（开心购APP）

![Build Status](https://travis-ci.org/hrscy/TodayNews.svg?branch=master) ![Objective-C](https://img.shields.io/badge/language-Objective-C.svg)

#### ⚡️本次更新：优化购物车界面，实现部分功能

#### ✨上次更新：商品详情页

## 👇使用方式

- 开发环境（Development）

  ```shell
  1、下载项目
  git clone https://github.com/niansnana/happyMall.git
  2、切换项目文件夹后下载依赖
  yarn install || npm install
  3、运行项目
  yarn server || npm run serve
  ```

- 线上环境（Production）

  ```shell
  # 方式一
  1、请先在本地搭建运行环境（Apache || Nginx || lls）
  2、切换至项目文件夹，直接浏览器访问预览
  # 方式二
  1、切换至项目文件
  http-server # 如若没有报错，浏览下方<常见问题>区域
  ```

- 移动端环境

  ```shell
  1、Android
  # 没什么好说，直接手机端下载安装
  2、IOS || Desktop
  # 做不到啊，再等等吧。
  ```

## 👀技术栈

#### 前端

- `Vue`：用于构建用户界面的 MVVM 框架
- `vue-router`：为单页面应用提供的路由系统，使用了 `Lazy Loading Routes` 技术来实现异步加载优化性能
- `vuex`：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
- `Stylus`：css 预编译处理器
- `ES6`：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
- `fastclick`：解决移动端300延迟

#### 后端

- `vue-axios`：用来请求后端 API 音乐数据
- `happyMallApi`：nodejs编写的后台接口（还在写着呢）

#### 其他工具

- `vue-cli`：Vue 脚手架工具，快速搭建Vue项目代码
- `eslint`：代码风格检查工具，强制规范化代码编写
- `iconfont` ：阿里巴巴图标库
- `Vant-Ui`：轻量、可靠的移动端Vue组件库

## ⚡️项目预览

- 项目地址：[实时更新](https://github.com/niansnana/happyMall)
- 预览地址：[推荐谷歌浏览器](http://mall.niansnana.com/)

## 😀实现功能

- [x] 商品分类
- [x] 动态轮播图
- [x] 登录验证
- [x] 购物车功能
- [ ] 搜索功能
- [x] 用户界面

## 🌸项目截图

<div>
	<img src="http://image.niansnana.com/20200511152658.png" />
    <img src="http://image.niansnana.com/20200511152843.png" />
</div>


`过于冗余，故不再提供截图`

## 🌂项目布局

```vue
.src
+-- api
|   +-- config.js // 存储api请求地址
|   +-- index.js // 调用请求方法
+-- commponents // 公共组件
    +-- bottomNav // 公共底部导航
    +-- navBar // 公共Header
		+-- ColorNav // 渐隐Header
		+-- Nav // 一三式Header
		+-- NavBar // 一二式Header
    +-- notLogged // 公共未登录状态
    +-- Pay // 通用支付页面
	+-- productDetail // 通用商品详情页面
+-- plugin // 集成插件中心
	+-- vant.js // Vant插件按需引入
+-- router // 路由配置
    +-- index.js
+-- store // vuex 配置使用
    +-- action // 根级别的 action
    +-- getter // 根级别的 getter
    +-- index // 组装模块并导出 store 的地方
    +-- mutation-types // 根级别的 mutation-types
    +-- mutation // 根级别的 mutation
    +-- state // 根级别的 state
+-- utils // 过滤器
	+-- backTop.js // 重定向顶部函数
    +-- bus.js // 组件传参-公交车
+-- views
	+-- cart // 商城购物车页面
	+-- home // 商城首页
	+-- login // 登录页面
	+-- news // 商城消息页面
	+-- profile // 用户界面
```

## 🤰常见问题

- 无法运行项目
  - oh, shift..

## 🐤作者

[niansnana](https://niansnana.github.io/vuepress/about/)