<template>
  <div lass="parent-container">
    <div class="holder">
      <div class="cards-container">
        <div
          v-for="skill in allSkills"
          :key="skill.id"
          class="skill-card"
          :style="{ backgroundColor: skill.color }"
        >
          <h3>{{ skill.label }}</h3>
          <p>Level: {{ skill.level }}</p>
          <p>Domains: {{ skill.domains.join(', ') }}</p>
          <button class="delete-button" @click="removeSkill(skill.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardsComponent",
  computed: {
    ...mapGetters(["allSkills"]),
  },
  methods: {
    ...mapActions(["selectSkill", "removeSkill"]),
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
    background: none;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
    color: #fff;
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

</style>
