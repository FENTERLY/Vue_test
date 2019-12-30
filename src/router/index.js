import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GD from '@/components/GD'
import GS from '@/components/GS'
import CS from '@/components/CS'
import pages from "@/components/pages";
import page1 from "@/components/page1";
import page2 from "@/components/page2";
import bigpig from "@/components/BigPigs";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/gd',
      name: 'GD',
      component: GD
    },
    {
      path:'/gs',
      name:'GS',
      component:GS
    },
    {
      path:'/cs',
      name:'CS',
      component:CS
    },
    {
      path:'/pages',
      name:'pages',
      component:pages
    },
    {
      path:'/page1',
      name:'page1',
      component:page1
    },
    {
      path:'/page2',
      name:'page2',
      component:page2
    },
    {
      path:"/bigpigs",
      name:'bigpigs',
      component:bigpig
    }
  ]
})
