<template>
  <div id="discovery">
    <div class="tab-wrapper">
      <router-link class="tab" to="/discovery/news">新闻</router-link>
      <router-link class="tab" to="/discovery/trailer">预告片</router-link>
      <router-link class="tab" to="/discovery/toplist">排行榜</router-link>
      <router-link class="tab" to="/discovery/review">影评</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'discovery',
  created() {
    let _this = this
    axios
      .get('/api/recommendationIndexInfo')
      .then(function(response) {
        _this.data = response.data
        console.log(_this.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style lang="stylus" scoped>
#discovery {
  .tab-wrapper {
    display: flex;

    .tab {
      flex: 1 0 auto;
      height: 51px;
      line-height: 51px;
      font-size: 18px;
      text-align: center;
    }
  }
}
</style>