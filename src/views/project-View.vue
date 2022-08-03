<template>
  <navBar />

  <div>
    <h2 style="color: black; margin-top: 150px">
      {{ this.store.getters.getProject.name }}
    </h2>
    <p>{{ this.store.getters.getProject.description }}</p>
  </div>
  <!-- End of board info bar -->

  <!-- Lists container -->
  <div class="row hidden-md-up container">
    <div class="col-md-4 card-container">
      <div class="card p-3 mb-3">
        <div
          class="d-flex justify-content-between card-header"
          style="border-radius: 0px"
        >
          <div class="d-flex flex-row align-items-center" style="">
            <div class="ms-2 c-details" style="">
              <h4 class="mb-0">Phase Name</h4>

              <span class="text2">
                <span style="color: black"> Started at:</span>
              </span>
            </div>
          </div>
          <div class="badge"></div>
        </div>
        <div class="mt-5">
          <div
            style="
              height: 250px;

              overflow-x: hidden;
              overflow-y: auto;
            "
          >
            <div class="task" style="">
              <ul
                style="
                  list-style: none;
                  padding: 10px;
                  background-color: #3f3d48;
                  box-shadow: rgba(0, 0, 0, 0.05) 10px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                  border-radius: 15px;
                "
              >
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <h6 style="color: white">Task 1</h6>
                    </label>
                  </div>
                  <div style="border-top: solid 1px; border-color: #dee1d6">
                    <p style="font-size: 13px; color: white">
                      Task discription Task discription Task discription Task
                      discription
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="task" style="">
              <ul
                style="
                  list-style: none;
                  padding: 10px;
                  background-color: #4a9d4a;
                  box-shadow: rgba(0, 0, 0, 0.05) 10px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                  border-radius: 15px;
                "
              >
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <h6 style="color: white">Task 2</h6>
                    </label>
                  </div>
                  <div
                    style="
                      border-top: solid 1px black;

                      border-color: #dee1d6;
                    "
                  >
                    <p style="font-size: 13px; color: white">
                      Task discription Task discription Task discription Task
                      discription
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="task" style="">
              <ul
                style="
                  list-style: none;
                  padding: 10px;
                  background-color: #ba514b;
                  box-shadow: rgba(0, 0, 0, 0.05) 10px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                  border-radius: 15px;
                "
              >
                <li>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <h6 style="color: white">Task 3</h6>
                    </label>
                  </div>
                  <div
                    style="border-top: solid 1px black; border-color: #dee1d6"
                  >
                    <p style="font-size: 13px; color: white">
                      Task discription Task discription Task discription Task
                      discription
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="task" style="">
              <ul
                style="
                  list-style: none;
                  padding: 10px;
                  background-color: white;
                  box-shadow: rgba(0, 0, 0, 0.05) 10px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                  border-radius: 15px;
                  border: solid 1px silver;
                "
              >
                <li>
                  <form action="">
                    <div class="form-check form-group">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        <input
                          class="form-control"
                          type="text"
                          name="taskName"
                          id=""
                          placeholder="Task Name..."
                          style="
                            border-radius: 5px;
                            border-style: none;
                            border: solid 1px;
                            border-color: #dfe2d7;
                          "
                        />
                        <!-- <h6 style="color: white">Task 3</h6> -->
                      </label>
                    </div>
                    <div
                      style="border-top: solid 1px black; border-color: #dee1d6"
                    >
                      <input
                        class="form-control"
                        type="text-area"
                        style="
                          margin: auto;
                          border-radius: 5px;
                          border: solid 1px;
                          border-color: #dfe2d7;
                          background-color: white;
                          height: 50px;
                          width: 95%;
                        "
                        placeholder="Task Description..."
                      />
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        style="
                          padding: 5px;
                          margin-left: 170px;
                          margin-top: 5px;
                          width: 17%;
                          height: 47px;
                          border-radius: 50px;
                          background-color: white;
                        "
                      ><i class="fas fa-plus"></i></button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>

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
                    v-else-if="parseInt(project.due_date.slice(8, 10)) == 11"
                    >th</span
                  >
                  <span
                    v-else-if="parseInt(project.due_date.slice(8, 10)) == 12"
                    >th</span
                  >
                  <span v-else-if="parseInt(project.due_date.slice(8, 9)) == 2"
                    >nd</span
                  >
                  <span v-else-if="parseInt(project.due_date.slice(8, 9)) == 1"
                    >st</span
                  >
                  <span v-else>th</span>
                  of
                  {{ this.months[parseInt(project.due_date.slice(5, 7))] }},

                  {{ project.due_date.slice(0, 4) }}
                </span>
              </span>
            </div>
            <p style="font-size: 15px">Progress:</p>
            <div class="progress" style="height: 5px">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "./navBar-view.vue";
import { useStore } from "vuex";
export default {
  components: { navBar },
  data() {
    return {
      store: useStore(),
      project: {},
      //  proj:this.store.getters.getProject,
    };
  },

  mounted() {
    this.store.dispatch("bringProject", {
      project_id: parseInt(this.$route.query.id),
    });
    this.project = this.store.getters.getproject;
    console.log(this.project);
  },
  computed: {
    getProject() {
      return this.project;
    },
  },
};
</script>

<style scoped>
.fas:hover{
  color: #0cb10c;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.board-info-bar {
  flex-basis: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.8rem 0;
  padding: 0 1rem;
  padding-bottom: 2em;
  color: #f6f6f6;
  border-bottom: 0.1rem solid #ccc;
  width: 35%;
}

/* Lists */

.lists-container::-webkit-scrollbar {
  height: 1rem;
}

.lists-container::-webkit-scrollbar-thumb {
  background-color: #303c43;
  border: 0.8rem solid #444e54;
  border-top-width: 0.8;
  border-radius: 3rem;
}

.lists-container {
  display: flex;
  align-items: start;
  padding: 0 0.8rem 0.8rem;
  overflow-x: auto;
  height: calc(100vh - 8.6rem);
}

.list {
  margin-top: 2em;
  flex: 0 0 27rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  max-height: calc(80vh - 5rem);
  border-radius: 0.5rem;
  margin-right: 2rem;
}
/* 
.list:last-of-type {
    margin-right: 0;
} */

.list-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  padding: 1rem;
}

.list-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: start;
  padding: 0 0.6rem 0.5rem;
  overflow-y: auto;
  border: black;
}

.list-items::-webkit-scrollbar {
  width: 1.6rem;
}

.list-items::-webkit-scrollbar-thumb {
  background-color: #c4c9cc;
  border-right: 0.6rem solid #e2e4e6;
}

.list-items li {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
  background-color: #fff;
  padding: 0.65rem 0.6rem;
  color: #4d4d4d;
  border: 0.1rem solid #ccc;
  border-radius: 0.3rem;
  margin-bottom: 0.6rem;
  word-wrap: break-word;
  cursor: pointer;
}

.list-items li:last-of-type {
  margin-bottom: 0;
}
/* 
.list-items li:hover {
    background-color: #eee;
} */

.add-card-btn {
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  color: #838c91;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
}

.add-card-btn:hover {
  background-color: #755dc9;
  color: white;
  text-decoration: underline;
}
</style>


 
