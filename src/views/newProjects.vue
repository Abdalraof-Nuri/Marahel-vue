<template>
  <div class="py-5">
    <div class="container">
      <div class="row hidden-md-up">
        <div
          v-for="project in this.projects"
          :key="project.id"
          class="col-md-4 card-container"
        >
          <div class="card p-3 mb-2">
            <div class="d-flex justify-content-between card-header" style="">
              <div class="d-flex flex-row align-items-center">
                <!-- <div class="icon"><i class="bx bxl-mailchimp"></i></div> -->
                <div class="ms-2 c-details">
                  <h4 class="mb-0">{{ project.name }}</h4>

                  <span class="text2" v-if="project.created_at">
                    <span style="color: black"> Started at:</span>
                    {{ project.created_at.slice(8, 10) }}

                    of
                    {{ this.months[parseInt(project.created_at.slice(5, 7))] }},

                    {{ project.created_at.slice(0, 4) }}
                  </span>
                </div>
              </div>
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
            <div class="mt-5">
              <p class="heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                doloremque ducimus adipisci id earum, laudantium deleniti non
                delectus architecto excepturi ipsam magnam eveniet
              </p>
              <div class="mt-5">
                <div class="mt-3">
                  <span class="text2" style="text-style: strong"
                    >Due Date:

                    <span class="text2" v-if="project.created_at"
                      >{{ project.due_date.slice(8, 10) }}
                      <span v-if="parseInt(project.due_date.slice(8, 9)) == 3"
                        >rd</span
                      >
                      <span
                        v-else-if="
                          parseInt(project.due_date.slice(8, 10)) == 11
                        "
                        >th</span
                      >
                      <span
                        v-else-if="
                          parseInt(project.due_date.slice(8, 10)) == 12
                        "
                        >th</span
                      >
                      <span
                        v-else-if="parseInt(project.due_date.slice(8, 9)) == 2"
                        >nd</span
                      >
                      <span
                        v-else-if="parseInt(project.due_date.slice(8, 9)) == 1"
                        >st</span
                      >
                      <span v-else>th</span>
                      of
                      {{ this.months[parseInt(project.due_date.slice(5, 7))] }},

                      {{ project.due_date.slice(0, 4) }}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 card-container">
          <div class="card p-3 mb-2 add-project-card">
            <button
              class="add-project-btn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i class="fas fa-plus"></i>
            </button>

            <p>Add New Project...</p>
          </div>
        </div>

        <!-- Modal -->
        <form>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add a new Project
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="input-project-name">Project Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="input-project-name"
                      placeholder="Enter Project name..."
                      v-model="this.newProject.name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="input-project-discriptin">Discription</label>
                    <textarea
                      class="form-control"
                      id="input-project-discriptin"
                      placeholder="Discription..."
                      cols="30"
                      rows="3"
                      v-model="this.newProject.description"
                    >
                    </textarea>
                  </div>

                  <!-- <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >Check me out</label
                    >
                  </div> -->

                  <div class="form-group form-check">
                    <label for="due-date">Pick a due date: &ensp;</label>
                    <input
                      class="form-control"
                      type="datetime-local"
                      id="due-date"
                      name="due-date"
                      style="width: 70%; margin: auto"
                      v-model="this.newProject.due_date"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button @click="createNewProject" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import main from "../main.js";

export default {
  data() {
    return {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      project:{
        created_at: '',
        due_date: '',
      },
      projects: [{}],
      newProject: {
        name: "",
        description: "",
        due_date: "",
        removed: 0,
        status: 0,

        user_id: 1,
      },
    };
  },
  methods: {
    async createNewProject(e) {
      e.preventDefault();

      this.newProject.user_id = 1;
     
      try {
        let res = await axios.post(
          main.base_URL + "projects/",
          this.newProject
        );

        console.log(res.data);
        this.newProject.name = "";
        this.newProject.description = "";
        this.newProject.due_date = "";
        this.newProject.removed = "";
        this.newProject.status = "";

        this.$router.go(0);
      } catch (error) {
        console.log(error);
      }
    },

    consoleLog(e) {
      console.log(this.newProject);
      e.preventDefault();
    },
  },
  computed: {},
  async beforeCreate() {
    try {
      let res = await axios.get(main.base_URL + "projects");
      this.projects = res.data;
    } catch (error) {
      console.log(error);
    }

    // console.log(this.progress[1])
  },
};
</script>

<style>
</style>
