import VueRouter from 'vue-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Group from './pages/Group'
import About from './pages/About'


export const CreateRouter = function (Vue) {
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
    '/': { component: Home },
    '/profile': { component: Profile },
    '/group': { component: Group },
    '/about': { component: About }
  })

  return router
}
