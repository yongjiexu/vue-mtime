<template>
  <div id="news-wrapper">
    <div class="part-one">
      <img :src="recommendationIndexInfo.news.imageUrl" alt="">
      <p>
        <span>{{recommendationIndexInfo.news.title}}</span>
      </p>
    </div>
    <ul class="part-two">
      <li v-for="(news,index) in newsList" :key="index">
        <div class="type-zero-two" v-if="news.type!==1">
          <div class="img-wrapper">
            <div>
              <img :src="news.image" alt="">
              <i v-if="news.type===2"></i>
            </div>
          </div>
          <div class="news-content">
            <p>{{news.title}}</p>
            <div class="time-comments-wrapper">
              <span class="publishTime">{{diffHour(news.publishTime) }}小时前</span>
              <span class="comments" v-if="news.commentCount!==0">评论{{news.commentCount}}</span>
            </div>
          </div>
        </div>
        <div class="type-one" v-if="news.type===1">
          <p>{{news.title}}</p>
          <div class="image-container">
            <div class="image-wrapper" v-for="image in news.images">
              <img :src="image.url2" alt="">
            </div>
          </div>
          <div class="time-comments-wrapper">
            <span class="publishTime">{{diffHour(news.publishTime)}}小时前</span>
            <span class="comments" v-if="news.commentCount!==0">评论 {{news.commentCount}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'news',
    data () {
      return {
        recommendationIndexInfo: Object,
        newsList: Object
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
      axios.get('/api/newsList').then(function (response) {
        _this.newsList = response.data.newsList
        console.log(_this.newsList)
      }).catch(function (error) {
        console.log(error)
      })
    },
    methods: {
      formatDate (timeStamp) {
        let ts = arguments[0] || 0
        let t = ts ? new Date(ts * 1000) : new Date()
        let y = t.getFullYear()
        let m = t.getMonth() + 1
        let d = t.getDate()
        let h = t.getHours()
        let i = t.getMinutes()
        let s = t.getSeconds()
        // 可依据需要在这里定义时间格式
        return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s)
      },
      diffHour (timeStamp) {
        return Math.round((new Date() - new Date(timeStamp * 1000)) / 1000 / 3600)
      },
      handleMovieItemClick () {
        this.$router.push('/movie-detail')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #news-wrapper
    .part-one
      position: relative
      overflow hidden
      height 56.2500vw
      img
        height: 66.2968vw
      p
        position: absolute
        left: 0
        right: 0
        bottom: 0
        padding: 3.7500vw 0 3.7500vw
        background-color: rgba(0, 0, 0, 0.5)
        span
          display: block
          text-align: center
          font-size: 5.0000vw
          font-weight: 700
          color: #fff;
    .part-two
      padding-left 4.6875vw
      li
        .type-zero-two
          display: flex
          padding-top 4.6875vw
          padding-bottom 4.2187vw
          border-bottom: 1px solid #ddd
          .img-wrapper
            display: inline-block
            flex: 0 0 23.4375vw
            height: 24.3760vw
            overflow: hidden
            div
              position: relative
              img
                width: 23.4375vw
                height 23.4375vw
              i
                position: absolute
                font-size 12.9375px
                bottom: 1.5625vw
                right: 1.5625vw
                width: 9.0604vw
                height: 9.0604vw
                overflow: hidden;
                display: inline-block;
                background: url("http://m.mtime.cn/images/2014/viceoplay.png") no-repeat center center;
                background-size: cover;
          .news-content
            flex: 1
            height: 24.3760vw
            padding-left 4.6875vw
            padding-right 4.6875vw
            p
              padding-bottom: 4.5311vw
              color: #333
              line-height 1.3
              font-size 4.6875vw
              font-weight bold
            .time-comments-wrapper
              padding-bottom: 0.6250vw
              font-size: 3.4374vw
              color: #999
              .publishTime
                margin-right 12.0312vw
        .type-one
          padding-top 4.6875vw
          padding-bottom 1.5625vw
          border-bottom: 1px solid #ddd
          p
            font-size 4.6875vw
            font-weight bold
            padding-bottom: 12.938px
          .image-container
            display: flex
            justify-content left
            padding-bottom: 0.6250vw
            .image-wrapper
              display: block
              flex: 0 0 29.6874vw
              padding-right: 1.0041vw
              height: 20.3125vw
              img
                width: 100%
                height: 100%
                border: 1px solid #ddd
          .time-comments-wrapper
            padding-top: 2.3437vw
            padding-bottom: 0.6250vw
            color: #999
            .publishTime
              margin-right 12.0312vw
              font-size 3.4374vw
            .comments
              font-size 3.7812vw
</style>
