<template>
  <div>
    <h1>{{ this.project.name }}</h1>
    <p>{{ this.project.description }}</p>

    <!-- 

      Better be onclick to show model first then router link

      <button @click"load modal">
        add new Phase
      </button>

      <router-link :to="{name: 'create new list', query: {}}"></router-link> 
      -->
    <ul>
      <li>List</li>
      <li>of</li>
      <li>Teams</li>
    </ul>
  </div>
</template>

<script>

import { useStore } from "vuex";
export default {
  data() {
    return {
      store: useStore(),
      project: {
        "project_id": parseInt(this.$route.query.id)
      },
    };
  },

  mounted() {
    this.store.dispatch("bringProject", this.project)
  },
};
</script>

<style>
</style>