<template>
  <div class="purchase-wrapper">
    <div style="background: red;">筛选排序结果</div>
    <div class="slide" style="background: #0f0;">轮播图</div>
    <ul>
      <li v-for="cinema in onlineCinemas">
        <div>
          <span class="cinema-name">{{cinema.cinameName}}</span>
          <span class="min-price" v-if="cinema.minPrice!==0"><span>{{cinema.minPrice/100}}</span>元起</span>
        </div>
        <p class="address">{{cinema.address}}</p>
        <div class="feature-wrapper">
          <span v-for="(feature,key) in cinema.feature"
                v-if="feature===1 && key!=='hasPark' && key!=='hasServiceTicket' && key!=='hasWifi'">{{displayFeature[key]}}</span>
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
        onlineCinemas: Array,
        displayFeature: {
          has3D: '3D',
          hasFeature4D: '4D',
          hasFeature4K: '4K',
          hasFeatureDolby: '杜比',
          hasFeatureHuge: '巨幕',
          hasIMAX: 'IMAX',
          hasLoveseat: '情侣座',
          hasPark: '停车位',
          hasServiceTicket: '',
          hasVIP: 'VIP',
          hasWifi: 'WIFI'
        }
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
      padding-left: 2.7826vw
      li
        padding-top 4.0000vw
        padding-bottom 4.0000vw
        padding-right 4.0000vw
        border-bottom: 1px solid #d8d8d8
        div
          position: relative
          .cinema-name
            display: inline-block
            line-height 6.0000vw
            vertical-align: middle
            font-size: 4.2666vw
            font-weight 400
            color: #333
          .min-price
            position: absolute
            font-size 3.4666vw
            right: 0
            color: #ff8600
            span
              font-size 4.8000vw
              line-height: 5.7333vw
        .address
          margin-top: 1.8666vw
          line-height 4.9333vw
          font-size 3.4666vw
          font-weight 400
          color: #777
        .feature-wrapper
          span
            display: inline-block
            padding-top: 0.8000vw
            padding-right: 0.2666vw
            padding-bottom 0.2666vw
            padding-left 0.2666vw
            margin-top: 1.8666vw
            margin-right: 1.3333vw
            border: 1px solid #6d8297
            font-size 2.4000vw
            color: #6d8297
</style>
