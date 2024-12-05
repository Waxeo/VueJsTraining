<template>
  <div class="filter-container">
    <label for="domain-filter">Filter by Domain:</label>
    <select id="domain-filter" :value="selectedDomain" @change="$emit('update:selectedDomain', $event.target.value)">
      <option value="">All Domains</option>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="softskills">Softskills</option>
    </select>

    <label for="level-filter">Filter by Level:</label>
    <select id="level-filter" :value="selectedLevel" @change="$emit('update:selectedLevel', +$event.target.value || '')">
      <option value="">All Levels</option>
      <option v-for="num in 10" :key="num" :value="num">{{ num }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "FilterControls",
    props: ["selectedDomain", "selectedLevel"],
    methods: {
      updateDomain(event) {
        this.$emit("update:selectedDomain", event.target.value);
      },
      updateLevel(event) {
        this.$emit("update:selectedLevel", +event.target.value || "");
      },
    },
  }
</script>

<style scoped>
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
