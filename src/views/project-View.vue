<template>
  <navBar />

  <div>
    <h2 style="color: black; margin-top: 150px">
      {{ this.store.getters.getProject.name }}
    </h2>
    <p>{{ this.store.getters.getProject.description }}</p>
  </div>
  <!-- End of board info bar -->

  <!-- container -->

  <div class="row hidden-md-up container">
    <div class="col-md-4 card-container">
      <div class="card p-3 mb-3">
        <div
          class="d-flex justify-content-between card-header"
          style="border-radius: 0px"
        >
          <div class="d-flex flex-row align-items-center" style="">
            <!-- phase Title -->

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
          <!-- Tasks list -->
          <div
            style="
              height: 250px;

              overflow-x: hidden;
              overflow-y: auto;
            "
          >
            <!-- Tasks go here -->
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

            <!-- create new task form... it sucks -->

            <div
              class="task new-task"
              style="
                border: 1px solid #ccc !important;
                border-radius: 10px;
                padding: 10px;
              "
            >
              <label for="startDate">Want to create a new task?</label>
              <div class="form-group" style="width: 80%; margin: auto">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Task name"
                />
                <div style="border-top: solid 1px black; border-color: #dee1d6">
                  <div class="form-outline">
                    <textarea
                      class="form-control"
                      id="textAreaExample1"
                      rows="4"
                      placeholder="Discription..."
                    ></textarea>
                  </div>
                </div>
                <!-- Date picker -->
                <div class="row">
                  <div
                    class="col-4"
                    style="padding-left: 0px; padding-top: 10px"
                  >
                    <p style="font-size: 12px">Due date:</p>
                  </div>
                  <div class="col-8" style="padding: 0px">
                    <input
                      id="startDate"
                      class="form-control"
                      type="date"
                      style="width: 100%; margin: auto"
                    />
                  </div>
                </div>

                <button class="btn btn-primary" style="width: 100%">+</button>
              </div>
            </div>
            
          </div>

          <div class="mt-5">
            <!-- due date -->
            <div class="mt-3">
              <span class="text2" style="text-style: strong">Due Date: </span>
            </div>
            <!-- phase footer -->
            <div>
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
.fas:hover {
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


 
