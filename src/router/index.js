import Vue from 'vue'
import Router from 'vue-router'

//路由改成懒加载(异步加载)
const Recommend = (resolve) => {
  import('components/recommend/recommend.vue').then((recommend) => {
    resolve(recommend)
  })
};

const Singer = (resolve) => {
  import('components/singer/singer.vue').then((singer) => {
    resolve(singer)
  })
};

const Rank = (resolve) => {
  import('components/rank/rank.vue').then((rank) => {
    resolve(rank)
  })
};

const Search = (resolve) => {
  import('components/search/search.vue').then((search) => {
    resolve(search)
  })
};

const TopList = (resolve) => {
  import('components/singer-detail/singer-detail.vue').then((singerDetail) => {
    resolve(singerDetail)
  })
};

const SingerDetail = (resolve) => {
  import('components/top-list/top-list.vue').then((topList) => {
    resolve(topList)
  })
};

const UserCenter = (resolve) => {
  import('components/user-center/user-center.vue').then((userCenter) => {
    resolve(userCenter)
  })
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter,
    }
  ]
})
