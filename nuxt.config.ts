// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Grocery App",
      meta: [{ name: "description", content: "Grocery Shopping App" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: [{ path: "~/components", pathPrefix: false }],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
  ],
  css: ["vue-final-modal/style.css"],
});
