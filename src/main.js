import Vue from 'vue'
import App from "./App.vue";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
