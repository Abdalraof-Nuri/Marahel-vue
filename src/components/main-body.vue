<template>
  <h2 class="mb-4">Sidebar #01</h2>
 
  <ul>
    <li v-for="todo in todos" :key="todo.id" >
      {{ todo.name }}
    </li>
  </ul>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</template>

<script>

import axios from 'axios';

export default {
  name: 'mainBody',
  data(){
    return{
      todos: []
    }
  },
  async created(){
    try{
      
      const res = await axios.get("http://localhost:3000/todos")

      this.todos = res.data;
    
    }
    catch($e){
      console.log($e)
    }
  }
};
</script>