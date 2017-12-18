import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from 'components/homepage/homepage'
import Purchase from 'components/purchase/purchase'
import Mall from 'components/mall/mall'
import Discovery from 'components/discovery/discovery'
import Mine from 'components/mine/mine'
import PcVersion from 'components/pc-version/pc-version'
import ClientDownload from 'components/client-download/client-download'
import Feedback from 'components/feedback/feedback'
import HelpCenter from 'components/help-center/help-center'

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
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/pcversion',
      component: PcVersion
    },
    {
      path: '/clientdownload',
      component: ClientDownload
    },
    {
      path: '/feedback',
      component: Feedback
    },
    {
      path: '/helpcenter',
      component: HelpCenter
    }
  ]
})

export default router
