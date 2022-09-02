<template>
  <navBar />

  <div class="container">
    <h2 style="color: black; margin-top: 150px">
      {{ store.getters.getProjectName }}
    </h2>
    <p>{{ store.getters.getProject.description }}</p>

    <!-- should show a model of Teams -->
    <button
      class="button-4"
      role="button"
      style="float: right; margin: 5px"
      data-toggle="modal"
      data-target="#TeamsModal"
    >
      Teams<i style="margin: 5px" class="fa fa-users" aria-hidden="true"></i>
    </button>
    <div
      class="modal fade"
      id="TeamsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="TeamsModalLable"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="TeamsModalLable">Teams</h5>
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
            <div class="">
              <div class="card-header">This Project Teams</div>
              <div class="card-body">
                <div
                  v-for="team in store.getters.getTeams"
                  :key="team.id"
                  class="row hidden-md-up container"
                >
                  <div class="col-md-5 card-container">
                    <div class="card" style="width: 100%">
                      <div class="card-header">{{ team.name }}</div>
                      <div class="card-body">
                        <ul style="list-style-type: none">
                          <li>member 1</li>
                          <li>member 2</li>
                          <li>member 3</li>
                          <li>member 4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cardfooter">feet</div>
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
            <button type="button" class="btn btn-primary">Add Team</button>
          </div>
        </div>
      </div>
    </div>

    <!-- should show a model of project edit form -->

    <button
      class="button-4"
      role="button"
      style="float: right; margin: 5px"
      data-toggle="modal"
      data-target="#editProjectModal"
      @click="loadEditProjectModal"
    >
      Edit Project <i style="margin: 5px" class="fas fa-edit"></i>
    </button>
    <div
      class="modal fade"
      id="editProjectModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editProjectModalLable"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProjectModalLable">Edit Project</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="">
            <form>
              <div class="form-group"></div>
              <label>Project Name: </label>
              <input
                style="font-weight: bold"
                v-model="project.name"
                class="form-control"
                type="text"
                name="ProjectName"
                id=""
                placeholder="Project Name"
              />
              <label>Project description: </label>
              <input
                style="font-weight: bold"
                v-model="project.description"
                class="form-control"
                type="text"
                name="ProjectName"
                id=""
                placeholder="Project description"
              />
              <label>Project dueDate: </label>
              <input
                v-model="project.due_date"
                class="form-control"
                type="datetime-local"
                id="due-date"
                name="due-date"
                style="width: 70%; margin: auto"
              />
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="editProject"
              data-dismiss="modal"
              type="button"
              class="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- button to delete the projects -->
    <button
      class="button-4"
      role="button"
      style="float: right; margin: 5px"
      data-toggle="modal"
      data-target="#deleteProjectModal"
    >
      Delete Project <i style="margin: 5px" class="fas fa-trash-alt"></i>
    </button>
    <div
      class="modal fade"
      id="deleteProjectModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteProjectModalLable"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteProjectModalLable">Alert</h5>
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
            <h5>Are You Sure You Want To Delete This Project?</h5>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              NO
            </button>
            <button
              data-dismiss="modal"
              type="button"
              class="btn btn-primary"
              @click="bringDate()"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- add new Phase -->
    <button
      class="button-4"
      role="button"
      style="float: right; margin: 5px"
      data-toggle="modal"
      data-target="#addPhaseModal"
    >
      Add Phase <i style="margin: 5px" class="fas fa-plus-square"></i>
    </button>
    <div
      class="modal fade"
      id="addPhaseModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addPhaseModalLable"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addPhaseModalLable">Add New Phase</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="">
            <h6
              v-if="errors.message != ''"
              style="background: red; border-radius: 15px; height: 20px"
            >
              {{ errors.message }}
            </h6>

            <form>
              <div class="form-group"></div>
              <label>Phase Name: </label>
              <input
                v-model="newPhase.name"
                class="form-control"
                type="text"
                name="PhaseName"
                id=""
                placeholder="Phase Name"
              />
              <label>Phase description: </label>
              <input
                v-model="newPhase.description"
                class="form-control"
                type="text"
                name="PhaseName"
                id=""
                placeholder="Phase description"
              />
              <label>Phase dueDate: </label>
              <input
                v-model="newPhase.due_date"
                class="form-control"
                type="datetime-local"
                id="due-date"
                name="due-date"
                style="width: 70%; margin: auto"
              />
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="addNewPhase()"
              type="button"
              class="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End of board info bar -->

  <!-- container -->

  <div class="row hidden-md-up container">
    <div
      class="col-md-4 card-container"
      v-for="Phases in store.getters.getPhases"
      :key="Phases.id"
    >
      <div class="card p-3 mb-3">
        <div
          class="d-flex justify-content-between card-header"
          style="border-radius: 0px"
        >
          <div class="d-flex flex-row align-items-center" style="">
            <!-- phase Title -->

            <div class="ms-2 c-details" style="">
              <h4 style="font-weight: bold" class="mb-0">{{ Phases.name }}</h4>
              <h4 class="mb-0">{{ Phases.description }}</h4>

              <span class="text2">
                <span style="color: black"> Started at:</span>
              </span>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <!-- <div>
            <form class="searchForm" v-on:submit.prevent="submitSearch">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search..."
                @keyup="submitSearch"
                style="
                  margin-bottom: 10px;
                  width: 100%;

                  border: none;
                  border-bottom: solid 1px black;
                "
              />
              <span
                v-show="searchQuery"
                class="removeInput"
                @click="removeSearchQuery"
                >+</span
              >
            </form>
          </div> -->
          <!-- Tasks list -->

          <div
            style="
              height: 250px;

              overflow-x: hidden;
              overflow-y: auto;
            "
          >
            <!-- Tasks go here -->

            <div
              v-for="Tasks in store.getters.getTasks"
              :key="Tasks.id"
              class="task"
              style=""
            >
              <ul>
                <li
                  v-if="Phases.id === Tasks.phase_id"
                  style="
                    list-style: none;
                    padding: 10px;
                    background-color: #3f3d48;
                    box-shadow: rgba(0, 0, 0, 0.05) 10px 6px 24px 0px,
                      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                    border-radius: 15px;
                  "
                >
                  <div class="form-check">
                    <button
                      class="button-4"
                      role="button"
                      style="float: right; margin: 0px"
                      data-toggle="modal"
                      data-target="#deleteTaskModal"
                      @click="this.TID = Tasks.id"
                    >
                      <i style="margin: 0px" class="fas fa-times"></i>
                    </button>

                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <h6 style="color: white">{{ Tasks.name }}</h6>
                    </label>

                    <div style="border-top: solid 1px; border-color: #dee1d6">
                      <p style="font-size: 13px; color: white">
                        {{ Tasks.description }}
                      </p>
                      <p style="font-size: 13px; color: white">
                        {{ Tasks.due_date }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="task" style="">
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
            </div> -->
            <!-- <div class="task" style="">
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
            </div> -->

            <!-- create new task form...-->

            <div
              class="task new-task"
              style="
                border: 1px solid #ccc !important;
                border-radius: 10px;
                padding: 10px;
              "
            >
              <label for="startDate">Want to create a new task?</label>
              <button
                type="button"
                role="button"
                class="btn btn-primary"
                style="width: 75%"
                data-toggle="modal"
                data-target="#addTask"
                @click="this.PID = Phases.id"
              >
                +
              </button>
            </div>
          </div>

          <div class="mt-5">
            <!-- button to delete the phase -->
            <button
              type="button"
              role="button"
              class="btn btn-primary"
              style="width: 75%"
              data-toggle="modal"
              data-target="#deletePhaseModal"
              @click="this.PID = Phases.id"
            >
              Delete Phase
            </button>

            <!-- due date -->
            <div class="mt-3">
              <span class="text2" style="text-style: strong">Due Date: </span>
              <p>{{ Phases.due_date }}</p>
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
  <!-- the delete Task modal -->
  <div
    class="modal fade"
    id="deleteTaskModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="deleteTaskModalLable"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteTaskModalLable">Alert</h5>
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
          <h5>Are You Sure You Want To Delete This Task?</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            NO
          </button>
          <button
            data-dismiss="modal"
            type="button"
            class="btn btn-primary"
            @click="DeleteTa(this.TID)"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- the delete phase modal -->
  <div
    class="modal fade"
    id="deletePhaseModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="deletePhaseModalLable"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deletePhaseModalLable">Alert</h5>
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
          <h5>Are You Sure You Want To Delete This Phase?</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            NO
          </button>
          <button
            data-dismiss="modal"
            type="button"
            class="btn btn-primary"
            @click="Deleteph(this.PID)"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- new task modal -->

  <div
    class="modal fade"
    id="addTask"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addTaskLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addTaskLabel">Add a new Task</h5>
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
            <label for="input-project-name">Task name:</label>
            <input
              type="text"
              class="form-control"
              id="input-project-name"
              placeholder="Enter Task name..."
              v-model="this.newTask.name"
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
              v-model="this.newTask.description"
            >
            </textarea>
          </div>

          <div class="form-group form-check">
            <label for="due-date">Pick a due date: &ensp;</label>
            <input
              class="form-control"
              type="datetime-local"
              id="due-date"
              name="due-date"
              style="width: 70%; margin: auto"
              v-model="this.newTask.due_date"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button class="btn btn-primary" @click="addNewTask(this.PID)">
            Save changes
          </button>
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
      errors: {
        message: "",
      },
      project: {
        name: "",
      },
      DeleteProject: {
        project_id: "",
        deleteDate: "",
      },
      DeletePhase: {
        phase_id: "",
        deleteDate: "",
      },
      DelTask: 0,

      newPhase: {
        name: "",
        description: "",
        due_date: "",
        projectId: 0,
      },
      newTask: {
        project_id: 0,
        name: "",
        description: "",
        due_date: "",
        phaseId: 0,
      },
      PID: 0,
      TID: 0,
      //  proj:this.store.getters.getProject,
    };
  },
  methods: {
    bringDate() {
      console.log(new Date().toLocaleString());
      this.DeleteProject.project_id = parseInt(this.$route.query.id);
      this.DeleteProject.deleteDate = new Date().toLocaleString();
      this.store.dispatch("deleteproject", this.DeleteProject);
    },
    Deleteph(PID) {
      console.log(new Date().toLocaleString());
      this.DeletePhase.phase_id = PID;
      this.DeletePhase.deleteDate = new Date().toLocaleString();
      this.store.dispatch("deletephase", this.DeletePhase);
    },
    DeleteTa(TID) {
      this.DelTask = TID;
      this.store.dispatch("deletetask", this.DelTask);
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    addNewPhase() {
      this.errors.message = "";
      if (
        this.newPhase.name == "" ||
        this.newPhase.description == "" ||
        this.newPhase.due_date == ""
      ) {
        this.errors.message = "All Fields are required";
        // alert("all fields are required");
      } else {
        this.newPhase.projectId = parseInt(this.$route.query.id);
        this.store.dispatch("addPhase", this.newPhase);
      }
    },

    addNewTask(ID) {
      console.log(
        this.newTask.name,
        this.newTask.description,
        this.newTask.due_date
      );
      this.errors.message = "";
      if (
        this.newTask.name == "" ||
        this.newTask.description == "" ||
        this.newTask.due_date == ""
      ) {
        // this.errors.message = "All Fields are required";
        alert("all fields are required");
      } else {
        this.newTask.project_id = parseInt(this.$route.query.id);
        this.newTask.phaseId = ID;
        this.store.dispatch("addTask", this.newTask);
      }
    },
    loadEditProjectModal() {
      this.project = this.store.getters.getProject;
      console.log(this.project);
    },
    editProject() {
      this.errors.message = "";
      if (
        this.project.name == "" ||
        this.project.description == "" ||
        this.project.due_date == ""
      ) {
        this.errors.message = "all Fields are required";
      } else {
        this.project.projectId = parseInt(this.$route.query.id);
        this.store.dispatch("editProject", this.project);
      }
    },
  },

  mounted() {
    this.store.dispatch("bringProject", {
      project_id: parseInt(this.$route.query.id),
    });

    // document.addEventListener("DOMContentLoaded", function () {
    //   // INSERT CODE HERE
    //   // get box count
    //   var count = 0;
    //   var checked = 0;
    //   function countBoxes() {
    //     count = $("input[type='checkbox']").length;
    //     console.log(count);
    //   }
    //   countBoxes();
    //   $(":checkbox").click(countBoxes);
    //   function countChecked() {
    //     checked = $("input:checked").length;

    //     var percentage = parseInt((checked / count) * 100, 10);
    //     $(".progressbar-bar").progressbar({
    //       value: percentage,
    //     });
    //     $(".progressbar-label").text(percentage + "%");
    //   }
    //   countChecked();
    //   $(":checkbox").click(countChecked);
    // });

    // this.project = this.store.getters.getproject;
    // console.log(this.project);
  },
  computed: {
    getProjectName() {
      return this.project.name;
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
.button-4 {
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.button-4:hover {
  background-color: #f3f4f6;
  text-decoration: none;
  transition-duration: 0.1s;
}
</style>


 
