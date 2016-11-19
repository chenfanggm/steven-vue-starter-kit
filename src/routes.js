import VueRouter from 'vue-router'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Group from './pages/Group'
import About from './pages/About'


export const CreateRouter = function (Vue) {
  Vue.use(VueRouter)

  const router = new VueRouter({
    root: '/',
    mode: 'html5',
    hashbang: false,
    history: true,
    saveScrollPosition: true,
    linkActiveClass: 'active',
    transitionOnLoad: true,
    suppressTransitionError: __PROD__
  })

  router.map({
    '/': { component: Home },
    '/profile': { component: Profile },
    '/group': { component: Group },
    '/about': { component: About }
  })

  router.beforeEach(({ to, from, abort, redirect, next }) => {
    if (to.requireAuth && !router.app.user) {
      return abort()
    }
    next()
  })

  return router
}
