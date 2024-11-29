import Vue from 'vue'
import Router from 'vue-router'
import About from './components/aboutComponent.vue'
import Skill from './components/skillsComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skill
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})