<template>
  <div class="progress-circle">
    <svg width="32" height="32" viewBox="0 0 100 100" version="1.2" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent"></circle>
      <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent"
              :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset"></circle>
    </svg>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        dashArray: Math.PI * 100,
      }
    },
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    computed: {
      dashOffset() {
        return (1 - this.percent) * this.dashArray
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="">
  @import "../../common/stylus/variable.styl"

  .progress-circle
    position relative
    circle
      stroke-width 8px
      transform-origin cneter
      &.progress-background
        transform scale(0.9)
        stroke $color-theme-d
      &.progress-bar
        transform scale(0.9) rotate(-90deg)
        stroke $color-theme
</style>
