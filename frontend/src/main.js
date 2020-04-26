import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NywibmFtZSI6ImpvYW8iLCJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1ODc5MDQ1NjMsImV4cCI6MTU4ODE2Mzc2M30.SY4cQf5XSCp4s1s2_QRyL4VBJYCAIjEEqsQS3rOxCBk'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')