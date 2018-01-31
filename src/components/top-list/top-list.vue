<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from '../music-list/music-list.vue'
  import {mapGetters} from 'vuex'
  import {getMusicList} from '../../api/rank'
  import {ERR_OK} from '../../api/config'
  import {createSong} from '../../common/js/song'

  export default {
    components: {
      MusicList
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getMusicList();
    },
    computed: {
      ...mapGetters([
        'topList'
      ]),
      title() {
        return this.topList.topTitle;
      },
      bgImage() {
        if(this.songs.length){
          return this.songs[0].image
        }
        return ''
      }
    },
    methods: {
      _getMusicList() {
        if(!this.topList.id) {
          this.$router.push('/rank');
          return
        }
        getMusicList(this.topList.id).then((res) => {
          if(res.code === ERR_OK){
            this.songs = this._normalizeSongs(res.songlist)
          }
        })
      },
      _normalizeSongs(list){
        let ret = [];
        list.forEach((item) => {
          const musicData = item.data;
          if(musicData.songid && musicData.albumid) {
            ret.push(createSong(musicData))
          }
        });
        return ret;
      }
    }
  }
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition all 0.3s ease

  .slide-enter, .slide-leave-to
    transform translate3d(100%, 0, 0)
</style>
