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
import HotAndComing from 'components/hot-and-coming/hot-and-coming'
import MovieDetail from 'components/movie-detail/movie-detail'
import HotpointDetail from 'components/hotpoint-detail/hotpoint-detail'
import News from 'components/news/news'
import Trailer from 'components/trailer/trailer'
import Toplist from 'components/toplist/toplist'
import Review from 'components/review/review'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
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
      component: Discovery,
      children: [
        {
          path: '/',
          redirect: 'news'
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'trailer',
          component: Trailer
        },
        {
          path: 'toplist',
          component: Toplist
        },
        {
          path: 'review',
          component: Review
        }
      ]
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
    },
    {
      path: '/hot-and-coming',
      component: HotAndComing
    },
    {
      path: '/movie-detail',
      component: MovieDetail,
      children: [
        {
          path: ':id',
          component: MovieDetail
        }
      ]
    },
    {
      path: '/hotpoint-detail',
      component: HotpointDetail
    }
  ]
})

export default router
