export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-fire-windi",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/breadcrumb",
    "@/plugins/components.js",
    "@/plugins/validation",
    "@/plugins/loading",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/typescript-build", "nuxt-windicss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "vue-toastification/nuxt",
    [
      "nuxt-fontawesome",
      {
        component: "fontawesome",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"],
          },
        ],
      },
    ],
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyD4kngrO00qV4Zqzk9sSHbqS3i0fpW_CQg",
          authDomain: "tempakyousuke-firebase-project.firebaseapp.com",
          projectId: "tempakyousuke-firebase-project",
          storageBucket: "tempakyousuke-firebase-project.appspot.com",
          messagingSenderId: "26606077496",
          appId: "1:26606077496:web:562ba25d6d1f6861a808cd",
          measurementId: "G-Z7R4JX7N6F",
        },
        services: {
          auth: {
            persistence: "local",
            initialize: {
              onAuthStateChangedAction: "user/onAuthStateChanged",
              subscribeManually: false,
            },
            ssr: false,
          },
          firestore: {},
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
