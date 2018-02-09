<template>
  <div class="without-result">
    <div class="without-result-image"></div>
    <p class="without-result-text">{{text}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return{
      }
    },
    props: {
      text: {
        type: String,
        default: '抱歉，无搜索结果'
      }
    }
  }
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import "../../common/stylus/mixin.styl"

  .without-result
    text-align center
    .without-result-image
      width 160px
      height 160px
      margin 0 auto
      background-image url("./img1.jpeg")
      background-size 160px 160px
    .without-result-text
      margin-top 30px
      font-size $font-size-medium
      color $color-text-d
</style>
