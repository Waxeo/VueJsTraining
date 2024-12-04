<template>
    <div>
      <h1>{{ isEditing ? "Edit Skill" : "Add Skill" }}</h1>
      <form @submit.prevent="handleSubmit">
        <fieldset>
          <legend>Skill Name</legend>
          <input
            id="skill-name"
            type="text"
            v-model="currentSkill.label"
            placeholder="Enter a skill name"
            required
          />
        </fieldset>
        
        <fieldset>
          <legend>Skill Level</legend>
          <input
            id="skill-level"
            type="number"
            v-model.number="currentSkill.level"
            min="1"
            max="10"
          />
        </fieldset>

        <fieldset>
          <legend>Choose skill domain</legend>
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
        </fieldset>

        <button type="submit">{{ isEditing ? "Save Changes" : "Add Skill" }}</button>
        <router-link to="/list" class="skill-button">Cancel</router-link>
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
        return !!this.id;
      },
      ...mapGetters(["allSkills"]),
    },
    methods: {
      ...mapActions(["addSkill", "updateSkill"]),
      handleSubmit() {
        if (this.isEditing) {
          this.updateSkill(this.currentSkill);
        } else {
          this.addSkill(this.currentSkill);
        }
        this.$router.push("/list");
      },
    },
    created() {
      if (this.isEditing) {
        const skillToEdit = this.allSkills.find((skill) => skill.id === this.id);
        if (skillToEdit) {
          this.currentSkill = { ...skillToEdit };
        }
      }
    },
  };
</script>

<style scoped>

  fieldset {
    margin-bottom: 15px;
    padding: 10px;
  }
  
  legend {
    padding: 0px 3px;
    font-weight: bold;
    font-variant: small-caps;
  }
  
  label {
    width: 110px;
    display: inline-block;
    vertical-align: top;
    margin: 6px;
  }
  
  em {
    font-weight: bold;
    font-style: normal;
    color: #f00;
  }
  
  input:focus {
    background: #eaeaea;
  }
  
  input, textarea {
    width: 249px;
  }
  
  textarea {
    height: 100px;
  }
  
  select {
    width: 254px;
  }
  
  input[type=checkbox] {
    width: 10px;
  }
  
  input[type=submit] {
    width: 150px;
    padding: 10px;
  }

  input[type=text] {
    display: inline-block;
    vertical-align: top;
  }

  .skill-button {
    width: 150px;
    padding: 10px;
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

</style>
  