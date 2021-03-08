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
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "" },
      {
        rel: "stylesheet",
        href:
          "https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css"
      }
    ]
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
    { src: "~/plugins/vuequill.js", mode: "client" }
    //{ src: "~/plugins/multiselect.js", mode: "client" }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: [
      "~/assets/scss/mixins.scss",
      "~/assets/scss/variables.scss",
      "~/assets/scss/utils.scss"
      //"~/assets/scss/animations.scss"
    ]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  proxy: {},
  middleware: ["auth"]
};
