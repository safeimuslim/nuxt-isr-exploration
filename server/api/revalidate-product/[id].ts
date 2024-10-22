// server/api/revalidate-product/[id].ts
export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  try {
    const pathCacheProduct = `cache:product-cache:_`;
    const cacheStorage = useStorage(pathCacheProduct);
    const cachedKeys = await cacheStorage.getKeys();

    const filteredCchedKeys = cachedKeys.filter(
      (keyFullpath) => keyFullpath.split(".")[0] === `product${id}`
    );

    console.log("filteredCchedKeys >> ", filteredCchedKeys);

    if (!filteredCchedKeys.length) {
      return {
        status: 200,
        message: `Cache product page ${id} not found.`,
      };
    }

    await Promise.all(
      filteredCchedKeys.map((key) => cacheStorage.removeItem(key))
    );

    //TODO: hit product URL here to trigger generate product cache
    //TODO: move cache to the file system, becase if restart the server, cache will be lost.
    return {
      status: 200,
      message: `Success revalidated product page ${id} revalidated.`,
    };
  } catch (error) {
    return {
      status: 200,
      message: `Failed revalidated product page ${id} revalidated. ${error}`,
    };
  }
});
