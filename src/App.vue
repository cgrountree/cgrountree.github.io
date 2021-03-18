<template>
  <div class="mt-2 mx-3">
    <Navbar />
    <div class="mx-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>

<style>
.router-link-exact-active {
  color: rgb(21, 167, 142) !important;
}
</style>
