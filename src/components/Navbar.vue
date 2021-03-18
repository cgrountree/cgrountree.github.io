<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item has-text-primary">Cody Rountree</h1>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">about</router-link>
          <router-link class="navbar-item" to="/projects">projects</router-link>
          <router-link class="navbar-item" to="/cv">cv</router-link>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/contact">contact</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "navbar",
  components: {},
};
</script>

<style>
.router-link-exact-active {
  color: rgb(20, 148, 84) !important;
}
</style>
