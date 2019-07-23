import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import VueRouter from 'vue-router'
import Welcome from './components/Welcome'
import TodoList from './components/TodoList'


Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Welcome },
  {
     path: '/Todo', 
     component: TodoList,
     name:'Todo' ,
  },

];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
