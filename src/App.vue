<template>


  <nav 
  class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark nav-bar-custom" style="position:fixed; width:100%; z-index:1000;">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent"  style="width:100%;">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" style="color: white; margin:auto;">
        
      </li>
        <li class="nav-item active">
        <a class="nav-link" href="#">

          <div class="dropdown" v-if="this.getUserName" >
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{this.getUserName}} 
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <router-link :to="{ name: 'logout'}" style="text-decoration: none; color:white;">
                 <a class="dropdown-item" href="#">Logout &nbsp;<i class="fa-solid fa-right-from-bracket"></i></a>
              </router-link>
              <!-- <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a> -->
            </div>
          </div>
          
          <span class="sr-only">(current)</span>
          </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-envelope-o">
            <span class="badge badge-danger">11</span>
          </i>
          <p ></p>
          
        </a>
      </li>
      <router-link :to="{ name: 'home'}" style="text-decoration: none; color:white;">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <i class="fa fa-home"></i>
            Home
            <span class="sr-only">(current)</span>
            </a>
        </li>
      </router-link>


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
        
    <button  class="btn btn-outline-success my-2 my-sm-0 search-btn" style="margin-right:10px; ">
      <router-link :to="{ name: 'searchResults', query: {text: this.text}}" style="text-decoration: none; color:white;">Search</router-link>
      </button>
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search..." v-model="this.text">
    </form>
  </div>
</nav>
  
  

  
  <div class="container-fluid" style=" margin-top:80px;">
    <router-view :key="this.$route.query.text"/>
    <!-- <h1>{{ $store.state.title }}</h1> -->
  </div>
</template>
<script>

import { useStore } from "vuex";
import cookie from 'vue-cookies'

export default{
  
  
  data(){
    return {
      user: cookie.get('user'),
      store: useStore(),
      text: '',
      
    }
  },
  computed: {
    getUserName(){
      if(cookie.get("user")){
        return cookie.get("user").name
      }else{
        return ''
      }

    }
  },
  methods: {},

  beforeCreate() {
      this.$route.query.text = ""
  },
  created(){
    
    console.log(this.store.state.title)
  },
   watch: {

  }
  
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
