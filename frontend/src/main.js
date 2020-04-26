import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2lhbm8gQmVzc2VnYXRvIiwiZW1haWwiOiJsZnJiZXNzZWdhdG9AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU4NzkxOTY0OSwiZXhwIjoxNTg4MTc4ODQ5fQ.ChDot_YNAmNocmCt5eYzDX8gLYOFeignM9SFJOZjK_k'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')