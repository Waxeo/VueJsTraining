<template>
  <div class="parent-container">
    <div class="holder">
      <form @submit.prevent="addSkill(newSkill)">
        <div>
          <label for="skill-name">Skill Name:</label>
          <input id="skill-name" type="text" v-model="newSkill.label" placeholder="Enter a skill name" required />
        </div>

        <div>
          <label>Skill Level:</label>
          <div>
            <select id="rating" v-model.number="newSkill.level">
              <option v-for="num in 10" :key="num" :value="num">{{ num }}</option>
            </select>

          </div>
        </div>

        <div>
          <label>Domains:</label>
          <div>
            <label>
              <input type="checkbox" value="dom1" v-model="newSkill.domains" />
              Domain 1
            </label>
            <label>
              <input type="checkbox" value="dom2" v-model="newSkill.domains" />
              Domain 2
            </label>
            <label>
              <input type="checkbox" value="dom3" v-model="newSkill.domains" />
              Domain 3
            </label>
          </div>
        </div>

        <button type="submit">Add Skill</button>
      </form>

      <p>Total skills: {{ skillCount }}</p>

      <div class="skills-container">
        <div class="skills-list">
          <h3>FrontEnd</h3>
          <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li
                v-for="skill in skillsByDomain.dom1"
                :key="skill.id"
                :style="{ backgroundColor: skill.color }"
                class="skill-item"
              >
                <button @click="selectSkill(skill)" class="skill-button">
                  {{ skill.label }} | {{ skill.level }}
                </button>
                <i class="fa fa-minus-circle" @click="removeSkill(skill.id)"></i>
              </li>
            </transition-group>
          </ul>
        </div>

        <div class="skills-list">
          <h3>BackEnd</h3>
          <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li
                v-for="skill in skillsByDomain.dom2"
                :key="skill.id"
                :style="{ backgroundColor: skill.color }"
                class="skill-item"
              >
                <button @click="selectSkill(skill)" class="skill-button">
                  {{ skill.label }} | {{ skill.level }}
                </button>
                <i class="fa fa-minus-circle" @click="removeSkill(skill.id)"></i>
              </li>
            </transition-group>
          </ul>
        </div>

        <div class="skills-list">
          <h3>SoftSkills</h3>
          <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li
                v-for="skill in skillsByDomain.dom3"
                :key="skill.id"
                :style="{ backgroundColor: skill.color }"
                class="skill-item"
              >
                <button @click="selectSkill(skill)" class="skill-button">
                  {{ skill.label }} | {{ skill.level }}
                </button>
                <i class="fa fa-minus-circle" @click="removeSkill(skill.id)"></i>
              </li>
            </transition-group>
          </ul>
        </div>

      </div>
      <p>These are the skills that you possess</p>

      <div v-if="selectedSkill" class="edit-skill-form">
        <h3>Edit Skill</h3>
        <form @submit.prevent="updateSkill(selectedSkill)">
          <div>
            <label for="edit-label">Name:</label>
            <input id="edit-label" type="text" v-model="selectedSkill.label" />
          </div>
          <div>
            <label for="edit-level">Level:</label>
            <input id="edit-level" type="number" v-model="selectedSkill.level" min="1" max="10" />
          </div>
          <div>
            <label>Domains:</label>
            <label>
              <input
                type="checkbox"
                value="dom1"
                v-model="selectedSkill.domains"
              /> Domain 1
            </label>
            <label>
              <input
                type="checkbox"
                value="dom2"
                v-model="selectedSkill.domains"
              /> Domain 2
            </label>
            <label>
              <input
                type="checkbox"
                value="dom3"
                v-model="selectedSkill.domains"
              /> Domain 3
            </label>
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button" @click="cancelEdition">Cancel</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'skillsComponent',
  data() {
    return {
      newSkill: {
        label: "", 
        level: null, 
        domains: [], 
      },
    };
  },
  computed: {
    ...mapGetters(["skillCount", "allSkills", "skillsByDomain", "selectedSkill"]),
  },
  methods: {
    ...mapActions(["addSkill", "removeSkill", "selectSkill", "updateSkill", "cancelEdition"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  .parent-container {
    display: flex;
    justify-content: center;
  }

  .holder {
    background: #fff;
    width: 120%;
    max-width: 2000px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .skills-container {
    display: flex; 
    justify-content: space-between;
    gap: 20px;
  }

  .skills-list {
    flex: 1;
  }

  .skill-item {
    display: flex; /* Utilise Flexbox pour aligner les enfants */
    justify-content: space-between; /* Place le bouton à gauche et l'icône à droite */
    align-items: center; /* Aligne verticalement au milieu */
    padding: 10px; /* Ajoute un espace intérieur */
    border-radius: 4px; /* Coins arrondis pour esthétique */
    margin-bottom: 5px; /* Espacement entre les items */
  }

  .skill-button {
    background: none;
    border: none;
    color: inherit;
    text-align: left;
    font-size: inherit;
    cursor: pointer;
    flex: 1; /* Le bouton occupe tout l'espace disponible */
  }

  .skill-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  i {
    cursor: pointer;
    font-size: 1.2em; /* Augmente la taille de l'icône */
  }

  .edit-skill-form {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

</style>