import { defineDriver } from "unstorage/drivers/utils/index";
// import lruCacheDriver from "unstorage/drivers/lru-cache";
// import memory from "unstorage/drivers/memory";
import fsDriver from "unstorage/drivers/fs";


export default defineDriver((opts) => {
  console.log("custom driver was set up");
  // return memory(opts);
  return fsDriver({ base: "./bfl-custom-cache" });
  // return lruCacheDriver({
  //   maxSize: 1000, // Maximum size of the LRU cache
  // });
});
