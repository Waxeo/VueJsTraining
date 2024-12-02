<template>
  <div class="parent-container">
    <div class="holder">

      <!-- Filter Section -->
      <div class="filter-container">
        <label for="domain-filter">Filter by Domain:</label>
        <select id="domain-filter" v-model="selectedDomain">
          <option value="">All Domains</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="softskills">Softskills</option>
        </select>

        <label for="level-filter">Filter by Level:</label>
        <select id="level-filter" v-model.number="selectedLevel">
          <option value="">All Levels</option>
          <option v-for="num in 10" :key="num" :value="num">{{ num }}</option>
        </select>
      </div>


      <!-- <form @submit.prevent="addSkill(newSkill)">
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
              <input type="checkbox" value="frontend" v-model="newSkill.domains" />
              Domain 1
            </label>
            <label>
              <input type="checkbox" value="backend" v-model="newSkill.domains" />
              Domain 2
            </label>
            <label>
              <input type="checkbox" value="softskills" v-model="newSkill.domains" />
              Domain 3
            </label>
          </div>
        </div>

        <button type="submit">Add Skill</button>
      </form> -->

      <p>Total skills: {{ skillCount }}</p>

      <!-- Skills List -->
      <div class="skills-container">
        <!-- Si tous les domaines sont sélectionnés, afficher trié par domaine -->
        <div v-if="!selectedDomain">
          <div v-for="(skills, domain) in groupedFilteredSkills" :key="domain" class="skills-list">
            <h3>{{ domain }}</h3>
            <ul>
              <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                <li
                  v-for="skill in skills"
                  :key="skill.id"
                  :style="{ backgroundColor: skill.color }"
                  class="skill-item"
                >
                  <router-link
                    :to="{ name: 'editSkill', params: { id: skill.id } }"
                    class="skill-button"
                  >
                    {{ skill.label }} | {{ skill.level }}
                  </router-link>
                  <i class="fa fa-minus-circle" @click="removeSkill(skill.id)"></i>
                </li>
              </transition-group>
            </ul>
          </div>
        </div>

        <!-- Si un domaine spécifique est sélectionné, afficher sans groupe -->
        <div v-else>
          <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li
                v-for="skill in groupedFilteredSkills.all"
                :key="skill.id"
                :style="{ backgroundColor: skill.color }"
                class="skill-item"
              >
                <router-link
                  :to="{ name: 'editSkill', params: { id: skill.id } }"
                  class="skill-button"
                >
                  {{ skill.label }} | {{ skill.level }}
                </router-link>
                <i class="fa fa-minus-circle" @click="removeSkill(skill.id)"></i>
              </li>
            </transition-group>
          </ul>
        </div>
      </div>

      <p>These are the skills that you possess</p>

      <!-- <div v-if="selectedSkill" class="edit-skill-form">
        <h3>Edit Skill</h3>
        <form @submit.prevent="updateSkill(selectedSkill)">
          <div>
            <label for="edit-label">Name:</label>
            <input id="edit-label" type="text" v-model="selectedSkill.label" />
          </div>
          <div>
            <label for="edit-level">Level:</label>
            <select id="edit-level" v-model.number="selectedSkill.level">
              <option v-for="num in 10" :key="num" :value="num">{{ num }}</option>
            </select>
          </div>
          <div>
            <label>Domains:</label>
            <label>
              <input
                type="checkbox"
                value="frontend"
                v-model="selectedSkill.domains"
              /> Domain 1
            </label>
            <label>
              <input
                type="checkbox"
                value="backend"
                v-model="selectedSkill.domains"
              /> Domain 2
            </label>
            <label>
              <input
                type="checkbox"
                value="softskills"
                v-model="selectedSkill.domains"
              /> Domain 3
            </label>
          </div>
          <div>
            <button type="submit">Save</button>
            <button type="button" @click="cancelEdition">Cancel</button>
          </div>
        </form>
      </div> -->

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
      selectedDomain: "",
      selectedLevel: "",
    };
  },
  computed: {
    ...mapGetters(["skillCount", "allSkills", "skillsByDomain", "selectedSkill"]),

    // Compétences filtrées dynamiquement
    filteredSkills() {
      return this.allSkills.filter((skill) => {
        console.log(skill.label)
        console.log(skill.level)
        console.log(this.selectedLevel)
        const matchesDomain = this.selectedDomain
          ? skill.domains.includes(this.selectedDomain)
          : true;
        const matchesLevel = this.selectedLevel
          ? skill.level === this.selectedLevel
          : true;
        return matchesDomain && matchesLevel;
      });
    },

    groupedFilteredSkills() {
      if (!this.selectedDomain) {
        return {
          frontend: this.filteredSkills.filter((skill) =>
            skill.domains.includes("frontend")
          ),
          backend: this.filteredSkills.filter((skill) =>
            skill.domains.includes("backend")
          ),
          softskills: this.filteredSkills.filter((skill) =>
            skill.domains.includes("softskills")
          ),
        };
      }
      return { all: this.filteredSkills };
    },

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
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 10px; 
    border-radius: 4px;
    margin-bottom: 5px; 
  }

  .skill-button {
    background: none;
    border: none;
    color: inherit;
    text-align: left;
    font-size: inherit;
    cursor: pointer;
    flex: 1;
  }

  .skill-button:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  i {
    cursor: pointer;
    font-size: 1.2em;
  }

  .edit-skill-form {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .filter-container {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .filter-container label {
    font-weight: bold;
  }

  .filter-container select {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .skills-list {
    margin-bottom: 20px;
  }

  .skills-list h3 {
    text-transform: capitalize;
    margin-bottom: 10px;
  }

</style>