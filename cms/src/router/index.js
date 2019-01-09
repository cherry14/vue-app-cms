import Vue from 'vue'
import Router from 'vue-router'
import homeContainer from "../views/homebar/home.vue"
import memberContainer from "../views/member/member.vue"
import shopcarContainer from "../views/shopcar/shopcar.vue"
import searchContainer from "../views/search/search.vue"

Vue.use(Router)

export default new Router({
  routes: [
    
     { path:'./',redirect:'home' },
     { path:'/home',component:homeContainer},
     { path:'/member',component:memberContainer },
     { path:'./shopcar',component:shopcarContainer  },
     { path:'/search',component:searchContainer }

    
  ],
  linkActiveClass:'mui-active'
})
