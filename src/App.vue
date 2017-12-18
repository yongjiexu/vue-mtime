<template>
  <div id="app">
    <m-header></m-header>
    <search></search>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Search from 'components/search/search'
  import MFooter from 'components/m-footer/m-footer'

  export default {
    name: 'app',
    components: {
      MHeader,
      Search,
      MFooter
    }
  }
</script>

<style>

</style>
