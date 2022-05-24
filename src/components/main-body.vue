<template>
  <div style="margin-top: 50px">
    <!-- <h2 class="mb-4">Sidebar #01</h2> -->

    <!-- <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.name }}
    </li>
  </ul> -->

    <p></p>
    <div style="display: inline-grid">
      <div class="cards" v-if="!projectClicked">

        <!-- insert data set heer (use looping :|) -->
        <div class="card card-1" v-for="todo in todos" :key="todo.id">
          <!-- 
              need to add fa icons
          <div class="card__icon"><i class="fas fa-bolt"></i></div>
          <p class="card__exit"><i class="fas fa-times"></i></p> 
          -->

          <h2 class="card__title">{{ todo.name }}</h2>

          <button @click="projectClicked = true"></button>
          <p class="card__apply">
            <a class="card__link" href="#">
              Apply Now <i class="fas fa-arrow-right"></i
            ></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "mainBody",
  props: ["name"],
  data() {
    return {
      todos: [],
      projectClicked: false,
      
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/todos");

      this.todos = res.data;
    } catch ($e) {
      console.log($e);
    }
  },
};
</script>