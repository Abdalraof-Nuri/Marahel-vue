<template>

  <div class="containter-fluid" style="display: flex; margin-right: 20px;">
    <div
      v-for="project in this.store.getters.getserchresult"
      :key="project.id"
      class="card"
      style="width: 18rem"
    >
      <h1>{{ project.name }}</h1>
      <h3>{{ project.description  }}</h3>

      <!-- <router-link :to="{name: 'projectView', query: {id: project.id}}">Expand Project</router-link> -->


  </div>
  
<div class="card m-2">
  <div class="card-title">Title</div>
</div>

  </div>
</template>

<script>

// import axios from "axios";
// import navBar from "./navBar-view.vue"
import { useStore } from "vuex";

export default {
  //  components:{navBar},
    data() {
        return {
          store:useStore(),
            projects: [{}],
        };
    },
    methods: {
        log() {
            console.log(this.$route.query);
        },
    },
    computed: {},
    mounted(){
      console.log(this.$route.query.text)
      console.log("bloop")
      this.store.dispatch("Search",{"project_name":this.$route.query.text});
    }
    // async mounted() {
    //     try {
    //         let res = await axios.get("http://127.0.0.1:8000/api/projects/findByName/" +
    //             this.$route.query.text);
    //         // console.log(this.$route.query.text)
    //         this.projects = res.data;
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // },
    
};
</script>



<style>
</style>