import Vue from 'vue'
import { CreateRouter } from './routes'
import AppLayout from './layout/OneColumnLayout'

Vue.config.devtools = !__PROD__

const router = CreateRouter(Vue)
router.start(AppLayout, '#app')
