const hero = Vue.component("hero", {
  template: `
    <section class="hero is-small is-dark is-bold">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
                Barco case
            </h1>
            <h2 class="subtitle" style=" font-style:italic">
                additional notes
            </h2>
        </div>
    </div>
</section>
    `
});

const contentItems = Vue.component("content-item", {
  data: function() {
    return {
      hello: window.marked(
        `According to a video featuring Barco CEO:\n- Barco became agile and swift in delivering new products to market within short timeframes
      Integrate new companies such as joint ventures, subsidiaries and sales office across 15 countries.
      Cloud-based. User-friendly and incorporates feedback to be future ready.`
      )
    };
  },
  template: `
  <bulma-accordion initial-open-item="1" v-bind:dropdown="true">
  <bulma-accordion-item>
    <p slot="title">Implementation of SAP BusinessByDesign</p>
    <div v-html='hello' slot="content">
    </div>
    <a href='https://www.sap.com/assetdetail/2019/08/284d2e7b-5e7d-0010-87a3-c30de2ffd8ff.html'>Source</a>
  </bulma-accordion-item>
  <bulma-accordion-item>
    <p slot="title">Revamped CIO office</p>
    <div slot="content">
        Lorem ipsum dolor sit amet
    </div>
  </bulma-accordion-item>
  </bulma-accordion>
  `
});

const contents = Vue.component("contents", {
  components: {
    "content-items": contentItems
  },
  template: `
  <section class="section">
    <div class="columns">
  <div class="column">
  <h2 class="title is-4">Developments at Barco</h2>
    <content-items></content-items>
  </div>
  <div class="column">
    Second column
  </div>
</div>
</section>
`
});
