<template>
    <div>
      <h1>{{ isEditing ? "Edit Skill" : "Add Skill" }}</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="skill-name">Skill Name:</label>
          <input
            id="skill-name"
            type="text"
            v-model="currentSkill.label"
            placeholder="Enter a skill name"
            required
          />
        </div>
        <div>
          <label for="skill-level">Skill Level:</label>
          <input
            id="skill-level"
            type="number"
            v-model.number="currentSkill.level"
            min="1"
            max="10"
          />
        </div>
        <div>
          <label>Domains:</label>
          <div>
            <label>
              <input type="checkbox" value="frontend" v-model="currentSkill.domains" />
              Frontend
            </label>
            <label>
              <input type="checkbox" value="backend" v-model="currentSkill.domains" />
              Backend
            </label>
            <label>
              <input type="checkbox" value="softskills" v-model="currentSkill.domains" />
              Softskills
            </label>
          </div>
        </div>
        <button type="submit">{{ isEditing ? "Save Changes" : "Add Skill" }}</button>
        <router-link to="/list">Cancel</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    name: "SkillForm",
    props: ["id"], // Reçoit l'ID depuis la route
    data() {
      return {
        currentSkill: {
          label: "",
          level: null,
          domains: [],
        },
      };
    },
    computed: {
      isEditing() {
        return !!this.id; // Détermine si on est en mode édition
      },
      ...mapGetters(["allSkills"]),
    },
    methods: {
      ...mapActions(["addSkill", "updateSkill"]),
      handleSubmit() {
        if (this.isEditing) {
          this.updateSkill(this.currentSkill); // Mise à jour de la compétence
        } else {
          this.addSkill(this.currentSkill); // Ajout d'une nouvelle compétence
        }
        this.$router.push("/list"); // Redirection après soumission
      },
    },
    created() {
      if (this.isEditing) {
        const skillToEdit = this.allSkills.find((skill) => skill.id === this.id);
        if (skillToEdit) {
          this.currentSkill = { ...skillToEdit }; // Préremplir le formulaire
        }
      }
    },
  };
  </script>
  