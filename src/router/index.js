import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from 'components/homepage/homepage'
import Purchase from 'components/purchase/purchase'
import Mall from 'components/mall/mall'
import Discovery from 'components/discovery/discovery'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/homepage',
      component: Homepage
    },
    {
      path: '/purchase',
      component: Purchase
    },
    {
      path: '/mall',
      component: Mall
    },
    {
      path: '/discovery',
      component: Discovery
    }
  ]
})

export default router
