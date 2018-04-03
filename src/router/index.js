import Vue from 'vue'
import Router from 'vue-router'
import Main   from '../views/main.vue'
import MyTab from '../components/MyTab.vue'


import CorInfo from '../components/CorInfo.vue'
import LegInfo from '../components/LegInfo.vue'
import AutInfo from '../components/AutInfo.vue'
import Info from '../components/Info.vue'
import AddLink from '../components/AddLink.vue'
import Linkman from '../components/Linkman.vue'
import Home from '../components/Home.vue'
import Contract from '../components/Contract.vue'
import LinkmanPerson from '../components/LinkmanPerson.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	component: Main,
          children: [
            {
                path:'/',
                component:Home
            },
            {
                path:'/link-man',
                component:Linkman
            },
            {
                path:'/home',
                component:Home
            },
            {
                path:'/contract',
                component:Contract
            },
            {
                path: '/my-tab',
                component: MyTab
            },  
          ]
            },

    {
        path:'/cor-info',
        component: CorInfo
    },
    {
        path:'/leg-info',
        component:LegInfo
    },
    {
        path:'/aut-info',
        component:AutInfo
    },
    {
        path:'/info',
        component:Info
    },
    {
        path:'/add-link',
        component:AddLink
    },
    {
        path:'/linkman-person',
        name:'lkm',
        component:LinkmanPerson
    }

  ]
})
