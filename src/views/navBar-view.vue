<template>
  <nav 
  class="navbar navbar-icon-top navbar-expand-lg navbar-dark nav-bar-custom" style="background-color:#6c63ff; position:fixed; width:100%; z-index:1000;top:0">
  <!-- <a class="navbar-brand" href="#">Navbar</a> -->
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->

  <div class="collapse navbar-collapse" id="navbarSupportedContent"  style="width:100%;">

  
    <ul class="navbar-nav mr-auto"> 
       <li class="nav-item active" style="color: white; margin:auto;">
        
      </li> 
        <li class="nav-item active">
        <a class="nav-link" href="#">

          <div class="dropdown" v-if="store.getters.getLogedInUser">
            <button class="btn btn-secondary dropdown-toggle active" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background-color: white; color:black">
              {{ store.getters.getLogedInUser.name }}
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

      
    





    <!-- <ul class="navbar-nav "> 
      <li class="nav-item">
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
      </li> 
    </ul>  -->
    <form class="form-inline my-2 my-lg-0">
        
    <button  class="btn btn-outline-success my-2 my-sm-0 search-btn" style="margin-right:10px; background-color: white; border: none;">
      <router-link :to="{ name: 'searchResults', query: {text: this.text}}" style="text-decoration: none; color:black;">Search</router-link>
      </button>
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search..." v-model="this.text">
    </form>
  </div>
</nav>
</template>

<script>
import { useStore } from 'vuex' 
export default {

  name: 'navBar',
  data(){
    return{
      store: useStore(),
      text: '',
      user: {}
    }
  },
  mounted(){
    this.user = this.store.getLogedInUser
    this.text=''
  }
  
}
</script>
