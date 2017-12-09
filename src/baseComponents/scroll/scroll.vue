<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default{
    props:{
      probeType:{
        type: Number,
        default: 1
      },
      click:{
        type: Boolean,
        default: true
      },
      data:{
        type: Array,
        default: null
      }
    },
    mouted(){
      setTimeout( () => {
        this._initScroll()
      }, 20)
    },
    methods:{
      _initScroll(){
        if(!this.$refs.wrapper){
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })
      },
      entable(){
        this.scroll&&this.scroll.entable()
      },
      disable(){
        this.scroll&&this.scroll.disable()
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
      }
    },
    watch:{
      data(){
        setTimeout(() =>{
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
