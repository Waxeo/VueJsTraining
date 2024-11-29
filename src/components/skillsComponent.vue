<template>
  <div class="hello">
    <div class="holder">

      <!-- <form @submit.prevent="() => { addSkill(skill); skill = ''; }">
        <input type="text" placeholder="Enter a skill you have..." v-model="skill" />
      </form> -->

      <form @submit.prevent="addSkill">
      <!-- Champ pour le nom de la compétence -->
      <div>
        <label for="skill-name">Skill Name:</label>
        <input id="skill-name" type="text" v-model="newSkill.label" placeholder="Enter a skill name" required />
      </div>

      <!-- Sélecteur pour le niveau de compétence -->
      <div>
        <label>Skill Level:</label>
        <div>
          <button
            v-for="level in 10"
            :key="level"
            type="button"
            :class="{ selected: newSkill.level === level }"
            @click="newSkill.level = level"
          >
            {{ level }}
          </button>
        </div>
      </div>

      <!-- Cases à cocher pour les domaines -->
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

      <!-- Bouton pour soumettre -->
      <button type="submit">Add Skill</button>
    </form>

      <p>Total skills: {{ skillCount }}</p>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li
            v-for="skill in allSkills"
            :key="skill.id"
            :style="{ backgroundColor: skill.color }"
          >
            {{ skill.label }}
            <i class="fa fa-minus-circle" @click="removeSkill(skill.id)"></i>
          </li>
        </transition-group>
      </ul>

      <p>These are the skills that you possess</p>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'TrainingComponent',
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
    ...mapGetters(["skillCount", "allSkills"]),
  },
  methods: {
    ...mapActions(["addSkill", "removeSkill"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  .holder {
    background: #fff;
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

i {
  float:right;
  cursor:pointer;
}

</style>