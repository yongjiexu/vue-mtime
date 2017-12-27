<template>
  <div class="m-footer-wrapper">
    <div class="m-footer-firstline-wrapper">
      <router-link to="/homepage" class="tab-item"><span>首页</span></router-link>
      <router-link to="/purchase" class="tab-item"><span>购票</span></router-link>
      <router-link to="/mall" class="tab-item"><span>商城</span></router-link>
      <router-link to="/discovery" class="tab-item"><span>发现</span></router-link>
      <router-link to="/mine" class="tab-item"><span>我的</span></router-link>
    </div>
    <div class="m-footer-secondline-wrapper">
      <router-link to="/pcversion" class="tab-item" tag="li"><span>PC版</span></router-link>
      <li class="line"><span></span></li>
      <router-link to="/clientdownload" class="tab-item" tag="li"><span>客户端下载</span></router-link>
      <li class="line"></li>
      <router-link to="/feedback" class="tab-item" tag="li"><span>意见反馈</span></router-link>
      <li class="line"></li>
      <router-link to="/helpcenter" class="tab-item" tag="li"><span>帮助中心</span></router-link>
    </div>

    <div class="copy">
      <div class="background"></div>
      <p>
        <span>Copyright </span>
        <span class="copytime">2006-2017</span>
        <span> Mtime.com Inc. All rights reserved.</span>
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'MFooter'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-footer-wrapper
    background-color #f6f6f6
    .m-footer-firstline-wrapper
      box-sizing border-box
      line-height: 55px
      display: flex
      justify-content space-around
      font-size 13px
      .tab-item
        flex: 1
        text-align center
        font-size 1.5em
        color: #0074c5
    .m-footer-secondline-wrapper
      display: flex
      .tab-item
        flex-grow: 1
        justify-content: space-around
        span
          display: inline-block
          padding:21px 19px
          font-size 15px
          line-height 15px
          color: #333
    .copy
      padding-bottom 26px
      .background
        background: url(https://static1.mtime.cn/html5/20171214163714/images/2014/fot_logo.png) no-repeat center center
        background-size: auto 2rem
        height: 2rem
      p
        text-align center
        span
          color: #cdcdcd
          font-size 14px
          line-height 14px
</style>
