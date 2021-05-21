export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: 'static',
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src: "https://unpkg.com/vue-multiselect@2.1.0"
      },
      {
        src: "//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"
      },
      {
        src: "//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"
      },
      {
        src: "//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "" },
      {
        rel: "stylesheet",
        href:
          "https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css"
      },
      {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css"
      }
    ]
  },
  generate: {
    fallback: true
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/vue-graph.js", mode: "client" },
    { src: "~/plugins/vuequill.js", mode: "client" },
    { src: "~/plugins/cardVal.js", mode: "client" },
    //{ src: "~/plugins/multiselect.js", mode: "client" }
  ],
  /*
   ** Auto import componentd
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources", 
  [
    'vue-sweetalert2/nuxt',
    {
      confirmButtonColor: '#02db71'
    }
  ]
],
  styleResources: {
    scss: [
      "~/assets/scss/mixins.scss",
      "~/assets/scss/variables.scss",
      "~/assets/scss/utils.scss",
      'sweetalert2/dist/sweetalert2.min.css',
      "~/assets/scss/utils/btn.scss"
      //"~/assets/scss/animations.scss"
    ]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  },
  proxy: {},
  middleware: ["auth"]
};
