import Vue from 'vue'
import demo from '../packages/index'
import App from './App'
Vue.use(demo)

new Vue({
  el: '#app',
  render: h => h(App)
})