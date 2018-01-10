<template>
  <div>
    <div class="part one">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in data.scrollImg" :key="index">
          <img :src="item.image" width="414" height="146"/>
        </van-swipe-item>
      </van-swipe>
      <div class="classification">
        <div class="classification-item" v-for="item in data.navigatorIcon" v-if="data">
          <a><img :src="item.image" alt="" width="40" height="40"></a>
          <!--:href="item.url"-->
          <span>{{item.iconTitle}}</span>
        </div>
      </div>
    </div>
    <div class="part-two-wrapper">
      <div class="part two">
        <a :href="data.cellA.url">
          <div class="cell a">
            <img :src="data.cellA.img" alt="">
          </div>
        </a>

        <div class="cell c">
          <a :href="data.cellC.list[0].url">
            <div class="one">
              <img :src="data.cellC.list[0].image" alt="">
            </div>
          </a>
          <a :href="data.cellC.list[1].url">
            <div class="two">
              <img :src="data.cellC.list[1].image" alt="">
            </div>
          </a>
        </div>
        <a :href="data.cellB.url">
          <div class="cell b">
            <img :src="data.cellB.img" v-if="data.cellB.img">
          </div>
        </a>
      </div>
    </div>
    <div class="part four">
      <section v-for="item in data.category">
        <a :href="item.moreUrl">
          <div class="header">
            <span class="title"><i class="color"></i>{{item.name}}</span>
            <span class="more">更多<i></i></span>
          </div>
        </a>
        <div class="content">
          <div class="first-part">
            <a :href="item.imageUrl"><img :src="item.image" alt=""></a>
          </div>
          <div class="second-part">
            <div class="goods" v-for="goods in item.subList">
              <img :src="goods.image" alt="">
              <span class="title">{{goods.title}}</span>
              <span class="price"><i>￥ </i>xxxx</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="part five">
      <div class="header">
        <span></span>
        <i class="dot"></i>
        <div>你可能感兴趣的</div>
        <span></span>
      </div>
      <div class="content">
        <div class="goods" v-for="goods in recommendProducts.goodsList">
          <img :src="goods.image" alt="">
          <p>{{goods.name}}</p>
          <span class="price">￥ {{goods.marketPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  // Vue.use(Swipe)
  // Vue.use(SwipeItem)
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
      axios.get('/api/mall')
        .then(function (response) {
          _this.data = response.data
          _this.currentTopic = _this.data.topic[0]
          console.log(_this.data)
        })
        .catch(function (error) {
          console.log(error)
        })

      axios.get('/api/recommend')
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
  .part.one
    border-bottom 12px solid #f6f6f6
    .classification
      display: flex
      flex-wrap wrap
      margin-top 20px
      cursor: pointer
      .classification-item
        flex: 0
        flex-basis: 103px
        height: 60px
        margin-bottom 28px
        text-align center
        a
          margin-bottom 7px
          display: block
          img
            width: 40px
            height: 40px
        span
          width 40px
          color: rgb(119, 119, 119)

  //改进此html、css
  .part-two-wrapper
    overflow: hidden
    border-bottom 12px solid #f6f6f6
    .part.two
      a
        box-sizing border-box
        display: block
        border: 1px solid #f6f6f6
      .cell.a
        float: left
        display: inline-block
        width: 50%
        img
          display: block
          width: 207px
          height: 248px
      .cell.b
        float: left
        img
          display: block
          width: 100%
          height: 122px
      .cell.c
        float: left
        display: inline-block
        width: 50%
        height: 248px
        .one
          height: 50%
          img
            display: block
            width: 100%
        .two
          height: 50%
          img
            display: block
            width: 100%

  .part.three
    border-bottom 12px solid #f6f6f6
    .topic-selector
      display: flex
      width: 516px
      height: 164px
      .background-image
        float: left
        display: block
        width: 100%
      .cell
        flex: 1
        img
          width: 85px
          height: 90px

  .part.four
    section
      border-bottom 12px solid #f6f6f6
    .header
      display: flex
      width: 100%
      height: 23px
      padding-top 22px
      .title
        vertical-align: top
        padding-left 1px
        font-size 20px
        font-weight 400
        color: #FFB90F
        .color
          display: inline-block
          vertical-align: top
          width: 8px
          height: 23px
          margin-right 5px
          background: #FFB90F
      .more
        flex: 1
        display: inline-block
        text-align right
        padding-right 20px
        color: #333
        font-size 17px
        i
          display: inline-block
          vertical-align: middle
          background-image url("http://static1.mtime.cn/html5/20180103102928/images/2014/i-tmore.png")
          background-attachment scroll
          background-clip border-box
          background-color #fff
          background-position center center
          background-repeat no-repeat
          background-size 16px 8px
          width 20px
          height: 20px
          transform rotate(-90deg)

    .content
      width: 381px
      margin: 0 auto

      .first-part
        width: 100%
        border-bottom 1px solid #ebebeb
        img
          display: block
          height: 187px
      .second-part
        display: flex
        width: 100%
        height: 50%
        padding-top 9px
        .goods
          flex: 1
          text-align center
          width: 127px
          height: 161px
          img
            width: 110px
            height: 110px
          .title
            display: inline-block
            width: 114px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            color: #333
          .price
            display: block
            padding: 6px 0
            text-align center
            color: #f15353
            font-size: 19px
            font-weight 700
            i
              font-size 15px

  .part.five
    .header
      text-align center
      padding: 6px 0
      background: #f6f6f6
      span
        display: inline-block
        width: 80px
        vertical-align: middle
        border-top 1px solid red
      i
        display: inline-block
        width: 4px
        height: 4px
        border-radius 2px
        vertical-align: middle
        background: red 4px 4px
      div
        display: inline-block
        vertical-align: middle
    .content
      display: flex
      flex-wrap: wrap
      justify-content space-between
      width: 100%
      background: #f6f6f6
      .goods
        flex: 0
        width: 204px
        border-bottom: 6px solid #f6f6f6
        text-align center
        background: #fff
        img
          width: 204px
          height: 204px
        p
          display: inline-block
          width: 178px
          height: 39px
          text-align left
        span
          display: inline-block
          width: 178px
          padding-bottom 6px
          text-align left
          font-size 17px
          color: #ff8600
</style>
