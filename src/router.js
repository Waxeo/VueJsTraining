import Vue from 'vue'
import Router from 'vue-router'
import About from './components/aboutComponent.vue'
import Skill from './components/skillsComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'skills',
      component: Skill
    },
    {
      path: '/cards',
      name: 'about',
      component: About
    }
  ]
})