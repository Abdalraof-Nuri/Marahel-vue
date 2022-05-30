<template>
  <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        
        <div v-for="project in this.projects" :key="project.id" class="col-md-4 card-container">
          <div class="card p-3 mb-2">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <!-- <div class="icon"><i class="bx bxl-mailchimp"></i></div> -->
                <div class="ms-2 c-details">
                  <h5 class="mb-0">{{ project.name }}</h5>
                  <span>at: {{ project.Total_P }}</span>
                </div>
              </div>
              <div class="badge">
                <router-link style=" text-decoration: none;" :to="{name: 'projectView' , query: {id: project.id}}" >
                  <a style=" text-decoration: none;" class="card__link" href="#">
                    Open<i class="fas fa-arrow-right"></i>
                    </a>
                </router-link>
</div>
            </div>
            <div class="mt-5">
              <p class="heading">{{ project.description }}</p>
              <div class="mt-5">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 50%"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div class="mt-3">
                  <span class="text1"
                    >32 Applied <span class="text2">of 50 capacity</span></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
      projects: [{}],
      width: "width: 100%",
    };
  },

  async mounted() {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/projects");

      // console.log(this.$route.query.text)

      this.projects = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>
