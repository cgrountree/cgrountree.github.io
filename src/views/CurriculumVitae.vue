<template>
  <div class="block" />
  <div class="columns">
    <div class="box column container is-two-thirds">
      <p class="title is-3">Cody Rountree</p>
      <p class="subtitle is-4">Software Engineer</p>
      <div class="block" />
      <p class="title is-5">Experience</p>
      <div class="block columns">
        <div class="column">
          <p>Software Engineer</p>
          <p>nCino, Inc.</p>
        </div>
        <div class="column content is-two-thirds">
          <div>
            <ul>
              <div class="list-item">
                <li>Maintaining and adding features to integrations for the nCino software</li>
              </div>
              <div class="list-item">
                <li>Develop methods to query and structure data required for API calls</li>
              </div>
              <div class="list-item">
                <li>Mapping data to required endpoints using xQuery and XSLT</li>
              </div>
            </ul>
          </div>
        </div>
        <div class="column has-text-right">
          <p>May 2020 - Present</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cv",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
}
</style>