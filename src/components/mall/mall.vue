<template>
  <div>
    <div class="part one">
      <van-swipe :autoplay="3000" v-if="data">
        <van-swipe-item v-for="(item, index) in data.scrollImg" :key="index">
          <img :src="item.image" width="414" height="146"/>
        </van-swipe-item>
      </van-swipe>
      <div class="classification">
        <div class="classification-item" v-for="item in data.navigatorIcon">
          <a :href="item.url"><img :src="item.image" alt="" width="40" height="40"></a>
          <span>{{item.iconTitle}}</span>
        </div>
      </div>
    </div>
    <div class="part-two-wrapper">
      <div class="part two">
        <a :href="data.cellA.url">
          <div class="cell a">
            <img :src="data.cellA.img" alt="">
          </div>
        </a>

        <div class="cell c">
          <a :href="data.cellC.list[0].url">
            <div class="one">
              <img :src="data.cellC.list[0].image" alt="">
            </div>
          </a>
          <a :href="data.cellC.list[1].url">
            <div class="two">
              <img :src="data.cellC.list[1].image" alt="">
            </div>
          </a>
        </div>
        <a :href="data.cellB.url">
          <div class="cell b">
            <img :src="data.cellB.img" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  // Vue.use(Swipe)
  // Vue.use(SwipeItem)
  export default {
    name: 'mall',
    data () {
      return {
        data: Object
      }
    },
    created () {
      let _this = this
      axios.get('/api/mall')
        .then(function (response) {
          console.log(response)
          _this.data = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped rel="stylesheet" lang="stylus">
  @import 'vant/lib/vant-css/index.css'
  .part.one
    border-bottom 12px solid #f6f6f6
    .classification
      display: flex
      flex-wrap wrap
      margin-top 20px
      cursor: pointer
      .classification-item
        flex: 0
        flex-basis: 103px
        height: 60px
        margin-bottom 28px
        text-align center
        a
          margin-bottom 7px
          display: block
          img
            width: 40px
            height: 40px
        span
          width 40px
          color: rgb(119, 119, 119)
  //改进此html、css
  .part-two-wrapper
    overflow: hidden
    .part.two
      a
        box-sizing border-box
        display: block
        border: 1px solid #f6f6f6
      .cell.a
        float: left
        display: inline-block
        width: 50%
        img
          display: block
          width: 207px
          height: 248px
      .cell.b
        float: left
        img
          display: block
          width: 100%
          height: 122px
      .cell.c
        float: left
        display: inline-block
        width: 50%
        height: 248px
        .one
          height: 50%
          img
            display: block
            width: 100%
        .two
          height: 50%
          img
            display: block
            width: 100%
</style>
