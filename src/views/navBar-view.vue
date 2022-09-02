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
      <h1 style="color: #266c8e">M</h1>
      <h3 style="margin-right: 20px; color: white">arahel</h3>
      <form class="form-inline" style="margin-right: 600px">
        <button
          class="btn btn-outline-success my-2 my-sm-0 search-btn"
          style="
            margin-right: 10px;
            background-color: white;
            border: none;
            border-radius: 50px;
            border-style: none;
            background: #71706c;
          "
        >
          <router-link
            :to="{ name: 'searchResults', query: { text: this.text } }"
            style="text-decoration: none; color: black"
            ><i class="fa fa-search"></i
          ></router-link>
        </button>
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search..."
          v-model="this.text"
          style="border-radius: 50px; border-style: none; background: #71706c"
        />
      </form>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <div class="dropleft">
            ><i
              class="fa fa-globe ropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="font-size: 1.5em; margin-top: 5px; color: white"
            ></i>

            <div v-if="this.notifications" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div
                class="dropdown-item"
                v-for="notification in this.notifications"
                :key="notification.id"
              >
                <p>{{ notification.message }}</p>

                <div style="margin-left:200px;">
                  <a href="" style="font-size: 0.78em;">Accept</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="" style="font-size: 0.78em;">Refuse</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/chat" style="text-decoration: none !important">
              <i
                class="fa fa-envelope-o"
                style="font-size: 1.5em; margin-top: 5px; color: white"
              >
                <!-- <span class="badge badge-danger">11</span> -->
              </i>
            </router-link>
            <p></p>
          </a>
        </li>

        <router-link
          :to="{ name: 'home' }"
          style="text-decoration: none; color: white"
        >
          <li class="nav-item active" style="margin-top: 5px">
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
import axios from "axios";
import cookie from "vue-cookies";

import Echo from "laravel-echo";
window.Pusher = require("pusher-js");
window.Echo = new Echo({
  app_id: "1469020",
  // host: "http://127.0.0.1:8000",
  broadcaster: "pusher",
  // authEndpoint: "http://127.0.0.1:8000",
  // forceTLS: false,
  // enabledTransports: ['ws', 'wss'],
  key: "9aeb2e0bfc2bcb49bb2f",
  cluster: "eu",
  encrypted: true,
});

export default {
  name: "navBar",
  data() {
    return {
      store: useStore(),
      text: "",
      user: {},
      notifications: {},
    };
  },
  async mounted() {
    this.user = this.store.getLogedInUser;
    this.text = "";
    window.Echo.channel("notification") //Should be Channel Name
      .listen("NotificationSent", (e) => {
        console.log(e.notification);
        this.notifications.push(e);
      });

    
  },
  async created() {
    await axios
      .get("http://127.0.0.1:8000/api/notification/getNotifications", {
        headers: { Authorization: "Bearer " + cookie.get("token") },
      })
      .then((response) => {
        this.notifications = response.data;
        console.log(this.notifications);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
::placeholder {
  color: #424242;
  opacity: 1; /* Firefox */
}
</style>
