import lruCacheDriver from "unstorage/drivers/lru-cache";
import fsDriver from "unstorage/drivers/fs";
import fileSystem from "unstorage/drivers/fs";
// import { fs } from "unstorage";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/product/**": {
      swr: 10, // seconds
      cache: {
        group: "product-cache", // Add group caching for the /product/** route
      },
    },
  },
  nitro: {
    storage: {
      cache: {
        driver: "~/custom-driver",
      },
      // 'product-cache': fileSystem({ base: "./tmp" }), // Use file system as a temporary fallback
      // cache: fsDriver({ base: "./tmp" }),
      // cache: {
      //   driver: lruCacheDriver({ maxSize: 1000 }),
      // },
      // Define the storage for caching
      // cache: lruCacheDriver({
      //   maxSize: 1000, // Maximum size of the LRU cache
      // }),
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
