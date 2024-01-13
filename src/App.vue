<template>
  <div class="container">
    <div class="box">
      <ul class="ul_li">
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/home">Post Data</router-link></li>
        <li><router-link to="/get-blog">Get Data</router-link></li>
      </ul>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.ul_li li {
    display: inline;
    list-style: none;
    padding: 10px;
}
ul.ul_li li a {
    text-decoration: none;
    color: crimson;
    font-size: 19px;
}
.box img {
    width: 100px;
}
</style>
