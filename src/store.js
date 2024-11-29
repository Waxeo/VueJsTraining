import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex);

// Qu'est ce que je veux en faire ? 
    // Level : niveua de compétences dans le skill désigné
    // Domains : dom1 = front, dom2 = back, dom3 = softskill
    // Couleurs : Jaune (FFD700) pour le front, Bleu (1E90FF) pour le back, Violet (8A2BE2) pour les softskills
    // DONC -- formulaire d'ajout d'un skills nécéssitant un mini qcm avec a cocher -- le niveau de compétences, a cocher le domaine de skill, le nom en input et on est pas mal.

    // ça implique de changer le simple input du trainingcomponent, changer la logique d'ajout / suppression / affichage des skills et surement d'autres points a définir 

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
  },
  getters: {
    // Récupérer le nombre total de skills
    skillCount: state => state.skills.length,
    // Récupérer tous les skills
    allSkills: state => state.skills,
  },
  mutations: {
    ADD_SKILL(state, skill) {
      const domains = Array.isArray(skill.domains) ? skill.domains : [];
      const color = domains.includes("dom1")
        ? "#FFD700"
        : domains.includes("dom2")
        ? "#1E90FF"
        : domains.includes("dom3")
        ? "#8A2BE2"
        : "#CCCCCC";
        
      console.log(skill.label)  
    
      state.skills.push({
        id: uuidv4(),
        label: skill.label,
        level: skill.level || 1,
        domains,
        color,
      });
    },
    REMOVE_SKILL(state, id) {
      // Utilise un filtre pour supprimer l'élément avec l'ID correspondant
      state.skills = state.skills.filter(skill => skill.id !== id);
    },
  },
  actions: {
    addSkill({ commit }, skill) {
      commit("ADD_SKILL", skill);
    },
    removeSkill({ commit }, id) {
      commit("REMOVE_SKILL", id);
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