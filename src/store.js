import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      {
        id: uuidv4(),
        label: "Vue.js",
        level: 3,
        domains: ["dom1"],
        color: "#ffc800c5",
      },
      {
        id: uuidv4(),
        label: "Node.js",
        level: 5,
        domains: ["dom2"],
        color: "#57ccf0a4",
      },
      {
        id: uuidv4(),
        label: "Team Work",
        level: 10,
        domains: ["dom3"],
        color: "#ab5cc5a4",
      },
    ],
    selectedSkill: null,
  },
  getters: {
    skillCount: state => state.skills.length,
    allSkills: state => state.skills,
    skillsByDomain: state => {
      return {
        dom1: state.skills.filter(skill => skill.domains.includes("dom1")),
        dom2: state.skills.filter(skill => skill.domains.includes("dom2")),
        dom3: state.skills.filter(skill => skill.domains.includes("dom3")),
      }
    },
    selectedSkill: state => state.selectedSkill,
  },
  mutations: {
    ADD_SKILL(state, skill) {
      const domains = Array.isArray(skill.domains) ? skill.domains : []
      const color = domains.includes("dom1")
        ? "#ffc800c5"
        : domains.includes("dom2")
        ? "#57ccf0a4"
        : domains.includes("dom3")
        ? "#ab5cc5a4"
        : "#CCCCCC"
    
      state.skills.push({
        id: uuidv4(),
        label: skill.label,
        level: skill.level || 1,
        domains,
        color,
      })
    },
    REMOVE_SKILL(state, id) {
      state.skills = state.skills.filter(skill => skill.id !== id)
    },
    SET_SELECTED_SKILL(state, skill) {
      state.selectedSkill = skill ? { ...skill } : null;
    },
    UPDATE_SKILL(state, updatedSkill) {
      const index = state.skills.findIndex(skill => skill.id === updatedSkill.id);
      if (index !== -1) {
        updatedSkill.color = updatedSkill.domains.includes("dom1")
        ? "#ffc800c5"
        : updatedSkill.domains.includes("dom2")
        ? "#57ccf0a4"
        : updatedSkill.domains.includes("dom3")
        ? "#ab5cc5a4"
        : "#CCCCCC"
        state.skills.splice(index, 1, updatedSkill);
      }
      state.selectedSkill = null;
    },
  },
  actions: {
    addSkill({ commit }, skill) {
      commit("ADD_SKILL", skill)
    },
    removeSkill({ commit }, id) {
      commit("REMOVE_SKILL", id)
    },
    selectSkill({ commit }, skill) {
      commit("SET_SELECTED_SKILL", skill);
    },
    updateSkill({ commit }, updatedSkill) {
      commit("UPDATE_SKILL", updatedSkill);
    },
    cancelEdition({ commit }) {
      commit("SET_SELECTED_SKILL", null);
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