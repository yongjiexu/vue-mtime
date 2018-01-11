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
            <img :src="news.image" alt="">
            <i v-if="news.type===2"></i>
          </div>
          <div class="news-content">
            <p>{{news.title}}</p>
            <div class="time-comments-wrapper">
              <span class="publishTime">{{news.publishTime}}小时前</span>
              <span class="comments">评论{{news.commentCount}}</span>
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
            <span class="publishTime">{{news.publishTime}}小时前</span>
            <span class="comments">评论 {{news.commentCount}}</span>
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
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #news-wrapper
    .part-one
      position: relative
      overflow hidden
      height 232px
      img
        height: 275px
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

        span
          display: block
          background-color: rgba(0, 0, 0, 0.5)
    .part-two
      padding-left 20px
      li
        .type-zero-two
          display: flex
          width 100%
          height 101px
          padding-top 19.4px
          padding-bottom 17.4px
          border-bottom: 1px solid #ddd
          .img-wrapper
            position: relative
            flex: 0 0 97px
            display: inline-block
            width 97px
            height 97px
            overflow: hidden
            img
              width: auto
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
              padding-bottom: 18.7px
              color: #333
              font-weight 700
              font-size 19.4px
            .time-comments-wrapper
              font-size 13px
              color: #999
              .publishTime
                padding-right 50px
        .type-one
          padding-top 19.406px
          padding-bottom 6.469px
          border-bottom: 1px solid #ddd
          p
            font-size 19px
            font-weight 700
            padding-bottom: 12.938px
          .image-container
            display: flex
            height: 84.72px
            justify-content left
            padding-bottom: 2.587px
            .image-wrapper
              display: block
              flex: 0 0 123px
              overflow: hidden
              padding-right: 4px
              height: 85px
              img
                width: 100%
                height: 100%
          .time-comments-wrapper
            padding-top: 9.703px
            padding-bottom: 15.324px
            font-size 13px
            color: #999
            .publishTime
              margin-right 49.809px
            .comments
              font-size 15.6544px
</style>
