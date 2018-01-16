<template>
  <div class="homepage">
    <div class="part-one">
      <router-link to="/hot-and-coming" class="hs-wrapper" tag="div">
        <span class="caption">正在热映&nbsp;&nbsp;({{ms.length}}部)</span>
        <span class="right-arrow"></span>
      </router-link>
      <ul class="hot-showing-movie">
        <li v-for="item in slicedMs" class="hot-showing-movie-item" @click="handleMovieItemClick">
          <img class="img-box" :src="item.img" alt="">
          <i v-if="item.r!==-1" class="rating">{{item.r}}</i>
          <p><span class="tCn">{{item.tCn}}</span></p>
        </li>
      </ul>
    </div>
    <router-link to="/hot-and-coming" class="coming-movie-wrapper" tag="div">
      <div>
        <span class="caption">即将上映&nbsp;&nbsp;({{totalComingMovie}})部</span>
        <span class="right-arrow"></span>
      </div>
    </router-link>
    <p class="divider"></p>
    <div class="today-hot">
      <div class="hp-wrapper">
        <span class="caption">今日热点</span>
      </div>
      <ul class="hot-points">
        <router-link to="/hotpoint-detail" v-for="item in hotPoints" class="hot-point" tag="li">
          <img :src="item.img" class="todaypic">
          <div class="todaytxt">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
            <p class="publish-time">{{formatDate(item.publishTime)}}</p>
          </div>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  // todo 考虑使用网格布局
  // todo 写方法把item.r精确到一位小数
  // todo 考虑抽出一个tab组件，该组件作为m-header/m-footer的子组件 。可以传入文字或图片、可以选择是否带分隔线
  import axios from 'axios'

  export default {
    name: 'homepage',
    data () {
      return {
        ms: {
          type: Array,
          default: []
        },
        hotPoints: {
          type: Array,
          default: []
        },
        totalComingMovie: {
          type: Number,
          default: 0
        }
      }
    },
    computed: {
      slicedMs () {
        // 此时，this.ms.length就是undefined。只能用这种方式判断 不能和0比较
        if (this.ms.length === undefined) {
          return []
        } else {
          return this.ms.slice(0, 8)
        }
      }
    },
    created () {
      let _this = this
      // 请求正在热映数据
      axios.get('/api/ms')
        .then(function (response) {
          console.log(response)
          _this.ms = response.data.ms
          _this.totalComingMovie = response.data.totalComingMovie
        })
        .catch(function (error) {
          console.log(error)
        })
      // 请求今日热点数据
      axios.get('/api/hotpoint')
        .then(function (response) {
          console.log(response)
          _this.hotPoints = response.data.hotPoints
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      formatDate (timeStamp) {
        var ts = arguments[0] || 0
        var t = ts ? new Date(ts * 1000) : new Date()
        var y = t.getFullYear()
        var m = t.getMonth() + 1
        var d = t.getDate()
        var h = t.getHours()
        var i = t.getMinutes()
        var s = t.getSeconds()
        // 可依据需要在这里定义时间格式
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s)
      },
      handleMovieItemClick () {
        this.$router.push('/movie-detail')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .homepage
    .part-one
      font-size 3.1400vw
      padding: .5em 1.5em 1.5em
      .hs-wrapper
        position: relative
        line-height 2
        .caption
          font-size 5.625vw
          font-weight bold
        .right-arrow
          position: absolute
          top: 50%
          margin-top: -0.4rem;
          right: 0px
          display: inline-block
          width: 1.4rem
          height: 0.8rem
          overflow: hidden
          background-image: url("https://static1.mtime.cn/html5/20171214163714/images/2014/i-tmore.png")
          background-color white
          background-repeat no-repeat
          background-position center center
          background-size auto .8rem
          transform rotate(-90deg)
      .hot-showing-movie
        display: flex
        flex-wrap: wrap
        justify-content center
        .hot-showing-movie-item
          position: relative
          flex: 0 0 25%
          text-align center
          .img-box
            width: 20.3115vw
            height: 30.6234vw
          .rating
            position: absolute
            display: block
            width: 6.2500vw
            height: 5.6235vw
            line-height: 5.6250vw
            top: 0.7575vw
            right: 2.1099vw
            background-color #659d0e
            font-style normal
            color: #fff
            text-align center
          p
            padding: 1.5625vw 0 0;
            width: 21.8751vw;
            margin: auto
            margin-bottom: 3.1251vw;
            height: 10.3111vw
            overflow: hidden;
            .tCn
              font-size: 4.3750vw
              line-height: 5.2500vw
    .coming-movie-wrapper
      position: relative
      margin-top: -3.1250vw
      margin-left: 4.6875vw
      padding-left: 0
      padding-right 4.6875vw
      padding-top: 1.5625vw
      padding-bottom: 1.5625vw
      border-top: 1px solid #d8d8d8
      div
        position: relative
        .caption
          line-height 2
          font-size 5.6250vw
          font-weight bold
          color: #333
        .right-arrow
          position: absolute
          top: 50%
          margin-top: -1.2500vw
          right: 0
          display: inline-block
          width: 4.3729vw
          height: 2.4985vw
          overflow: hidden
          background-image: url("https://static1.mtime.cn/html5/20171214163714/images/2014/i-tmore.png")
          background-color white
          background-repeat no-repeat
          background-position center center
          background-size auto 2.5000vw
          transform rotate(-90deg)
    .divider
      background-color #f6f6f6
      width: 100%
      height: 3.7489vw
    .today-hot
      padding-top: 1.5625vw
      padding-bottom: 0px
      padding-right: 4.6875vw
      padding-left: 4.6875vw
      .hp-wrapper
        position: relative
        color: #333
        .caption
          line-height: 2;
          font-size 5.6250vw
          font-weight bold
      .hot-points
        .hot-point
          display: flex
          justify-content center
          padding: 4.0625vw 0
          border-bottom: 1px solid rgb(216, 216, 216)
          .todaypic
            display: inline-block
            width: 34.9990vw
            height: 24.4137vw
            margin-right  3.1250vw
          .todaytxt
            display: inline-block
            flex 1
            height: 25.0000vw
            .title
              padding-bottom: 1.2500vw
              line-height 5.5000vw
              font-size 5.0000vw
              font-weight bold
            .desc
              padding: 1.2500vw 0
              font-size: 3.75vw
              color: #777
            .publish-time
              padding: 1.2500vw 0
              color: #999
              font-size 3.3816vw
        li.hot-point:first-child
          padding-top 0
        li.hot-point:last-child
          border-bottom 0
</style>
