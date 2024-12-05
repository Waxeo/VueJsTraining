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
        <div v-for="(skills, domain) in groupedFilteredSkills(selectedDomain || '', selectedLevel)" :key="domain" class="skills-list">
          <SkillList
            :skills="skills"
            :domain="domain"
            :selectedDomain="selectedDomain"
            :removeSkill="removeSkill"
          />
        </div>
      </div>

      <p>These are the {{ skillCount }} skills that you possess</p>

    </div>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex';
  import FilterControls from "../components/dynamicFilter.vue";
  import SkillList from '../components/skillList.vue';

  export default {
    name: 'skillsComponent',
    components: {
      FilterControls,
      SkillList
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
      ...mapGetters(["skillCount", "groupedFilteredSkills"]),
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
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .domain-group {
    margin-bottom: 20px;
  }

  .skills-summary {
    text-align: center;
    margin-top: 20px;
    font-size: 1.2em;
    color: #6c757d;
  }

</style>