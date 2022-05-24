<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="width:60%; position:fixed; z-index: 100;">
    <div class="container-fluid">

      <button 
        type="button" 
        id="sidebarCollapse" 

        data-toggle="collapse"
        data-target="#sidebar"

        class="btn btn-primary">
        <i class="fa fa-bars"></i>
        <span class="sr-only">Toggle Menu</span>
      </button>

      <button
        class="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item" @click="displayName()">
            <a class="nav-link" href="#">display</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navBar',

  methods: {
    // API call goes here, data set insted of jweda
    displayName(){
      this.$emit('name', 'jweda')
  }
  }
  
  };
</script>
