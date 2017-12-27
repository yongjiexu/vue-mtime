<template>
  <div class="homepage">
    <div class="hs-wrapper" @click="handleHotShowingClick">
      <span class="caption">正在热映&nbsp;&nbsp;({{ms.length}}部)</span>
      <span class="right-arrow"></span>
    </div>
    <ul class="hot-showing-movie">
      <li v-for="item in slicedMs" class="hot-showing-movie-item" @click="handleMovieItemClick">
        <img class="img_box" :src="item.img" alt="">
        <i v-if="item.r!==-1" class="rating">{{item.r}}</i>
        <div class="tCn">{{item.tCn}}</div>
      </li>
    </ul>
    <div class="coming-movie-wrapper" @click="handleHotShowingClick">
      <span class="caption">即将上映({{totalComingMovie}})部</span>
      <span class="right-arrow"></span>
    </div>
    <p class="divider"></p>
    <div class="hp-wrapper">
      <span class="caption">今日热点</span>
    </div>
    <ul class="hot-points">
      <li v-for="item in hotPoints" class="hot-point" @click="handleHotPointClick">
        <img :src="item.img" class="todaypic">
        <div class="todaytxt">
          <p class="title">{{item.title}}</pclass>
          <p class="desc">{{item.desc}}</p>
          <p class="publish-time">{{formatDate(item.publishTime)}}</p>
        </div>
      </li>
    </ul>
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
      handleHotShowingClick () {
        this.$router.push('/hot-and-coming')
      },
      handleMovieItemClick () {
        this.$router.push('/movie-detail')
      },
      handleHotPointClick () {
        this.$router.push('/hotpoint-detail')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .homepage
    .hs-wrapper
      position: relative
      width: 100%
      line-height 60px
      .caption
        padding-left: 20px
        font-size 26px
        font-weight bold
      .right-arrow
        position: absolute
        top: 24px
        right: 10px
        display: inline-block
        width: 1.4rem
        height: 0.8rem
        overflow: hidden
        background-image: url("https://static1.mtime.cn/html5/20171214163714/images/2014/i-tmore.png")
        background-color white
        background-repeat no-repeat
        background-position center center
        background-size content
        transform rotate(-90deg)
    .hot-showing-movie
      display: flex
      flex-wrap: wrap
      justify-content center
      padding-bottom 22px
      .hot-showing-movie-item
        position: relative
        flex: 0
        padding: 0 7px
        .img_box
          width: 84px
          height: 125px
        .rating
          position: absolute
          display: block
          width: 26px
          line-height: 23px
          top: 2px
          right: 9px
          background-color #659d0e
          font-style normal
          color: #fff
          text-align center
        .tCn
          width: 100%
          text-align center
    .coming-movie-wrapper
      position: relative
      width: 100%
      line-height 60px
      border-top: 1px solid rgb(216, 216, 216)
      margin-left: 22px
      .caption
        font-size 26px
        font-weight bold
      .right-arrow
        position: absolute
        top: 24px
        right: 30px
        display: inline-block
        width: 1.4rem
        height: 0.8rem
        overflow: hidden
        background-image: url("https://static1.mtime.cn/html5/20171214163714/images/2014/i-tmore.png")
        background-color white
        background-repeat no-repeat
        background-position center center
        background-size content
        transform rotate(-90deg)
    .divider
      background-color #f6f6f6
      height: 15px
    .hp-wrapper
      position: relative
      width: 100%
      line-height 46px
      .caption
        padding-left: 20px
        font-size 26px
        font-weight bold
    .hot-points
      margin-left 20px
      .hot-point
        display: flex
        justify-content center
        padding: 17px 0
        border-bottom: 1px solid rgb(216, 216, 216)
        .todaypic
          display: inline-block
          width: 144px
          height: 101px
          padding-right 13px
        .todaytxt
          display: inline-block
          width: 216px
          height: 103px
          margin-right 20px
          .title
            padding-bottom: 5px
            line-height 23px
            font-size 20px
            font-weight bold
          .desc
            padding: 5px 0
            font-size: 15px
            color: rgb(119, 119, 119)
          .publish-time
            color: rgb(153, 153, 153)
            font-size 14px
      li.hot-point:first-child
        padding-top 0
      li.hot-point:last-child
        border-bottom 0px
</style>
