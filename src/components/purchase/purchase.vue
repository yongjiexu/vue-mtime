<template>
  <div class="purchase-wrapper">
    <div style="background: red;">筛选排序结果</div>
    <ul>
      <li v-for="cinema in onlineCinemas">
        <div>
          <span class="cinema-name">{{cinema.cinameName}}</span>
          <span class="min-price"><span>{{cinema.minPrice}}</span>元起</span>
        </div>

        <p class="address">{{cinema.address}}</p>
        <div class="feature-wrapper">
          <span v-for="(feature,key) in cinema.feature" v-if="feature===1">{{key}}</span>
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
        onlineCinemas: Array
      }
    },
    created () {
      let _this = this
      axios.get('/api/OnlineCinemasByCity').then(function (response) {
        _this.onlineCinemas = response.data
        console.log(_this.onlineCinemas)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .purchase-wrapper
    ul
      padding-left: 11.040px
      li
        padding-top 16.560px
        padding-bottom 16.560px
        padding-right 16.560px
        border-bottom: 1px solid #d8d8d8
        div
          position: relative
          .cinema-name
            display: inline-block
            font-size: 17.664px
            color: #333
          .min-price
            position: absolute
            font-size 14.352px
            right: 0
            color: #ff8600
            span
              font-size 19.872px
        .address
          padding-top: 7.728px
          color: #777
          font-size 14.352px
          font-weight 400px
        .feature-wrapper
          span
            display: inline-block
            padding-top: 3.312px
            padding-right: 1.104px
            padding-bottom 1.104px
            padding-left 1.104px
            margin-right: 5.520px
            margin-top: 7.728px
            border:1px solid #6d8297
            color: #6d8297
</style>
