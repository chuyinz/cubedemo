import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import SubscribeDialog from './components/subscribe-dialog/subscribe-dialog.vue'
import createAPI from "cube-ui/src/common/helpers/create-api";

createAPI(Vue, SubscribeDialog, [], true)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
