<template>
  <h1>Cody Rountree</h1>
  <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="/projects">projects</router-link> |
      <router-link to="/cv">cv</router-link> |
      <router-link to="/contact">contact</router-link> 
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #81ac91;
}
:root {
    --background: #1d1d23;
}
body {
    background-color: var(--background) !important;
}
</style>
