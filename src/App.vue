<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import myHeader from 'components/head/my-header.vue'
  import tab from 'components/tab/tab.vue'
  import Player from 'components/player/player.vue'

  export default{
    name: 'app',
    components:{
      myHeader,
      tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
