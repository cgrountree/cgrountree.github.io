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
          <p class="mt-4">Software Engineer</p>
          <p class="">nCino, Inc.</p>
          <p class="">May 2020 - Present</p>
        </div>
        <div class="column content">
          <div>
            <ul>
              <div>
                <li>Salesforce</li>
              </div>
              <div>
                <li>Apex</li>
              </div>
              <div>
                <li>xQuery</li>
              </div>
              <div>
                <li>SOQL</li>
              </div>
            </ul>
          </div>
        </div>

        <div class="column content is-half">
          <div>
            <ul>
              <div>
                <li>Maintaining and adding features to integrations for the nCino software</li>
              </div>
              <div>
                <li>Develop methods to query and structure data required for API calls</li>
              </div>
              <div>
                <li>Mapping data to required endpoints using xQuery and XSLT</li>
              </div>
            </ul>
          </div>
        </div>
      </div>


      <div class="block columns">
        <div class="column">
          <p class="mt-4">Software Engineer</p>
          <p>Toshiba Global Commerce Solutions</p>
          <p>October 2019 - April 2020</p>
        </div>
        
        <div class="column content">
          <div>
            <ul>
              <div>
                <li>Java (Spring framework)</li>
              </div>
              <div>
                <li>JavaScript (VueJs)</li>
              </div>
              <div>
                <li>OpenAPI</li>
              </div>
              <div>
                <li>MongoDB</li>
              </div>
              <div>
                <li>Docker</li>
              </div>
            </ul>
          </div>
        </div>

        <div class="column content is-half">
          <div>
            <ul>
              <div>
                <li>Implemented internationalization with i18n on a VueJS frontend</li>
              </div>
              <div>
                <li>Built RESTful API endpoints to specification with openAPI and Spring framework</li>
              </div>
              <div>
                <li>Built complex queries using MongoDB to retrieve datasets for use by the frontend</li>
              </div>
            </ul>
          </div>
        </div>
      </div>


      <div class="block columns">
        <div class="column">
          <p class="mt-4">Software Engineer Intern</p>
          <p>SunL</p>
          <p>Matsusaka, Mie Prefecture, Japan</p>
          <p>May 2018 - August 2018</p>
        </div>
        
        <div class="column content">
          <div>
            <ul>
              <div>
                <li>PHP (Laravel framework)</li>
              </div>
              <div>
                <li>HTML</li>
              </div>
              <div>
                <li>CSS</li>
              </div>
              <div>
                <li>Docker</li>
              </div>
            </ul>
          </div>
        </div>

        <div class="column content is-half">
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