<template>
  <div class="skill-list-container">
    <ul class="skill-list">
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
            <div class="skill-content">
              <span class="skill-label">{{ skill.label }}</span>
              <span class="skill-level">Level: {{ skill.level }}</span>
            </div>
          </router-link>
          <i class="fa fa-minus-circle delete-icon" @click="removeSkill(skill.id)"></i>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SkillList",
    props: {
      skills: {
        type: Array,
        required: true,
      },
      domain: {
        type: String,
        default: null,
      },
      selectedDomain: {
        type: String,
        default: "",
      },
      removeSkill: {
        type: Function,
        required: true,
      },
    },
  }
</script>

<style scoped>

  .skill-list-container {
    margin-bottom: 20px;
  }

  .domain-header {
    font-size: 1.5em;
    font-weight: bold;
    color: #4a4a4a;
    margin-bottom: 10px;
  }

  .skill-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  .skill-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px 15px;
    width: 300px;
    color: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .skill-item:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  .skill-button {
    text-decoration: none;
    color: inherit;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .skill-content {
    display: flex;
    justify-content: space-between;
  }

  .skill-label {
    font-weight: bold;
    font-size: 1.1em;
  }

  .skill-level {
    font-size: 0.9em;
    opacity: 0.8;
  }

  .delete-icon {
    cursor: pointer;
    font-size: 1.5em;
    color: #ff6b6b;
    margin-left: 10px;
    transition: color 0.2s ease;
  }

  .delete-icon:hover {
    color: #ff4b4b;
  }

</style>