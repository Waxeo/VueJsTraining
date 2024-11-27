import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      { skill: "Vue.js" },
      { skill: "Frontend Developer" },
    ],
  },
  getters: {
    // Récupérer le nombre total de skills
    skillCount: state => state.skills.length,
    allSkills: state => state.skills,
  },
  mutations: {
    // Ajouter une nouvelle compétence
    ADD_SKILL(state, skill) {
      state.skills.push({ skill });
    },
    // Supprimer une compétence par index
    REMOVE_SKILL(state, index) {
      state.skills.splice(index, 1);
    },
  },
  actions: {
    addSkill({ commit }, skill) {
      commit("ADD_SKILL", skill);
    },
    removeSkill({ commit }, index) {
      commit("REMOVE_SKILL", index);
    },
  },
});


// getters : 
// Permet de calculer ou d'extraire des informations basées sur le state.



// mutations :
// Permettent de modifier le state de manière synchronisée.
// Elles sont déclenchées avec commit depuis les actions ou les composants.


// actions :
// Contiennent la logique métier (par exemple : appels API, calculs complexes).
// Peuvent être asynchrones.
// Elles déclenchent des mutations via commit.