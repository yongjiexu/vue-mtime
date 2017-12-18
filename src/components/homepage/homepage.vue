<template>
  <div class="homepage">
    <a href="">
      <span>正在热映({{ms.length}})部</span>
      <i class="i_tnext"></i>
    </a>
    <ul class="hot-showing-movie">
      <li v-for="item in slicedMs" class="hot-showing-movie-item">
        <img class="img_box" :src="item.img" alt="">
        <i v-if="item.r!==-1">{{item.r}}</i>
        <div class="tCn">{{item.tCn}}</div>
      </li>
    </ul>
    <a href="">
      <span>即将上映({{totalComingMovie}})部</span>
      <i class="i_tnext"></i>
    </a>

    <ul>
      <li v-for="item in hotPoints">
        <img :src="item.img" alt="">
        <p><span>{{item.title}}</span></p>
        <p><span>{{item.desc}}</span></p>
        <p>
          <time>{{formatDate(item.publishTime)}}</time>
        </p>
      </li>
    </ul>



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
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .homepage
    .hot-showing-movie
      display: flex
      flex-wrap: wrap
      .hot-showing-movie-item
        flex: 1
        .img_box
          width: 84px
          height: 125px
        .tCn
          width: 84px
          margin: 0
    .i_tnext
      display: block
      background: #fff url("https://static1.mtime.cn/html5/20171214163714/images/2014/i-tmore.png") no-repeat center center
      background-size: auto .8rem
      width: 1.4rem
      height: .8rem
      margin-top: -0.4rem
      overflow: hidden
      line-height: 11rem
      transform: rotate(-90deg)
</style>
