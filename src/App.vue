<template>
  <sideBar />

  <div id="content" class="p-4 p-md-5">
    <navBar @name="displayName"/>
    <mainBody :name="name"/>
  </div>

</template>

<script>


import sideBar from "./components/side-bar.vue";
import navBar from "./components/nav-bar.vue";
import mainBody from "./components/main-body.vue";

export default {
  name: "App",
  
  data(){
    return {
      name: ''
    }
  },
  
  components: { sideBar, navBar, mainBody },
  methods: {
    displayName(value){
      this.name = value
    }
  }
  
};
</script>

<style>
</style>
