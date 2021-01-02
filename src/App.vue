<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import mainTabBar from "components/content/mainTabbar/MainTabBar"
  export default {
    name: 'app',
    components: {
      mainTabBar
    }
  }
</script>
<style>
  @import url("assets/css/base.css");
</style>
