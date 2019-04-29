import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMDCAdapter from 'vue-mdc-adapter'

import 'vue-mdc-adapter/node_modules/material-components-web/dist/material-components-web.css'
import 'vue-mdc-adapter/node_modules/material-components-web/dist/material-components-web.js'

Vue.use(VueRouter)
Vue.use(VueMDCAdapter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
