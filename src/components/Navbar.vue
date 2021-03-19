<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item has-text-primary">Cody Rountree</h1>
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span class="container"></span>
          <span class="container"></span>
          <span class="container"></span>
        </div>
      </div>
      <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <router-link class="navbar-item has-text-centered" to="/">about</router-link>
          <router-link class="navbar-item has-text-centered" to="/projects">projects</router-link>
          <router-link class="navbar-item has-text-centered" to="/cv">cv</router-link>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item has-text-centered" to="/contact">contact</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
import { mixin as clickaway } from 'vue3-click-away';
export default {
  name: "navbar",
  components: {},
  mixins: [ clickaway ],
  data() {
      return {showNav: false}
  },
  methods: {
  }
};
</script>

<style>
.router-link-exact-active {
  color: rgb(20, 148, 84) !important;
}
</style>
