import Vue from 'vue'
import Router from 'vue-router'
import Cards from './components/cardsComponent.vue'
import Skills from './components/skillsComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'skills',
      component: Skills
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    }
  ]
})