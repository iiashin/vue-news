import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//mint-ui库
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

//vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//引入jquery
import jquery from 'jquery'


//引入mock
import '../src/mock/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  jquery,
  render: h => h(App)
}).$mount('#app')
