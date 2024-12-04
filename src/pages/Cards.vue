<template>
  <div lass="parent-container">
    <div class="holder">

      <FilterControls
        :selectedDomain="selectedDomain"
        :selectedLevel="selectedLevel"
        @update:selectedDomain="selectedDomain = $event"
        @update:selectedLevel="selectedLevel = $event"
      />

      <div class="skills-container">
        <div class="domain-group" v-for="(skills, domain) in groupedFilteredSkills(selectedDomain || '', selectedLevel)" :key="domain">
          <div class="cards-container">
            <SkillCard
              v-for="skill in skills"
              :key="skill.id"
              :skill="skill"
              :removeSkill="removeSkill"
            />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from "vuex";
  import FilterControls from "../components/dynamicFilter.vue";
  import SkillCard from "../components/skillCard.vue";


  export default {
    name: "CardsComponent",
    components: {
      FilterControls,
      SkillCard,
    },
    data() {
      return {
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
  };
</script>

<style scoped>

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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .domain-group {
    margin-bottom: 20px;
  } 

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 10px;
  }

</style>
