<template>
  <transition name="slider">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from '../../../src/api/singer'
  import {ERR_OK} from '../../../src/api/config'
  import {createSong} from '../../../src/common/js/song'
  import musicList from '../music-list/music-list.vue'

  export default {
    data(){
      return{
        songs: []
      }
    },
    components:{
      musicList
    },
    computed: {
      ...mapGetters([
        'singer'
      ]),
      title(){
        return this.singer.name;
      },
      bgImage() {
        return this.singer.avatar;
      }
    },
    created() {
      this._getDetail();
    },
    methods: {
      _getDetail() {
        if(!this.singer.id){
          this.$router.push('/singer');
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if(res.code === ERR_OK){
            this.songs = this._normalizeSongs(res.data.list);
          }
        })
      },
      _normalizeSongs(list){
        let ret = [];
        list.forEach((item) => {
          let {musicData} = item;
          if(musicData.songid && musicData.albummid){
            ret.push(createSong(musicData))
          }
        });
        return ret;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

  .slider-enter-active,.slider-leave-active
    transition all 0.3s
  .slider-enter,.slider-leave-to
    transform translate3d(100%, 0, 0)
</style>
