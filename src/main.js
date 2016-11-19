import Vue from 'vue'
import { CreateRouter } from './routes'
import RootLayout from './layout/OneColumnLayout'

const router = CreateRouter(Vue)
router.start(RootLayout, '#root')
