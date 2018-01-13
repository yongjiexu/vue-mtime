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
        <img class="avatar" :src="review.userImage" alt="">
        <div class="description">
          <span class="nickname" v-if="review.nickname">{{review.nickname}}-评分 </span>
          <span class="movie-title">{{review.relatedObj.title}}</span>
          <span class="rating" v-show="review.rating">{{review.rating}}</span>
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
      height 232px
      img
        width: 100%
        height: 275px
        font-size 13px
        color: #333
      div
        position: absolute
        left: 0
        right: 0
        bottom: 0
        /*line-height: 51px*/
        /*text-align: center*/
        background-color: rgba(0, 0, 0, 0.5)
        img
          position: absolute;
          width: 6.3em;
          height: 9.5em;
          left: 1.5em;
          bottom: 1em;
          z-index: 2;
          border: 1px solid #fff
          font-size 12.9375px
        .description
          width: 297.562px
          padding: 16.172px 0 17.466px 116.438px
          .movieName
            color: #fff;
            font-size: 23.2875px
            font-weight: 700
            line-height: 23.2875px
          .title
            display: block
            padding: .6em 0 0;
            line-height 16.8188px
            font-size: 16.8188px
            color: #ddd;
            font-weight: normal;

    .part-two
      padding: 0 19.406px 19.406px 19.406px
      li
        padding-top 19.406px
        padding-bottom: 19.406px
        border-bottom 1px solid rgb(216, 216, 216)
        .review-title
          padding-bottom 9.056px
          color: #333
          font-size: 20.7px
          font-weight: 700
        .avatar
          display: inline-block
          width: 27px
          height: 27px
          margin-right 6px
          vertical-align: middle
          border-radius 27px
        .description
          display: inline-block
          width: 337px
          font-size: 16.8188px
          line-height: 24px
          font-weight 400
          vertical-align: middle;
          .nickname
            color: #777
          .movie-title
            color: #333
            font-weight 700
          .rating
            background: #659d0e;
            font-size 12.9375px
            width: 2em;
            height: 1.8em;
            margin-left .5px
            color: #fff;
            border-radius: 0;
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            line-height: 1.8em;
            text-align: center;

</style>
