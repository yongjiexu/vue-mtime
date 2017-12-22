<template>
  <div class="tab-wrapper">
    <div class="tab">
      <router-link tag="p" to="/homepage" class="tab-item">
        <span class="home-icon"></span>
      </router-link>
      <router-link tag="div" to="/homepage" class="tab-item">
        <span>首页</span>
      </router-link>
      <router-link tag="div" to="/purchase" class="tab-item">
        <span>购票</span>
      </router-link>
      <router-link tag="div" to="/mall" class="tab-item">
        <span>商城</span>
      </router-link>
      <router-link tag="div" to="/discovery" class="tab-item">
        <span>发现</span>
      </router-link>
      <router-link tag="p" to="/mine" class="tab-item">
        <span class="mine-icon"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'm-header'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab-wrapper
    background-color #1c2635
    width: 100%
    height: 62px
    font-size 20px
    color: #a3a5a7
    .tab
      display: flex
      justify-content space-between
      margin-left 20px
      margin-right 20px
      .tab-item
        position: relative
        flex: 0
        height: 62px
        span
          display: block
          min-width: 40px
          line-height: 62px
          text-align center
        .home-icon
          display: inline-block
          width: 80px
          height: 62px
          background-image url("https://static1.mtime.cn/html5/20171205114140/images/2014/logo_mtime.png")
          background-size: 80px 28px
          background-repeat no-repeat
          background-position 50% 50%
        .mine-icon
          display: inline-block
          height: 62px
          min-width: 23px
          background-image url("https://static1.mtime.cn/html5/20171205114140/images/2014/ico_my.png")
          background-size: 20px 26px
          background-repeat no-repeat
          background-position 50% 50%
        &.router-link-active
          color: #fff
      div.tab-item.router-link-active:after
        content: ' '
        position: absolute
        display: block
        width: 40px
        left: 0
        bottom: 0
        border-top: 2px solid #fff
</style>
