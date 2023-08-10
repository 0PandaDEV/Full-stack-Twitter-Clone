// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxthq/ui", "@sidebase/nuxt-auth"],
  auth: {
    origin: "http://localhost:3000",
    globalAppMiddleware: true,
  },
});