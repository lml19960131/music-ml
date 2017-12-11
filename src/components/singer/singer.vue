<template>
  <div class="singer">
    <ul v-for="item in singers">
      <li>
        <img :src="item.picture"  width="60" height="60" class="singer-picture">
        <span class="singer-name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return{
        singers:[
          {
            name: 0,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 1,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 2,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 3,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 4,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 5,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 6,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 7,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 8,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 8,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 8,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          },
          {
            name: 8,
            picture: 'http://img-cdn2.luoo.net/site/201711/5a129472a4c9b.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .singer{
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
  }

  .singer-picture{
    border-radius: 50%;
  }
</style>
