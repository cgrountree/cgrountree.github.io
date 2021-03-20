<template>
  <div class="block" />
  <div class="columns">
    <div class="box column container is-three-fourths">
      <div class="section has-text-centered">
        <p class="title is-1">Cody Rountree</p>
        <p class="subtitle is-4">Software Engineer</p>
      </div>

      <div class="section has-text-centered">
        <p class="title is-2 has-text-primary">Experience</p>

        <div class="columns">
          <div class="column">
            <p class="mt-4 title is-5">Software Engineer</p>
            <p class="subtitle is-6">nCino, Inc. <br />Wilmington, North Carolina, USA</p>
          </div>
        </div>
        <div class="subtitle is-6">
          <span>Salesforce |</span>
          <span> Apex |</span>
          <span> xQuery |</span>
          <span> SOQL</span>
        </div>
        <div>
          <ul>
            <div>
              <li>
                Maintaining and adding features to integrations for the nCino
                software
              </li>
            </div>
            <div>
              <li>
                Develop methods to query and structure data required for API
                calls
              </li>
            </div>
            <div>
              <li>Mapping data to required endpoints using xQuery and XSLT</li>
            </div>
          </ul>
        </div>

        <div class="columns">
          <div class="column">
            <p class="mt-6 title is-5">Software Engineer</p>
            <p class="subtitle is-6">Toshiba Global Commerce Solutions <br />Durham, North Carolina, USA</p>
          </div>
        </div>
        <div class="subtitle is-6">
          <span>Java (Spring framework) |</span>
          <span> JavaScript (VueJs) |</span>
          <span> OpenAPI |</span>
          <span> MongoDB |</span>
          <span> Docker</span>
        </div>
        <div>
          <ul>
            <div>
              <li>
                Implemented internationalization with i18n on a VueJS frontend
              </li>
            </div>
            <div>
              <li>
                Built RESTful API endpoints to specification with openAPI and
                Spring
              </li>
            </div>
            <div>
              <li>Built complex queries using MongoDB to retrieve data</li>
            </div>
          </ul>
        </div>

        <div class="columns">
          <div class="column">
            <p class="mt-6 title is-5">Software Engineer Intern</p>
            <p class="subtitle is-6">
              SunL <br />Matsusaka, Mie Prefecture, Japan
            </p>
          </div>
        </div>
        <div class="subtitle is-6">
          <span>PHP (Laravel framework) |</span>
          <span> HTML |</span>
          <span> CSS |</span>
          <span> MongoDB |</span>
          <span> Docker</span>
        </div>
        <div>
          <ul>
            <div>
              <li>Fixed bugs in PHP methods in the Laravel Framework</li>
            </div>
            <div>
              <li>Implemented visual redesigns on webapp components</li>
            </div>
            <div>
              <li>Built webpages for local government</li>
            </div>
          </ul>
        </div>
      </div>

      <div class="section has-text-centered">
        <p class="title is-4 has-text-primary">Education</p>
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
  list-style-position: inside !important;
}
</style>