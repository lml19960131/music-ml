<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query" ref="shortcutWrapper">
      <scroll class="shortcut" :data="shortCut" ref="shortCut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="item in hotKey" @click="addQuery(item.k)">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="showConfirm">
                <i class="icon-clear"></i>
              </span>
            </h1>
            <search-list :searches="searchHistory" @select="addQuery" @delete="deleteOne"></search-list>
          </div>
        </div>
      </scroll>
    </div>
    <div class="search-result" v-show="query" ref="searchResult">
      <suggest :query="query" @listScroll="blurInput" @select="saveSearch" ref="suggest"></suggest>
    </div>
    <confirm ref="confirm" text="是否清空搜索历史" @sure="clearSearchHistory"></confirm>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from '../../baseComponents/search-box/search-box.vue'
  import {getHotKey} from '../../api/search'
  import {ERR_OK} from '../../api/config'
  import Suggest from '../../components/suggest/suggest.vue'
  import {mapActions} from 'vuex'
  import SearchList from '../../baseComponents/search-list/search-list.vue'
  import Confirm from '../../baseComponents/confirm/confirm.vue'
  import Scroll from '../../baseComponents/scroll/scroll.vue'
  import {playlistMixin, searchMixin} from '../../common/js/mixin'

  export default {
    mixins: [playlistMixin, searchMixin],
    data() {
      return {
        hotKey: [],
      }
    },
    components: {
      SearchBox,
      Suggest,
      SearchList,
      Confirm,
      Scroll
    },
    created() {
      this._getHotKey()
    },
    computed: {
      shortCut() {
        return this.hotKey.concat(this.searchHistory)
      },
    },
    methods: {
      _getHotKey() {
        getHotKey().then((res) => {
          if(res.code === ERR_OK) {
            return this.hotKey = res.data.hotkey.slice(0, 10);
          }
        })
      },
      addQuery(query) {
        this.$refs.searchBox.setQuery(query);
      },
      deleteOne(item) {
        this.deleteSearchHistory(item)
      },
      deleteAll() {
        this.clearSearchHistory();
      },
      showConfirm() {
        this.$refs.confirm.show()
      },
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : '';
        this.$refs.shortcutWrapper.style.bottom = bottom;
//        this.$refs.shortcut.refresh();
        this.$refs.searchResult.style.bottom = bottom;
        this.$refs.suggest.refresh();
       },
      ...mapActions([
        'clearSearchHistory'
      ])
    },
    watch: {
      query(newQuery){
        if(!newQuery) {
          setTimeout(() => {
            this.$refs.shortCut.refresh()
          },20)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import "../../common/stylus/mixin.styl"

  .search
    .search-box-wrapper
      margin 20px
    .shortcut-wrapper
      position fixed
      top 178px
      bottom 0
      width 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>
