<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import myHeader from 'components/head/my-header.vue'
  import tab from 'components/tab/tab.vue'

  export default{
    name: 'app',
    components:{
      myHeader,
      tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "common/stylus/variable.styl";


</style>
