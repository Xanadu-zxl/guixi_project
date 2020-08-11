import Vue from 'vue'
import App from './App'
import router from './router'
import './style/common.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Modal, Table } from 'view-design';

Vue.use(VueAxios, axios)
Vue.component('Modal', Modal);
Vue.component('Table', Table);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
