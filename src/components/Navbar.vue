<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item has-text-primary">Cody Rountree 1</h1>
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
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
import { mixin as clickaway } from 'vue3-click-away';
export default {
  name: "navbar",
  components: {},
  mixins: [ clickaway ],
  data() {
      return {showNav: false}
  },
  methods: {
    onClickAway(e) {
        if (e.target != this.$refs.navbarMenu) {
            this.showNav = false;
        }
    }
  }
};
</script>

<style>
.router-link-exact-active {
  color: rgb(20, 148, 84) !important;
}
</style>
