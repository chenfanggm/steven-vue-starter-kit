import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'

const Bar = {
  template: '<p>This is bar!</p>'
}

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: false,
  // abstract: true,
  history: true,
  mode: 'html5',
  linkActiveClass: 'active',
  transitionOnLoad: true,
  root: '/'
})

router.map({
  '/': {
    component: Home
  },
  '/bar': {
    component: Bar
  }
})

export default router
