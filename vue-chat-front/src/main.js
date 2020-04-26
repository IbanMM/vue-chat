import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  /*
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
        const userData = JSON.parse(userString)
        this.$store.commit('SET_LOGIN_USER', userData)
        this.$store.commit('SET_LOGIN', true)
    }
  },
  */
  render: h => h(App)
}).$mount('#app')
