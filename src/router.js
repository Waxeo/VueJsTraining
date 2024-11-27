import Vue from 'vue'
import Router from 'vue-router'
import About from './components/AboutComponent.vue'
import Training from './components/TrainingComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Training
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})