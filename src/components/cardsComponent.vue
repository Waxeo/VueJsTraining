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
        <div v-if="!selectedDomain">
          <div class="cards-container">
            <template v-for="skills in groupedFilteredSkills('', selectedLevel)">
              <div
                v-for="skill in skills"
                :key="skill.id"
                class="skill-card"
                :style="{ backgroundColor: skill.color }"
              >
                <h3>{{ skill.label }}</h3>
                <p>Level: {{ skill.level }}</p>
                <router-link
                  :to="{ name: 'editSkill', params: { id: skill.id } }"
                  class="edit-button"
                >
                  Edit
                </router-link>
                <button class="delete-button" @click="removeSkill(skill.id)">Delete</button>
              </div>
            </template>
          </div>
        </div>

        <div v-else>
          <h3>{{ selectedDomain }}</h3>
          <div class="cards-container">
            <div
              v-for="skill in groupedFilteredSkills(selectedDomain, selectedLevel).all"
              :key="skill.id"
              class="skill-card"
              :style="{ backgroundColor: skill.color }"
            >
              <h3>{{ skill.label }}</h3>
              <p>Level: {{ skill.level }}</p>
              <p>Domains: {{ skill.domains.join(', ') }}</p>
              <router-link
                :to="{ name: 'editSkill', params: { id: skill.id } }"
                class="edit-button"
              >
                Edit
              </router-link>
              <button class="delete-button" @click="removeSkill(skill.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from "vuex";
  import FilterControls from "./filterComponent.vue";


  export default {
    name: "CardsComponent",
    components: {
      FilterControls,
    },
    data() {
      return {
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

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }

  .skill-card {
    width: 200px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: #fff;
    text-align: center;
    position: relative;
  }

  .skill-card h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .skill-card p {
    margin: 5px 0;
  }

  .edit-button,
  .delete-button {
    all: unset; /* Supprime tous les styles par défaut */
    display: inline-block; /* Réinitialise l'affichage */
    text-align: center;    /* Centrer le contenu */
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
    color: #fff;
    background: none;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }


  .edit-button:hover {
    background-color: #fff;
    color: #007bff;
  }

  .delete-button:hover {
    background-color: #fff;
    color: #dc3545;
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

</style>
