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
          <h1 class="title">{{movie.tCn}}</h1>
          <span class="rating" v-if="movie.r">{{movie.r}}</span>
          <p class="common-special">{{movie.commonSpecial}}</p>
          <span class="version" v-for="version in movie.versions">{{version.version}}</span>
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
</style>
