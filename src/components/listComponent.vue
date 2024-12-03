<template>
  <div class="parent-container">
    <div class="holder">

      <FilterControls
        :selectedDomain="selectedDomain"
        :selectedLevel="selectedLevel"
        @update:selectedDomain="selectedDomain = $event"
        @update:selectedLevel="selectedLevel = $event"
      />

      <div class="skills-container">
        <div v-if="!selectedDomain">
          <div v-for="(skills, domain) in groupedFilteredSkills(selectedDomain, selectedLevel)" :key="domain" class="skills-list">
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

        <div v-else>
          <h3>{{ selectedDomain }}</h3>
          <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
              <li
                v-for="skill in groupedFilteredSkills(selectedDomain, selectedLevel).all"
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

      <p>These are the {{ skillCount }} skills that you possess</p>

    </div>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex';
  import FilterControls from "./filterComponent.vue";

  export default {
    name: 'skillsComponent',
    components: {
      FilterControls,
    },
    data() {
      return {
        newSkill: {
          label: "", 
          level: null, 
          domains: [], 
        },
        selectedDomain: "",
        selectedLevel: "",
      }
    },
    computed: {
      ...mapGetters(["skillCount", "allSkills", "skillsByDomain", "filteredSkills", "groupedFilteredSkills"]),
    },
    methods: {
      ...mapActions(["addSkill", "removeSkill", "selectSkill", "updateSkill", "cancelEdition"]),
    },
  }
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
    text-decoration: none;
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