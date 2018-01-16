<template>
  <div id="toplist-wrapper">
    <div class="part-one">
      <img :src="recommendationIndexInfo.topList.imageUrl" :alt="recommendationIndexInfo.trailer.title">
      <p>
        <span>{{recommendationIndexInfo.topList.title}}</span>
      </p>
    </div>
    <div class="rank">
      <a class="first" href="">
        <div class="icon"></div>
        <span>时光Top100</span>
      </a>
      <a class="second" href="">
        <div class="icon"></div>
        <span>华语Top100</span>
      </a>
      <a class="third" href="">
        <div class="icon"></div>
        <span>全球票房榜</span>
      </a>
    </div>
    <ul>
      <li v-for="top in topList">
        <div class="content">
          <p class="topListNameCn">{{top.topListNameCn}}</p>
          <p class="summary">{{top.summary}}</p>
          <i></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: '',
    data () {
      return {
        recommendationIndexInfo: Object,
        topList: Array
      }
    },
    created () {
      let _this = this
      axios.get('/api/recommendationIndexInfo').then(function (response) {
        _this.recommendationIndexInfo = response.data
        console.log(_this.recommendationIndexInfo)
      }).catch(function (error) {
        console.log(error)
      })
      axios.get('/api/topListOfAll').then(function (response) {
        _this.topList = response.data.topLists
        console.log(_this.topList)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #toplist-wrapper
    .part-one
      position: relative
      overflow hidden
      height 56.25vw
      img
        width: 100%
        height: auto
        color: #333
      p
        position: absolute
        left: 0
        right: 0
        bottom: 0
        padding-top: 3.7500vw
        padding-bottom: 3.7500vw
        text-align: center
        background-color: rgba(0, 0, 0, 0.5)
        span
          display: inline-block
          vertical-align: top
          color: #fff;
          font-size: 5.0000vw
          font-weight: bold
    .rank
      display: flex
      justify-content space-around
      padding: 32.344px 0 27.169px 0
      a
        flex: 0 0 21.7391vw
        height: 23.3864vw
        .icon
          width: 15.3104vw
          height: 15.3104vw
          border-radius: 15.3104vw
          background-size: cover
          margin: 0 auto
        &.first
          .icon
            background-image: url("https://m.mtime.cn/images/2014/top01.png")
          span
            color: #1498c9
        &.second
          .icon
            background-image: url("https://m.mtime.cn/images/2014/top02.png")
          span
            color: #3bc7c2
        &.third
          .icon
            background-image: url("https://m.mtime.cn/images/2014/top03.png")
          span
            color: #ffc12d
      span
        display: inline-block
        padding-top: 4.3751vw
        font-size 3.7500vw
    ul
      padding-left 4.6875vw
      li
        border-top: 1px solid #d8d8d8
        .content
          position: relative
          padding: 5.3124vw 0
          .topListNameCn
            font-size:4.6875vw
            line-height 1.4
            font-weight: bold
          .summary
            overflow: hidden
            height: 4.9994vw
            padding-right: 9.375vw
            margin-top 2.0312vw
            white-space: nowrap
            text-overflow ellipsis
            font-size 4.0625vw
            color: #777
          i
            position: absolute;
            top: 50%;
            margin-top: -0.0125vw
            right: 3.1250vw
            display: block;
            width: 4.3729vw
            height: 2.4985vw
            overflow: hidden;
            line-height: 34.3751
            transform: rotate(-90deg)
            background: #fff url("https://m.mtime.cn/images/2014/i-tmore.png") no-repeat center center
            background-size: auto 2.5000vw
</style>
