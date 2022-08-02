<template>
  <nav
    class="navbar navbar-icon-top navbar-expand-lg navbar-dark nav-bar-custom"
    style="
      background-color: #343434;
      position: fixed;
      width: 100%;
      height: 80px;
      z-index: 1000;
      top: 0;
    "
  >

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
      style="width: 100%"
    >
    <h1 style="
      color: #266C8E;
    ">M</h1>
    <h3 style="
      margin-right: 20px;
      color: white;
    ">arahel</h3>
  <form class="form-inline" style="
  margin-right: 600px;">
        <button
          class="btn btn-outline-success my-2 my-sm-0 search-btn"
          style="margin-right: 10px; 
          background-color: white; 
          border: none;
          border-radius: 50px; 
          border-style: none;
          background: #71706C;
          "
        >
          <router-link
            :to="{ name: 'searchResults', query: { text: this.text } }"
            style="
            text-decoration: none;
            color: black;
            
            "
            ><i class="fa fa-search"></i></router-link
          >
        </button>
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search..."
          v-model="this.text"
          style="
          border-radius: 50px;
          border-style: none;
          background: #71706C;
          
          "
        />
      </form>
      <ul class="navbar-nav mr-auto">
        

        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa fa-envelope-o">
              <span class="badge badge-danger">11</span>
            </i>
            <p></p>
          </a>
        </li>
        
        <router-link
          :to="{ name: 'home' }"
          style="text-decoration: none; color: white"
        >
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
        </router-link>
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <div class="dropdown" v-if="store.getters.getLogedInUser">
              <button
                class="btn btn-secondary dropdown-toggle active"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="background-color: white; color: black"
              >
                {{ store.getters.getLogedInUser.name }}
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <router-link
                  :to="{ name: 'logout' }"
                  style="text-decoration: none; color: white"
                >
                  <a class="dropdown-item" href="#"
                    >Logout &nbsp;<i class="fa-solid fa-right-from-bracket"></i
                  ></a>
                </router-link>

                <!-- <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a> -->
              </div>
            </div>

            <span class="sr-only">(current)</span>
          </a>
        </li>

      </ul>


    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "navBar",
  data() {
    return {
      store: useStore(),
      text: "",
      user: {},
    };
  },
  mounted() {
    this.user = this.store.getLogedInUser;
    this.text = "";
  },
};
</script>
<style scoped>
::placeholder {
  color: #424242;
  opacity: 1; /* Firefox */
}

</style>
