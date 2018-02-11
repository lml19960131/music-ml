<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" :data="recommendList" ref="scroll">
      <div>
        <div class="slider-wrapper" v-if="recommends.length" >
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" @load="loadImage" class="needClick">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in recommendList" class="item">
              <div class="icon">
                <img v-lazy="item.picUrl" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name" v-text="item.topTitle"></h2>
                <p class="description" v-text="item.description"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!recommendList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from '../../baseComponents/slider/slider.vue'
  import scroll from '../../baseComponents/scroll/scroll.vue'
  import loading from '../../baseComponents/loading/loading.vue'
  import {getRecommend} from '../../api/recommend'
  import {ERR_OK} from '../../api/config'
  import {playlistMixin} from '../../common/js/mixin'
  import {getTopList} from '../../api/rank'

  export default{
    mixins: [playlistMixin],
    components:{
      Slider,
      scroll,
      loading
    },
    data(){
      return{
        recommends: [],
        recommendList: [

          ]
        }
    },
    created() {
      this._getRecommend();
      this._getRankList()
    },
    methods:{
      _getRecommend() {
        getRecommend().then((res) => {
          if(res.code === ERR_OK){
            this.recommends = res.data.slider
          }
        })
      },
      _getRankList(){
        getTopList().then((res) => {
          if(res.code === ERR_OK) {
            this.recommendList = res.data.topList
          }
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true;
        }
      },
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : '';
        this.$refs.recommend.style.bottom = bottom;
        this.$refs.scroll.refresh();
      },
    }
  }

</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  @import '../../../src/common/stylus/variable.styl';
  .recommend
    position fixed
    width 100%
    top 88px
    bottom 0
    .recommend-content
      height 100%
      overflow hidden
      overflow-y auto
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-medium
          color $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .description
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
