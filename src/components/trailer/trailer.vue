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
      height 232px
      img
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
        color: white
        font-size: 20px
        font-weight: 700
        background-color: rgba(0, 0, 0, 0.5)
        span
          display: inline-block
          vertical-align: top
          //background-color: rgba(0, 0, 0, 0.5)
        i
          position: absolute;
          bottom: .5em;
          right: 1em;
          width: 3em;
          height: 3em;
          font-size 12.9375px
          overflow: hidden;
          display: inline-block;
          background: url("http://m.mtime.cn/images/2014/viceoplay.png") no-repeat center center;
          background-size: cover;
    .part-two
      padding-left 20px
      li
        .type
          display: flex
          width 100%
          height 101px
          padding-top 19.4px
          padding-bottom 19.4px
          border-bottom: 1px solid #ddd
          .img-wrapper
            position: relative
            flex: 0 0 161.719px
            display: inline-block
            width 161.719px
            height 97px
            overflow: hidden
            img
              width: 100%
              height: 100%
            i
              position: absolute
              font-size 12.9375px
              bottom: .5em;
              right: .5em;
              width: 2.9em;
              height: 2.9em;
              overflow: hidden;
              display: inline-block;
              background: url("http://m.mtime.cn/images/2014/viceoplay.png") no-repeat center center;
              background-size: cover;
          .news-content
            flex: 1
            padding-left 19.5px
            padding-right 19.5px
            p
              width: 194.06px
              padding-bottom: 18.7px
              color: #333
              font-weight 700
              font-size 19.4px
            span
              display: inline-block
              width: 194.06px
              white-space: nowrap
              text-overflow ellipsis
              overflow: hidden
              font-size 16.8188px
              color: #999
              /*padding-right 50px*/
</style>
