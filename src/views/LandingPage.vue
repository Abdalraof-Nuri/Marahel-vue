<template>
  <!-- Start Landing Page -->

  <div class="landing-page">
    <div class="container">
      <div class="header-area">
        <div class="logo">
          <b><span style="color: #6c63ff">M</span>ARAHEL</b>
        </div>
        <ul class="links">
          <!-- <li>Home</li>
        <li>About Us</li>
        <li>Work</li>
        <li>Info</li> -->
          <li>
            <router-link style="text-decoration: none" to="/login">
              Get Started
            </router-link>
          </li>
        </ul>
      </div>
      <div class="info">
        <h1>Looking For Inspiration</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odit nihil ullam nesciunt quidem iste, Repellendus odit nihil
        </p>
      </div>
      <div class="image">
        <!-- <a href='https://www.freepik.com/vectors/economy'>Economy vector created by pikisuperstar - www.freepik.com</a> -->
        <img
          style="border-radius: 1em"
          src="https://i.postimg.cc/TPBJ3kjV/4062223.jpg"
        />
      </div>
      <div class="clearfix"></div>
    </div>
  </div>

  <!-- End Landing Page -->
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
}

.container {
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
}

/* Start Landing Page */

.landing-page {
  position: relative;
  background-color: #fff;
}

.landing-page .header-area {
  display: flex;
  padding: 25px 0 0;
  position: relative;
}

.landing-page .header-area .logo {
  text-transform: uppercase;
  font-style: italic;
  margin-top: 10px;
  font-size: 19px;
  width: 300px;
  color: #5d5d5d;
}

.landing-page .header-area .links {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: right;
}

.landing-page .header-area .links li {
  display: inline-block;
  margin-left: 30px;
  color: #5d5d5d;
  cursor: pointer;
}

.landing-page .header-area .links li:last-child {
  border: 0;
  border-radius: 20px;
  padding: 10px 18px;
  color: rgb(126, 27, 27);
  background-color: #3f319c;
}

.landing-page .info {
  width: 35%;
  float: left;
  margin-top: 130px;
}

.landing-page .info h1 {
  font-size: 44px;
  margin: 0 0 20px;
  line-height: 1.4;
  color: #5d5d5d;
}

.landing-page .info p {
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  color: #5d5d5d;
}

.landing-page .info button {
  border: 0;
  border-radius: 20px;
  padding: 12px 30px;
  margin-top: 30px;
  cursor: pointer;
  color: #fff;
  background-color: #6c63ff;
}

.landing-page .image {
  width: 50%;
  float: right;
  margin-top: 35px;
}

.landing-page .image img {
  max-width: 100%;
}

.clearfix {
  clear: both;
}
.landing-page .links a {
  text-decoration: none;
  color: white;
}

/* End Landing Page */
</style>