<template>
<div>
  <img :src="recommendationIndexInfo.news.imageUrl" alt="">
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'news',
  data() {
    return {
      recommendationIndexInfo: Object
    }
  },
  created() {
    let _this = this
    axios
      .get('/api/recommendationIndexInfo')
      .then(function(response) {
        _this.recommendationIndexInfo = response.data
        console.log(_this.recommendationIndexInfo)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
