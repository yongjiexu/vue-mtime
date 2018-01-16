<template>
  <div id="trailer-wrapper">
    <div class="part-one">
      <img :src="recommendationIndexInfo.trailer.imageUrl" :alt="recommendationIndexInfo.trailer.title">
      <p>
        <span>{{recommendationIndexInfo.trailer.title}}</span>
        <i></i>
      </p>
    </div>
    <ul class="part-two">
      <li v-for="(trailer,index) in trailerList" :key="index">
        <div class="type">
          <div class="img-wrapper">
            <img :src="trailer.coverImg" alt="">
            <i></i>
          </div>
          <div class="news-content">
            <p>{{trailer.movieName}}</p>
            <span class="summary">{{trailer.summary}}</span>
          </div>
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
        trailerList: Array
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
      axios.get('/api/trailerList').then(function (response) {
        _this.trailerList = response.data.trailers
        console.log(_this.trailerList)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #trailer-wrapper
    .part-one
      position: relative
      overflow hidden
      height 56.2500vw
      img
        display: block
        height: auto
        font-size 3.1400vw
        color: #333
      p
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 13.6171vw
        line-height: 13.6171vw
        text-align: center
        font-weight: bold
        background-color: rgba(0, 0, 0, 0.5)
        color: white
        span
          font-size: 6.2500vw
          display: inline-block
          vertical-align: top
        //background-color: rgba(0, 0, 0, 0.5)
        i
          position: absolute
          bottom: 2.5000vw
          right: 3.1251vw
          width: 9.3751vw
          height: 9.3751vw
          overflow: hidden
          display: inline-block;
          background: url("http://m.mtime.cn/images/2014/viceoplay.png") no-repeat center center;
          background-size: cover;
    .part-two
      padding-left 4.6875vw
      li
        .type
          display: flex
          width 100%
          padding-top 4.6875vw
          padding-bottom 4.6875vw
          border-bottom: 1px solid #ddd
          .img-wrapper
            position: relative
            flex: 0 0 39.0625vw
            display: inline-block
            height 23.4375vw
            overflow: hidden
            img
              width: 100%
              height: 100%
            i
              position: absolute
              bottom: 1.5625vw
              right: 1.5625vw
              width: 9.0604vw
              height: 9.0604vw
              overflow: hidden
              display: inline-block
              background: url("http://m.mtime.cn/images/2014/viceoplay.png") no-repeat center center
              background-size: cover
          .news-content
            flex: 1
            height: 24.0625vw
            padding-top: 0.9375vw
            padding-right 4.6875vw
            padding-left 4.6875vw
            p
              font-weight bold
              font-size 4.6875vw
              line-height: 1.5
            span
              display: inline-block
              width: 46.8751vw
              margin-top 1.5625vw
              padding-top: 1.2500vw
              padding-bottom: 0.6250vw
              white-space: nowrap
              text-overflow ellipsis
              overflow: hidden
              font-size 4.0625vw
              line-height 1.2
              color: #999
</style>
