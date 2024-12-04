import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const mapSkillColor = {
  frontend: "#ffc800c5",
  backend: "#57ccf0a4",
  softskills: "#ab5cc5a4",
};

const computeColor = (domains) => {
  return mapSkillColor[domains[0]] || "#CCCCCC";
};

export default new Vuex.Store({
  state: {
    skills: [
      {
        id: uuidv4(),
        label: "Vue.js",
        level: 3,
        domains: ["frontend"],
        color: "#ffc800c5",
      },
      {
        id: uuidv4(),
        label: "Node.js",
        level: 5,
        domains: ["backend"],
        color: "#57ccf0a4",
      },
      {
        id: uuidv4(),
        label: "Team Work",
        level: 10,
        domains: ["softskills"],
        color: "#ab5cc5a4",
      },
    ],
  },
  getters: {
    skillCount: state => state.skills.length,
    allSkills: state => state.skills,
    skillsByDomain: () => (skills) => {
      return {
        frontend: skills.filter((skill) => skill.domains.includes("frontend")),
        backend: skills.filter((skill) => skill.domains.includes("backend")),
        softskills: skills.filter((skill) => skill.domains.includes("softskills")),
      };
    },    
    filteredSkills: (state) => (selectedDomain, selectedLevel) => {
      return state.skills.filter((skill) => {
        const matchesDomain = selectedDomain
          ? skill.domains.includes(selectedDomain)
          : true
        const matchesLevel = selectedLevel
          ? skill.level === selectedLevel
          : true
        return matchesDomain && matchesLevel
      });
    },
    groupedFilteredSkills: (state, getters) => (selectedDomain, selectedLevel) => {
      const filteredSkills = getters.filteredSkills(selectedDomain, selectedLevel);
      if (!selectedDomain) {
        return getters.skillsByDomain(filteredSkills)
      }
      return { all: filteredSkills }
    },
  },
  mutations: {
    ADD_SKILL(state, skill) {
      const domains = Array.isArray(skill.domains) ? skill.domains : []
      const color = computeColor(domains);
    
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
    UPDATE_SKILL(state, updatedSkill) {
      const index = state.skills.findIndex(skill => skill.id === updatedSkill.id);
      if (index !== -1) {
        updatedSkill.color = computeColor(updatedSkill.domains);
        state.skills.splice(index, 1, updatedSkill);
      }
    },
  },
  actions: {
    addSkill({ commit }, skill) {
      commit("ADD_SKILL", skill)
    },
    removeSkill({ commit }, id) {
      commit("REMOVE_SKILL", id)
    },
    updateSkill({ commit }, updatedSkill) {
      commit("UPDATE_SKILL", updatedSkill);
    },
    cancelEdition({ commit }) {
      commit("SET_SELECTED_SKILL", null);
    },
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage, // sauvegarde dans localStorage pour permettre la persistance des données.
    }),
  ],
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