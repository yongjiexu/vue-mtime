<template>
  <div id="hot-and-coming-wrapper">
    <div class="header">
      <span class="nav">
        <i class="arrow-back"></i>
        <span class="selector">
          <div class="hot-showing-button">正在热映</div>
          <div class="coming-movie-button">即将上映</div>
        </span>
      </span>
    </div>
    <div style="background-color: green">搜索</div>
    <div class="movie-item-wrapper" v-if="ms">
      <div class="movie-item" v-for="movie in ms">
        <img :src="movie.img" alt="" width="100px" height="100px">
        <div class="description">
          <div class="title-rating-wrapper">
            <span class="title">{{movie.tCn}}</span>
            <span class="rating" v-if="movie.r!==-1">{{movie.r}}</span>
          </div>
          <p class="common-special">{{movie.commonSpecial}}</p>
          <div class="version-wrapper">
            <span class="version" v-for="version in movie.versions" v-if="version.enum!==1">{{version.version}}</span>
          </div>
          <div>
            <span class="nearest-cinema-count">{{movie.cC}}家院线上映{{movie.NearestShowtimeCount}}场</span>
            <span class="buy-ticket-button">购票</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // todo rating可以拆成一个基础组件
  import axios from 'axios'

  export default {
    name: 'hot-and-coming',
    data () {
      return {
        ms: {
          type: Array,
          default: []
        }
      }
    },
    created () {
      let _this = this
      // 请求正在热映数据
      axios.get('/api/ms')
        .then(function (response) {
          _this.ms = response.data.ms
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../src/common/stylus/icon.css"
  #hot-and-coming-wrapper
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color #fff
    .header
      width: 100%
      text-align center
      background: #1c2635
      .nav
        display: inline-block
        position: relative
        width: 375px
        margin: 11px 0
        .arrow-back
          position: absolute
          left: 0
          display: inline-block
          width: 30px
          height: 100%
          background-image url("https://static1.mtime.cn/html5/20171214163714/images/2014/h_btn_back.png")
          background-size: auto 1.5rem
          background-repeat no-repeat
          background-position center center
        .selector
          display: inline-block
          border-radius 20px
          background: #0d121a
          font-size 0
          .hot-showing-button
            display: inline-block
            width: 140px
            line-height: 40px
            border-radius 20px
            background: red
            font-size 16px
          .coming-movie-button
            display: inline-block
            width: 140px
            line-height: 40px
            border-radius 20px
            background: blue
            font-size 16px
    .movie-item-wrapper
      .movie-item
        padding-top: 19px
        padding-bottom: 11px
        margin-left: 20px
        border-bottom 1px solid rgb(216, 216, 216)
        img
          float: left
          display: inline-block
          vertical-align: top
          margin-right 22px
          width: 84px
          height: 126px
        .description
          position: relative
          height: 130px
          width: 100%
          margin-left: 106px
          .title-rating-wrapper
            position: relative
            margin-bottom 11px
            .title
              width: 39px
              height: 26px
              font-size 19px
              font-weight 700
              color: rgb(51, 51, 51)
            .rating
              display: inline-block
              width: 1.7em
              height: 1.5em
              line-height 1.5em
              text-align center
              vertical-align: middle
              font-size 1.1em
              background-color #659d0e
              color: #fff
          .common-special
            margin-bottom 12px
            height: 16px
            color: #659d0e
            font-size 16px
          .version-wrapper
            position: relative
            height: 16px
            margin-bottom 8px
            .version
              width: 38px
              height 19px
              line-height 12px
              border: 1px solid #659d0e
              margin-right 2px
              font-size 13px
              color: #659d0e

          div
            position: relative
            bottom: 0
            right: 0
            .nearest-cinema-count
              display: inline-block
              height: 44px
              line-height 45px
            .buy-ticket-button
              position: absolute
              right: 106px
              display: inline-block
              width: 97px
              height: 37px
              margin-left: 13px
              margin-right 19px
              line-height 37px
              vertical-align: middle
              text-align center
              background-color rgb(255, 134, 0)
              border-radius 517px
              color: #fff
</style>
