<template>
  <div class="header">
    <h1 class="name">Cody Rountree</h1>
    <nav>
      <router-link class="link" to="/">home</router-link>
      <router-link class="link" to="/projects">projects</router-link>
      <router-link class="link" to="/cv">cv</router-link>
      <router-link class="link" to="/contact">contact</router-link>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Noto Sans CJK SC", "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
