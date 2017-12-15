<template>
  <div id="app">
    <m-header></m-header>
    <search></search>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Search from 'components/search/search'
  export default {
    name: 'app',
    components: {
      MHeader,
      Search
    }
  }
</script>

<style>

</style>
