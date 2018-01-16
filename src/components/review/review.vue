<template>
  <div id="review-wrapper">
    <div class="part-one">
      <img :src="recommendationIndexInfo.review.imageUrl" :alt="recommendationIndexInfo.review.title">
      <div>
        <img :src="recommendationIndexInfo.review.posterUrl" alt="">
        <div class="description">
          <span class="movieName">{{recommendationIndexInfo.review.movieName}}</span>
          <span class="title">{{recommendationIndexInfo.review.title}}</span>
        </div>
      </div>
    </div>
    <ul class="part-two">
      <li v-for="(review,index) in reviewList" :key="index">
        <p class="review-title">{{review.title}}</p>
        <div>
          <img class="avatar" :src="review.userImage" alt="">
          <div class="description">
            <span class="nickname" v-if="review.nickname">{{review.nickname}}-评分 </span>
            <span class="movie-title">{{review.relatedObj.title}}</span>
            <span class="rating" v-show="review.rating">{{review.rating}}</span>
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
        reviewList: Array
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
      axios.get('/api/review').then(function (response) {
        _this.reviewList = response.data
        console.log(_this.reviewList)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #review-wrapper
    .part-one
      position: relative
      overflow hidden
      height 56.2500vw
      img
        display: block
        width: 100%
        height: auto
        color: #333
      div
        position: absolute
        left: 0
        right: 0
        bottom: 0
        background-color: rgba(0, 0, 0, 0.5)
        img
          position: absolute;
          width: 19.6859vw
          height: 29.6874vw
          left: 4.6875vw
          bottom: 3.1250vw
          z-index: 2;
          border: 1px solid #fff
        .description
          width: 71.8748vw
          padding: 3.9062vw 0 4.2188vw 28.1251vw
          .movieName
            display: block
            color: #fff;
            font-size: 5.6250vw
            font-weight: bold
          .title
            display: block
            padding: 1.8750vw 0 0
            font-size: 4.0625vw
            color: #ddd
            font-weight: normal
    .part-two
      padding: 0 0 19.406px 19.406px
      li
        padding-top 4.6875vw
        padding-bottom: 4.6875vw
        border-bottom 1px solid rgb(216, 216, 216)
        .review-title
          padding-bottom 2.1874vw
          color: #333
          font-size: 5.0000vw
          font-weight: bold
        div
          vertical-align: middle
          padding-top 0.4687vw
          .avatar
            vertical-align: middle
            display: inline-block
            width: 6.5620vw
            height: 6.5620vw
            margin-right 1.5625vw
            border-radius 6.5620vw
          .description
            vertical-align: middle
            display: inline-block
            width: 82.5004vw
            padding-top: 0
            .nickname
              vertical-align: middle
              font-size 4.0625vw
              color: #777
            .movie-title
              vertical-align: middle
              font-size 4.0625vw
              color: #333
              font-weight bold
            .rating
              vertical-align: middle
              display: inline-block;
              width: 6.2500vw
              height: 5.6235vw
              margin-left 1.5625vw
              line-height: 5.6235vw
              background: #659d0e
              color: #fff
              overflow: hidden
              text-align: center
</style>
