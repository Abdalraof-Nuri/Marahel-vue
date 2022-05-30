<template>
  <h1>{{this.phase.name}}</h1>
  <ul >
      <li v-for="task in this.tasks" :key="task.id">
          {{ task.name }}
      </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            phase: {},
            tasks: [{}]
        }
    },
    async mounted() {

    try {

      let res = await axios.get(
        "http://127.0.0.1:8000/api/phases/" + this.$route.query.id
      );

    this.phase = res.data;


      res = await axios.get(
        "http://127.0.0.1:8000/api/tasks/findByPhaseId/" + this.$route.query.id
      );

    this.tasks = res.data

    } catch (error) {
      console.log(error);
    }
    }

}
</script>

<style>

</style>