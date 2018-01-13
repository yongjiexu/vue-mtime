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
      height 232px
      img
        width: 100%
        height: 275px
        font-size 13px
        color: #333
      p
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 51px
        line-height: 51px
        text-align: center
        background-color: rgba(0, 0, 0, 0.5)
        span
          display: inline-block
          vertical-align: top
          color: #fff;
          font-size: 20.7px;
          font-weight: 700
    .rank
      display: flex
      justify-content space-around
      padding: 32.344px 0 27.169px 0
      a
        flex: 0 0 90px
        height: 96.82px
        &.first
          .icon
            width: 4.9em;
            height: 4.9em;
            margin: 0 auto
            background-image: url("https://m.mtime.cn/images/2014/top01.png")
            background-size: cover;
            font-size 12.9375px
            border-radius: 4.9em;
          span
            color: #1498c9
        &.second
          .icon
            width: 4.9em;
            height: 4.9em;
            margin: 0 auto
            background-image: url("https://m.mtime.cn/images/2014/top02.png")
            background-size: cover;
            font-size 12.9375px
            border-radius: 4.9em;
          span
            color: #1498c9
        &.third
          .icon
            width: 4.9em;
            height: 4.9em;
            margin: 0 auto
            background-image: url("https://m.mtime.cn/images/2014/top03.png")
            background-size: cover;
            font-size 12.9375px
            border-radius: 4.9em;
          span
            color: #ffc12d
      span
        display: inline-block
        height: 20.67px
        padding-top: 18.113px
        font-size 16px
        font-weight 400
    ul
      padding-left 19.406px
      li
        height: 100.750px
        border-top: 1px solid rgb(216, 216, 216)
        .content
          position: relative
          height: 55.763px
          padding: 21.994px 0
          .topListNameCn
            padding-bottom 12px
            font-size:19.4063px
            font-weight: 700
          .summary
            overflow: hidden
            width: 355.781px
            padding-right 38.813px
            white-space: nowrap
            text-overflow ellipsis
            line-height 16.8188px
            font-size 16.8188px
            color: #777
          i
            display: block;
            width: 1.2rem;
            height: .8rem;
            position: absolute;
            top: 50%;
            margin-top: -0.4rem;
            right: 12.9375px
            overflow: hidden;
            line-height: 11rem;
            font-size 12.9375px
            transform: rotate(-90deg);
            background: #fff url("https://m.mtime.cn/images/2014/i-tmore.png") no-repeat center center;
            background-size: auto .8rem;
</style>
