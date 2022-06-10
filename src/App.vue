<template>


  <div>
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

  methods: {},
  beforeCreate() {
      if(this.$route.query.text){
        this.$route.query.text = ""
      }
  },


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
