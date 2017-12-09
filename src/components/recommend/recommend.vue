<template>
  <div class="recommend">
    <div class="recommend-content" :data="recommendList">
      <div>
        <div class="slider-wrapper" v-if="recommends.length" >
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
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
                <h2 class="name" v-text="item.name"></h2>
                <p class="description" v-text="item.description"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="loading-container" v-show="!recommendList.length">
      <loading></loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getRecommend} from '../../api/recommend';
  import {ERR_OK} from '../../api/config'
  import Slider from '../../baseComponents/slider/slider.vue'
  import scroll from '../../baseComponents/scroll/scroll.vue'
  import loading from '../../baseComponents/loading/loading.vue'

  export default{
    data(){
        return{
          recommends:[
            {
              linkUrl: 'http://www.luoo.net/site/go/698?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS85MjI',
              picUrl: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/624?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS84NjQ',
              picUrl: 'http://img-cdn2.luoo.net/site/201708/5993be0007772.jpg'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/643?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS84ODU',
              picUrl: 'http://img-cdn2.luoo.net/site/201709/59b25ac16f984.jpg'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/688?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS85MTM',
              picUrl: 'http://img-cdn2.luoo.net/site/201711/59fc7102afee3.jpg'
            }
          ],
          recommendList: [
            {
              linkUrl: 'http://www.luoo.net/site/go/698?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS85MjI',
              picUrl: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg',
              description: '敲里嘛',
              name: '专辑1'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/624?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS84NjQ',
              picUrl: 'http://img-cdn2.luoo.net/site/201708/5993be0007772.jpg',
              description: '敲里嘛',
              name: '专辑2'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/643?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS84ODU',
              picUrl: 'http://img-cdn2.luoo.net/site/201709/59b25ac16f984.jpg',
              description: '敲里嘛',
              name: '专辑3'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/688?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS85MTM',
              picUrl: 'http://img-cdn2.luoo.net/site/201711/59fc7102afee3.jpg',
              description: '敲里嘛',
              name: '专辑4'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/698?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS85MjI',
              picUrl: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg',
              description: '敲里嘛',
              name: '专辑1'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/624?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS84NjQ',
              picUrl: 'http://img-cdn2.luoo.net/site/201708/5993be0007772.jpg',
              description: '敲里嘛',
              name: '专辑2'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/643?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS84ODU',
              picUrl: 'http://img-cdn2.luoo.net/site/201709/59b25ac16f984.jpg',
              description: '敲里嘛',
              name: '专辑3'
            },
            {
              linkUrl: 'http://www.luoo.net/site/go/688?code=aHR0cDovL3d3dy5sdW9vLm5ldC9lc3NheS85MTM',
              picUrl: 'http://img-cdn2.luoo.net/site/201711/59fc7102afee3.jpg',
              description: '敲里嘛',
              name: '专辑4'
            }
          ]
        }
    },
    created() {
      this._getRecommend()
    },
    methods:{
      _getRecommend(){
        getRecommend().then((res) => {
          if(res.code === ERR_OK){
//            this.recommends = res.data.slider
          }
        })
      }
    },
    components:{
      Slider,
      scroll,
      loading
    }
  }

</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  @import '../../../src/common/stylus/variable.styl';

  .recommend{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }

  .recommend-content{
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }

  .slider-wrapper{
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .list-title{
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: $font-size-medium;
    color: $color-theme;
  }

  .item{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;
  }

  .icon{
    flex: 0 0 60px;
    width: 60px;
    padding-right: 20px;
  }

  .text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    font-size: $font-size-medium;
  }

  .name{
    margin-bottom: 10px;
    color: $color-text-d;
  }

  .loading-container{
    position: absolute;
    width: 100%;
    height: 50%;
    transform: translateY(-50%);
  }
</style>
