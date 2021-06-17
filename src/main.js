import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'

//componentes
import cabecalhomenu from './components/html-component/cabecalhomenu'
import rotina from './components/html-component/rotina.vue'

Vue.component('app-cabecalho', cabecalhomenu)
Vue.component('app-rotina', rotina)


Vue.config.productionTip = false


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
