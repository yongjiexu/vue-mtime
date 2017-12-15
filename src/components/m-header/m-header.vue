<template>
  <div class="m-header-wrapper">
    <router-link to="/homepage" class="tab-item"><i class="logo_mtime"></i></router-link>
    <router-link to="/homepage" class="tab-item"><span>首页</span></router-link>
    <router-link to="/purchase" class="tab-item"><span>购票</span></router-link>
    <router-link to="/mall" class="tab-item"><span>商城</span></router-link>
    <router-link to="/discovery" class="tab-item"><span>发现</span></router-link>
    <router-link to="/discovery" class="tab-item"><i class="icon_my"></i></router-link>
  </div>
</template>

<script>
  export default {
    name: 'm-header'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-header-wrapper
    display: flex
    justify-content: space-around
    align-items: center
    height: 57px
    flex-direction: row
    background: #1c2635
    color: rgb(51, 51, 51)

    .tab-item
      flex: 1
      text-align:center
      color: #fff
      .logo_mtime
        width 72px
        height: 23px
        background: url("https://static1.mtime.cn/html5/20171205114140/images/2014/logo_mtime.png") no-repeat
        background-size contain
        display: inline-block
      .icon_my
        width: 18px
        height: 23px
        display: inline-block
        background: url("https://static1.mtime.cn/html5/20171205114140/images/2014/ico_my.png") no-repeat
        background-size: cover
        background-attachment scroll
        background-clip border-box
        background-color rgba(0,0,0,0)
        background-origin padding-box
</style>
