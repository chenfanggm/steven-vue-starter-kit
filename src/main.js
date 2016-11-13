import Vue from 'vue'
import Vuex from 'vuex'
import Routes from './routes'
import RootLayout from './layout/OneColumnLayout'

// init Vue plugin
Vue.use(Vuex)

// start app with routes
Routes.start(RootLayout, '#root')
