// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/product/**": {
      swr: 3600,
      cache: {
        group: "product-cache", // Add group caching for the /product/** route
      },
    }, //  seconds
  },
  // nitro: {
  // prerender: {
  //   routes: ["/product/:id"], // Dynamic product page route
  // },
  //   prerender: {
  //     crawlLinks: false,
  //     // routes: ["/product/:id"], // Dynamic product page route
  //   },
  // routeRules: {
  //   "/product/**": { swr: 3600 }, //  seconds
  // },
  // },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
