<template>

  <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark nav-bar-custom" style="position:fixed; width:100%;">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent"  style="width:100%;">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fa-solid fa-right-from-bracket"></i>
          SignOut
          <span class="sr-only">(current)</span>
          </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-danger">11</span>
          </i>
          Link
        </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fa fa-home"></i>
          Home
          <span class="sr-only">(current)</span>
          </a>
      </li>


      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-warning">11</span>
          </i>
          Disabled
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fa fa-envelope-o">
            <span class="badge badge-primary">11</span>
          </i>
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
    </ul>
    <ul class="navbar-nav ">
      <!-- <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-bell">
            <span class="badge badge-info">11</span>
          </i>
          Test
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-globe">
            <span class="badge badge-success">11</span>
          </i>
          Test
        </a>
      </li> -->
    </ul>
    <form class="form-inline my-2 my-lg-0">
        
    <button  class="btn btn-outline-success my-2 my-sm-0" style="margin-right:10px;">
      Search
      <!-- <router-link :to="{ name: 'searchResults', query: {cat: this.catSelected, text: this.text}}">searchResults</router-link> -->
      </button>
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search..." v-model="this.text">
      
        By:
      
      <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
          {{ this.catSelected }}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="this.catSelected = 'all' ">All</a>
          <a class="dropdown-item" href="#" @click="this.catSelected = 'project' ">Project</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#" @click="this.catSelected = 'phase' ">Phase</a>
          <a class="dropdown-item" href="#" @click="this.catSelected = 'task' ">Task</a>
        </div>
        </div>
    </form>
  </div>
</nav>


</template>

<script>

//import router from '../router/index.js'

export default {

  data() {
    return {
      query: 'all',
      
      catSelected: 'All'
    }
  },
  methods: {
  }
};
</script>

<style>
</style>