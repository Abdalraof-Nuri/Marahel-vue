<template>
  <navBar />
  <div class="container" style="margin-top: 80px">
    <div class="py-5">
      <div class="container">
        <!-- <label for="cars">Show:</label> -->

        <!-- <select @click="showProjects" v-model="selected">
        <option value="All" >All</option>
        <option value="Mine">My Projects</option>
        <option value="Assigned">Assigned Projects</option>
        </select> -->

        <button name="MyProjects" class="mineOrAssigned">My projects</button>
        <button name="Assigned Projects" class="mineOrAssigned">
          Assigned Projects
        </button>

        <div class="row hidden-md-up">
          <!-- projects... there's probably a better way to this  -->

          <!-- All Projects -->
          <div
            v-for="project in this.store.getters.getserchresult"
            :key="project.id"
            class="col-md-4 card-container"
            style="width: 18rem"
          >
            <div class="card p-3 mb-2">
              <h4>{{ project.name }}</h4>
              <p class="heading">
                {{ project.description }}
              </p>
              <div class="badge">
                <router-link
                  style="text-decoration: none"
                  :to="{ name: 'projectView', query: { id: project.id } }"
                >
                  <button
                    style="text-decoration: none"
                    class="goto-project-btn"
                    href="#"
                  >
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </router-link>
              </div>
            </div>
            <!-- <router-link :to="{name: 'projectView', query: {id: project.id}}">Expand Project</router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import navBar from "./navBar-view.vue"
import { useStore } from "vuex";
import navBar from "./navBar-view.vue";

export default {
  //  components:{navBar},
  data() {
    return {
      store: useStore(),
      projects: [{}],
    };
  },
  methods: {
    log() {
      console.log(this.$route.query);
    },
  },
  components: {
    navBar,
  },
  computed: {},
  mounted() {
    console.log(this.$route.query.text);
    console.log("bloop");
    this.store.dispatch("Search", { project_name: this.$route.query.text });
  },
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