<template>
  <div>
    <h1>{{ this.project.name }}</h1>
    <p>{{ this.project.description }}</p>
    <ul v-for="phase in this.phases" :key="phase.id">
      <router-link :to="{name: 'phaseView' , query: {id: phase.id}}" ><li>{{ phase.name }}</li></router-link>
      
    </ul>
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
import axios from "axios";

export default {
  data() {
    return {
      project: {},
      phases: [{}],
    };
  },

  async mounted() {

    try {

      let res = await axios.get(
        "http://127.0.0.1:8000/api/projects/" + this.$route.query.id
      );

    this.project = res.data;
       res = await axios.get(
        "http://127.0.0.1:8000/api/phases/findByProjectId/" + this.$route.query.id
      );
    console.log("fuck")
    this.phases = res.data;

    } catch (error) {
      console.log(error);
    }


  },
};
</script>

<style>
</style>