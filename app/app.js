import Vue from 'nativescript-vue';

import router from './routes/index'

Vue.prototype.$router = router
Vue.prototype.$goto = function (to, options) {
    this.$navigateTo(this.$router[to], options)
}

new Vue({
  render: h => h('frame', [h(router['home'])])
}).$start()