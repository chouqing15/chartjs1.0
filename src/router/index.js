import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import section from '@/components/section'
import Column from '@/components/Column'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path:'/section',
      name:'section',
      component:section
    },{
      path:'/Column',
      name:'Column',
      component:Column
    }
  ]
})
