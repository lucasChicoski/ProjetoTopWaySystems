import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'

//componentes

import rotina from './components/html-component/rotina.vue'
import navigation from './components/html-component/navigationdrower.vue'


Vue.component('app-rotina', rotina)
Vue.component('app-navigation', navigation)


Vue.config.productionTip = false


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
