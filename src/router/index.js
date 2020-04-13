import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import guixiVue from './config'

Vue.use(Router)
Vue.prototype.baseUrl = guixiVue.baseUrl
Vue.prototype.baseCompany = guixiVue.baseCompany
Vue.prototype.baseDescription = guixiVue.baseDescription


export default new Router({
  routes
})
