<template>
<h3 style="margin-left:480px;margin-top:30px;">Marahel</h3>
  <form class="login" v-if="sigInOrUp == 'in'">
  <!-- Email input -->
  
  <div v-if=" store.getters.getLogInErrors !== ''" class="login-errors" style="margin-top:20px;">
    <p>{{  store.getters.getLogInErrors }}</p>
  </div>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control  form-control-lg" v-model="this.user.email"/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control  form-control-lg" v-model="this.user.password" required >
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input  form-control-lg " type="checkbox" value="test" v-model="user.rememberMe"/>
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <!-- <div class="col">
      
      <a href="#!">Forgot password?</a>
    </div> -->
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4" @click="signIn">Sign in</button>

  <!-- Register buttons -->
  <div class="text-center" >
    <p>Not a member? <a href="#" @click="sigInOrUp = 'up'">Register</a></p>
    <!-- <p>or sign up with:</p>
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
    </button> -->
  </div>
</form>

  <form class="register" v-if="sigInOrUp == 'up'">
  
                <div v-if=" store.getters.getLogInErrors !== ''" class="login-errors" style="margin-top:20px;">
                  <p>{{  store.getters.getLogInErrors }}</p>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" v-model="this.user.name" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" v-model="this.user.email"/>
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="this.user.password" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" v-model="this.user.password_confirmation"/>
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-primary btn-block mb-4" @click="signUp">Register</button>
                </div>

                <div class="text-center" >
                  <p>already have an acount? <a href="#" @click="sigInOrUp = 'in'">Login</a></p>

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
              name: '',
              email: '',
              password: '',
              password_confirmation: '',
              rememberMe: true,
            },
            sigInOrUp: 'in',
            

            
        }
    },
  methods: {
    signIn(e) {
      e.preventDefault();
      this.store.dispatch('logIn', this.user)
    },
    signUp(e) {
      e.preventDefault();
      this.store.dispatch('register', this.user)
    },
},

  mounted(){

  }
};
</script>

<style>
</style>