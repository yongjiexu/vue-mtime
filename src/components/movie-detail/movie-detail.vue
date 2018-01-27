<template>
  <div id="movie-detail-wrapper">电影详情页</div>
</template>

<script>
  export default {
    name: 'movie-detail',
    created () {
      console.log(this.$route.path)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #movie-detail-wrapper
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color #ffd
</style>
