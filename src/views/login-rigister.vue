<template>
  <form>
  <!-- Email input -->
  <div v-if=" store.getters.getLogInErrors !== ''" class="errors" style="margin-top:20px;">
    <p>{{  store.getters.getLogInErrors }}</p>
  </div>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" v-model="this.user.email"/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" v-model="this.user.password" required >
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <!-- Submit button -->
  <button type="button" class="btn btn-primary btn-block mb-4" @click="signIn">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</template>

<script>


import { useStore } from "vuex";

export default {

    
    data(){
        return {
          store: useStore(),
            
            user: {
              email: '',
              password: ''
            },
            
        }
    },
  methods: {
    signIn(e) {
      e.preventDefault();

      
      
      this.store.dispatch('logIn', this.user)

      
      // this.store.commit('logIn', )
      // this.store.logIn(this.user);
      // console.log(this.getLogedInUser)
      // console.log(this.logInErrors)
      
    },

},
computed:{
  getLogedInUser(){
    return this.$store.getters.getLogedInUser;
    },
  },
  mounted(){

    // this.errors = []
  }
};
</script>

<style>
</style>