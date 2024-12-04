<template>
    <div class="skill-card" :style="{ backgroundColor: skill.color }">
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
  
<script>
  export default {
    name: "SkillCard",
    props: {
      skill: {
        type: Object,
        required: true,
      },
      removeSkill: {
        type: Function,
        required: true,
      },
    },
  }
</script>
  
<style scoped>

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
    all: unset;
    display: inline-block;
    text-align: center;
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

</style>
  