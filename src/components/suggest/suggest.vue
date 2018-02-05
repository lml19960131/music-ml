<template>
  <scroll class="suggest"
          :data="result"
          :pullup="pullup"
          :beforeScroll="beforeScroll"
          @scrollToEnd="searchMore"
          @beforeScroll="listScroll"
          ref="suggest">
    <ul class="suggest-list">
      <li class="suggest-item" v-for="item in result" @click="selectItem(item)">
        <div class="icon">
          <i :class="getIconCls(item)"></i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
      <loading v-show="hasMore" title=""></loading>
    </ul>
    <div class="without-result-wrapper"  v-show="!hasMore && !result.length">
      <without-result></without-result>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import {search} from "../../api/search"
  import {ERR_OK} from "../../api/config"
  import {createSong} from "../../common/js/song"
  import Scroll from '../../baseComponents/scroll/scroll.vue'
  import Loading from '../../baseComponents/loading/loading.vue'
  import Singer from '../../common/js/singer'
  import {mapMutations,mapActions} from 'vuex'
  import WithoutResult from '../../baseComponents/without-result/without-result.vue'

  const TYPE_SINGER = 'singer';
  const perpage = 20;

  export default {
    props: {
      query: {
        type: String,
        default: ''
      },
      showSinger: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        page: 1,
        result: [],
        pullup: true,
        hasMore: true,
        beforeScroll: true
      }
    },
    components: {
      Scroll,
      Loading,
      WithoutResult
    },
    created() {

    },
    watch: {
      query() {
        this.search()
      }
    },
    methods: {
      search() {
        this.page = 1;
        this.hasMore = true;
        this.$refs.suggest.scrollTo(0, 0);
        search(this.query, this.page, this.showSinger, perpage).then((res) => {
          if(res.code === ERR_OK){
            this.result = this._genResult(res.data);
            this._checkMore(res.data);
          }
        })
      },
      _genResult(data) {
        let ret = [];
        if(data.zhida && data.zhida.singerid){
          ret.push({...data.zhida, ...{type: TYPE_SINGER}});
        }
        if(data.song) {
          ret = ret.concat(this._normalizeSongs(data.song.list));
        }
        return ret;
      },
      getIconCls(item) {
        if(item.type === TYPE_SINGER) {
          return 'icon-mine'
        } else {
          return 'icon-music'
        }
      },
      getDisplayName(item) {
        if(item.type === TYPE_SINGER) {
          return item.singername
        } else {
          return item.name + '——' + item.singer;
        }
      },
      _normalizeSongs(list) {
        let ret = [];
        list.forEach((musicData) => {
          if(musicData.songid && musicData.albummid){
            ret.push(createSong(musicData))
          }
        });
        return ret
      },
      searchMore() {
        if(!this.hasMore) {
          return
        }
        this.page++;
        search(this.query, this.page, this.showSinger, perpage).then((res) => {
          if(res.code === ERR_OK) {
            this.result = this.result.concat(this._genResult(res.data));
            this._checkMore(res.data);
          }
        })
      },
      _checkMore(data) {
        const song = data.song;
        if(!song.list.length || (song.curnum + song.curpage * perpage) >= song.totalnum){
          this.hasMore = false
        }
      },
      selectItem(item) {
        if(item.type === TYPE_SINGER) {
          const singer = new Singer({
            id: item.singermid,
            name: item.singename,
          });
          this.$router.push({
            path: `search/${singer.id}`
          });
          this.setSinger(singer)
        } else {
          this.insertSong(item)
        }
        this.$emit('select');
      },
      listScroll() {
        this.$emit('listScroll')
      },
      refresh() {
        this.$refs.suggest.refresh()
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      }),
      ...mapActions([
          'insertSong'
        ]
      )
    }
  }
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"

  .suggest
    height 100%
    overflow auto
    .suggest-list
      padding 0 30px
      .suggest-item
        display flex
        align-items center
        padding-bottom 20px
      .icon
        flex 0 0 30px
        width 30px
        [class^="icon"]
          font-size 14px
          color $color-text-d
      .name
        flex 1
        font-size $font-size-medium
        color $color-text-d
        overflow hidden
        .text
          no-wrap()
    .without-result-wrapper
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
</style>
