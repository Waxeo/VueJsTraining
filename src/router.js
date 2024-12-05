import Vue from 'vue'
import Router from 'vue-router'
import Cards from './pages/Cards.vue'
import List from './pages/Lists.vue'
import SkillForm from './components/addAndEditSkillForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/skill', 
      name: 'addSkill',
      component: SkillForm,
    },
    {
      path: '/skill/:id',
      name: 'editSkill',
      component: SkillForm,
      props: true, // autorise les props (pour passer l'ID)
    },
  ]
})