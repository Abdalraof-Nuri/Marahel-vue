<template>
  <sideBar />

  <div id="content" class="p-4 p-md-5">
    <navBar />
    <mainBody />
  </div>

</template>

<script>


import sideBar from "./components/side-bar.vue";
import navBar from "./components/nav-bar.vue";
import mainBody from "./components/main-body.vue";

export default {
  name: "App",
  components: { sideBar, navBar, mainBody },

  
};
</script>

<style>
</style>
