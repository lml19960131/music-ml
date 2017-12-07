<template>
  <div class="my-header">
    <div class="icon"></div>
    <h1 class="text">Music-ml</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../src/common/stylus/variable.styl';
  @import '../../../src/common/stylus/mixin.styl';

  .my-header{
    position: relative;
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
  }

  .icon{
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    bg-image('logo');
    background-size: 30px 32px;
  }

  .text{
    display: inline-block;
    vertical-align: top;
    font-size: $font-size-large;
    line-height: 44px;
  }
</style>
