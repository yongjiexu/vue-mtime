<template>
  <div id="mall">
    <div class="part one">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in data.scrollImg" :key="index">
          <img :src="item.image" width="414" height="146"/>
        </van-swipe-item>
      </van-swipe>
      <nav class="mall-nav">
        <ul class="classification">
          <li class="classification-item" v-for="(item,index) in data.navigatorIcon" v-if="data" :key="index">
            <a>
              <img :src="item.image">
              <p>{{item.iconTitle}}</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="part two mallshop">
      <div class="shop01">
        <a :href="data.cellA.url" v-if="data.cellA.url">
          <img :src="data.cellA.img" alt="">
        </a>
      </div>
      <div class="shop02">
        <a :href="data.cellC.list[0].url">
          <img :src="data.cellC.list[0].image" alt="">
        </a>

      </div>
      <div class="shop03">
        <a :href="data.cellC.list[1].url">
          <img :src="data.cellC.list[1].image" alt="">
        </a>
      </div>
      <div class="shop04">
        <a :href="data.cellB.url">
          <img :src="data.cellB.img" v-if="data.cellB.img">
        </a>
      </div>
    </div>
    <div class="part three">
      part three
    </div>
    <div class="part four">
      <div class="mall-type" v-for="item in data.category">
        <div class="title">
          <p><i class="color"></i>{{item.name}}</p>
          <div>
            <a href="">更多<i class="right-arrow"></i></a>
          </div>
        </div>
        <div class="content" v-if="data">
          <div class="content-one">
            <a :href="item.imageUrl">
              <img :src="item.image">
            </a>
          </div>
          <div class="content-two">
            <ul>
              <li v-for="goods in item.subList">
                <img :src="goods.image" alt="">
                <h3>{{goods.title}}</h3>
                <p>￥<span>xxxx</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-title">
      <h2>
        <i class="i-reco"></i>
        <span>你可能感兴趣的</span>
      </h2>
    </div>
    <div class="part five">
      <ul>
        <li v-for="goods in recommendProducts.goodsList">
          <div class="goods-box">
            <div class="mtips">
              <i class="i-purchase">新品</i>
            </div>
            <div class="pic-box">
              <img :src="goods.image" alt="">
            </div>
            <div class="text-box">
              <p>{{goods.name}}</p>
              <span>￥{{goods.marketPrice/100}}</span>
            </div>
          </div>
        </li>
      </ul>
      <a href="">奋力加载中...</a>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'mall',
    data () {
      return {
        data: Object,
        currentTopic: Object,
        recommendProducts: Object
      }
    },
    created () {
      let _this = this
      axios
        .get('/api/mall')
        .then(function (response) {
          _this.data = response.data
          _this.currentTopic = _this.data.topic[0]
          console.log(_this.data)
        })
        .catch(function (error) {
          console.log(error)
        })

      axios
        .get('/api/recommend')
        .then(function (response) {
          _this.recommendProducts = response.data
          console.log(_this.recommendProducts)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped rel="stylesheet" lang="stylus">
  @import 'vant/lib/vant-css/index.css'
  #mall
    background: rgb(246, 246, 246)
    .part.one
      margin-bottom: 3.7500vw
      .mall-nav
        border-bottom: 1px solid #e5e4e4
        box-shadow: 0 0.2em 0.2em rgba(51, 51, 51, 0.01)
        background: white
        .classification
          display: flex
          flex: 0 0 25%
          flex-wrap wrap
          .classification-item
            width: 25%
            height: auto
            a
              display: block
              padding-top: 3.7500vw
              padding-bottom: 3.4374vw
              img
                display: block
                width: 12.5000vw
                height: 12.5000vw
                margin: 0 auto
              p
                color: #7e8c8d
                padding: 0.9375vw
                text-align center
                line-height: 1.4
                font-size 4.0625vw
                color: #777
    .part.two.mallshop
      position: relative
      height: 89.6864vw
      margin-bottom: 3.7500vw
      .shop01
        position: absolute
        width: 49.8%
        height: 19.2rem
        left: 0
        top: 0
        z-index: 2
        img
          max-height: 19.2rem
          max-width: 100%
          width: 16rem
      .shop02
        position: absolute
        width: 49.8%
        height: 9.6rem
        right: 0
        z-index: 2
        img
          max-height: 9.6rem
          max-width: 100%
          width: 16rem
      .shop03
        position: absolute
        width: 49.8%
        height: 9.6rem
        top: 9.6rem
        right: 0
        img
          max-height: 9.6rem
          max-width: 100%
          width: 16rem
      .shop04
        position: absolute
        width: 100%
        height: 9.5rem
        bottom: 0
        left: 0
        z-index: 3
        border-bottom: 1px solid #e5e4e4
        box-shadow: 0 0.2em 0.2em rgba(51, 51, 51, 0.01)
        background: white
        img
          max-width: 100%
          max-height: 9.5rem
          width: 32rem

    .part.three
      background: white
      margin-bottom: 3.7500vw
      border: 1px solid red
    .part.four
      .mall-type
        position: relative
        z-index: 2
        margin-bottom: 1.2rem
        padding-bottom: 1.28rem
        border-bottom: 1px solid #e5e4e4
        box-shadow: 0 0.2em 0.2em rgba(51, 51, 51, 0.01)
        background: white
        .title
          display: flex
          padding-top: 1.7rem
          color: #FFB90F
          font-size: 1.5rem
          line-height: 1rem
          position: relative
          font-weight: normal
          p
            flex: 0 0 22.2811vw
            .color
              background: #FFB90F
              width: .6rem
              height: 1.8rem
              display: inline-block
              position: relative
              margin-right: .5rem
              vertical-align: middle
              overflow: hidden
          div
            flex: 1 0
            position: relative
            font-size: 1.3rem
            color: #666
            margin-right: 1.5rem
            padding-right: 1.5rem
            line-height: 1rem
            margin-top: .2rem
            text-align right
            a
              .right-arrow
                width: 1.4rem
                height: .8rem
                position: absolute
                right: 0
                top: 50%
                margin-top: -0.4rem
                overflow: hidden
                line-height: 11rem
                text-indent: -999px
                transform: rotate(-90deg)
                display: block
                background: #fff url("http://static1.mtime.cn/html5/20180115165147/images/2014/i-tmore.png") no-repeat center center
                background-size: auto .8rem

        .content
          margin: 0 1.28rem
          .content-one
            border-bottom: 1px solid #d8d8d8
            padding: .5rem 0
            margin-bottom: .64rem
            a
              img
                display: block
                width: 100%
                height: 100%
                max-height: 15.5rem
          .content-two
            ul
              display: flex
              widows: 100%
              li
                flex: 1
                width: 30.6688vw
                text-align: center
                img
                  width: 8.5rem
                  height: 8.5rem
                  margin: 0 auto
                h3
                  padding: .64rem 0
                  font-size: 1.1rem
                  line-height: 1.2rem
                  font-weight: normal
                  white-space: nowrap
                  text-overflow: ellipsis
                  overflow: hidden
                  -webkit-line-clamp: 1
                  -webkit-box-orient: vertical
                  margin: 0 .5rem
                  color: #333
                p
                  font-size: 1.2rem
                  color: #f15353
                  span
                    font-size: 1.5rem
                    font-weight bold
    .recommend-title
      position: relative
      padding: .8rem 0
      text-align: center
      background-color: #f6f6f6
      h2
        padding: .5rem 0
        .i-reco
          right: -1em
          position: relative
          display: inline-block
          vertical-align: middle
          background: #f6f6f6 url("http://static1.mtime.cn/html5/20180115165147/images/vip/rhombus.png") no-repeat right center
          width: .5em
          height: .5em
          background-size: .5em auto
          background-color: #f6f6f6
          z-index: 2
        span
          padding: 0 1.5rem 0 1.5rem
          font-size: 1.2em
          color: #999
          font-weight: normal
          background: #f6f6f6
          position: relative
          z-index: 1
    .recommend-title:after
      content: ""
      display: block
      height: 1px
      background: #e9e9e9
      overflow: hidden
      position: absolute
      left: 20%
      right: 20%
      top: 50%
      width: 60%
      z-index: 0
    .part.five
      padding-bottom: 1rem
      ul
        display: flex
        justify-content: space-between
        flex-wrap wrap
        width: 100%
        position: relative
        list-style: none
        li
          display: block
          flex: 0 0 49.25%
          width: 49.25%
          min-height: 22rem
          background-color: #fff
          margin-bottom: .5rem
          .goods-box
            background: #fff
            position: relative
            .mtips
              position: absolute
              left: 0rem
              top: .4rem
              z-index: 3
              .i-purchase
                display: inline-block
                background-color: #25ACBD
                padding: .2rem .3rem
                margin-right: .5rem
                margin-top: -0.3rem
                vertical-align: middle
                font-style normal
                color: #fff
            .pic-box
              height: auto
              margin-bottom: 1rem
              position: relative
              img
                display: block
                width: 100%
                height: auto
            .text-box
              padding: 0 1rem
              p
                font-size: 1.1rem
                line-height: 1.5rem
                min-height: 3rem
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
                margin-bottom: .2rem
              span
                padding: 0rem 0 .5rem
                color: #ff8600
                font-size: 1.3rem
                font-weight: normal
                display: inline-block
                vertical-align: middle
      a
        margin: 0rem 1rem 0
        font-size: 1.5rem
        color: #777
        padding: 1.5rem 0
        text-align: center
        display: block
        height: 6.1398vw
        padding-bottom: .4rem
</style>
