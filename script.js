const hero = Vue.component("hero", {
  template: `
    <section class="hero is-small is-dark is-bold">
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
                Barco case note
            </h1>
            <h2 class="subtitle" style=" font-style:italic">
                additional notes
            </h2>
        </div>
    </div>
</section>
    `
});

const contentItems1 = Vue.component("content-item", {
  data: function() {
    return {
      erpImpact: window.marked(
        `According to a [video featuring Barco CEO](https://www.sap.com/assetdetail/2019/08/284d2e7b-5e7d-0010-87a3-c30de2ffd8ff.html):
        \n- Barco became agile in delivering new products to market
        \n- Integrated new companies such as joint ventures, subsidiaries and sales offices across 15 countries
        \n- Furthermore, the cloud-based platform is both user-friendly and adaptable to changes based on user feedback
        `
      ),
      processExcellence: window.marked(
        `According to an [interview with Barco VP Quality and Process Excellence Joost Claerbout](https://books.google.com.sg/books?id=wvS7BAAAQBAJ&pg=PT19&lpg=PT19&dq=Joost+Claerbout+interview#v=onepage&q=Joost%20Claerbout%20interview&f=false), Barco has:
        \n- established a team of internal process consultants to partner business owners & managers in handling change initiatives
        \n- relied on this team to facilitate cross-functional exchange and standardisation
        \n- staffed this team with high potential employees from different functional areas
        \n- shifted from external consultants to this team
        `
      ),
      sapVim: window.marked(
        `A slidedeck by [Barco's consultants on SAP Vim (automated processing of invoices)](https://www.slideshare.net/DelawareConsulting/gaining-efficiency-at-barco-with-sap-vendor-invoice-management) highlights:
        \n- how SAP Vim improved operational efficiency, transparency and reduced costs
        \n- by implementing paperless processing (eg. mandatory scanning of all invoices), reducing data entry / typo errors, routing invoice approval through ERP system, end-to-end monitoring and using out-of-the-box processes to reduce custom development costs
        \n- how implementing SAP Vim requires cross-functional exchange with other departments like logistics, reporting etc
        \n- how SAP Vim further impacts the business by facilitating better financial forecasting
        `
      )
    };
  },
  template: `
  <bulma-accordion initial-open-item="1" v-bind:dropdown="true">
  <bulma-accordion-item>
    <p slot="title">Implemented SAP BusinessByDesign</p>
    <div v-html='erpImpact' slot="content">
    </div>
  </bulma-accordion-item>
  <bulma-accordion-item>
    <p slot="title">Investing in Process Excellence</p>
    <div v-html='processExcellence' slot="content">
  </bulma-accordion-item>
  <bulma-accordion-item>
    <p slot="title">In depth look into adoption of SAP Vim</p>
    <div v-html='sapVim' slot="content">
  </bulma-accordion-item>
  </bulma-accordion>
  `
});

const contentItems2 = Vue.component("content-item", {
  data: function() {
    return {
      bizCaseBarco: window.marked(
        `Barco's digital transformation was guided by a [business case approach](https://pdfs.semanticscholar.org/fb6e/5f4da4740e63c02bcc5399dcfee2ed62ab0e.pdf) which provides for:
        \n- benchmarking / assessment of benefits and costs
        \n![benefits and costs](https://d3i71xaburhd42.cloudfront.net/fb6e5f4da4740e63c02bcc5399dcfee2ed62ab0e/5-Figure3-1.png)
        \n- a roadmap exercise - series of workshops engaging business process owners to redesign business processes based on best practices and to identify pain points / opportunities for the ERP implementation
        \n![roadmap exercise](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw4HaQzGwn9dCMi-FIlI9pr2wDTLJZpHtv2CWi_98tMgbM4l9e)
        \n- approval by top management before proceeding to the next stage
        \n![barco business case](https://d3i71xaburhd42.cloudfront.net/fb6e5f4da4740e63c02bcc5399dcfee2ed62ab0e/4-Figure2-1.png)
        \n- development of business objectives map backed by financial values that structures the investment objectives per business process
        \n- updated business objectives map serves as dashboard for top management to review the investment progress
        \n![business objectives map](https://d3i71xaburhd42.cloudfront.net/fb6e5f4da4740e63c02bcc5399dcfee2ed62ab0e/6-Figure5-1.png)
        `
      ),
      notes: window.marked(
        `[Prof. Dr. Wim Van Grembergen's notes](https://www.security-congres.nl/download/?id=16826180) contains useful diagrams such as:
          \n- how to structure IT budget
          \n![IT budget](https://user-images.githubusercontent.com/3660908/73806664-12764a80-4805-11ea-8eb8-325a9d093ec4.png)
          \n- classification of information systems in digital transformation
          \n![](https://user-images.githubusercontent.com/3660908/73806910-caa3f300-4805-11ea-9bc0-5b885a504484.png)
          \n- example mapping of benefits from integrated CRM
          \n![](https://user-images.githubusercontent.com/3660908/73807094-4140f080-4806-11ea-8d07-30fc7b23c1f4.png)
          `
      )
    };
  },
  template: `
  <bulma-accordion v-bind:dropdown="true">
  <bulma-accordion-item>
    <p slot="title">Business case approach</p>
    <div v-html='bizCaseBarco' slot="content">
    </div>
  </bulma-accordion-item>
  <bulma-accordion-item>
    <p slot="title">Enterprise Governance of IT notes</p>
    <div v-html='notes' slot="content">
  </bulma-accordion-item>
  </bulma-accordion>
  `
});

const contents = Vue.component("contents", {
  components: {
    "content-items1": contentItems1,
    "content-items2": contentItems2
  },
  template: `
  <section class="section">
    <div class="columns">
  <div class="column">
  <h2 class="title is-4">Developments at Barco</h2>
    <content-items1></content-items1>
  </div>
  <div class="column">
  <h2 class="title is-4">Resources</h2>
  <content-items2></content-items2>
  </div>
</div>
</section>
`
});
