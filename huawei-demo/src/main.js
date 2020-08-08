import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import VueRouter from 'vue-router';
import "./iconfont/font_1591377_l1hujlhnrl/iconfont.css"

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'
import Swiper,{Navigation,Pagination,Autoplay} from "swiper";
Swiper.use([Navigation,Pagination,Autoplay]);
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
