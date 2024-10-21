// server/api/revalidate-product/[id].ts
export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const path = `/product/${id}`
    try {
      console.log("Revalidate-product...", path);
      // Use Nitro's ISR set function to trigger revalidation
      const response = await $fetch(path, {
        method: "GET", // Perform a HEAD request to trigger the ISR revalidation
        // method: "PURGE", // Nitro's built-in ISR PURGE method to regenerate page
        headers: {
          "x-nitro-prerender": "1", // Ensure ISR is triggered
        },
      });

      console.log("Response >> ", response);

      return { status: 200, message: `Success: Product page ${id} revalidated.` };
    } catch (error) {
      return { status: 500, message: `Failed: Product page ${id} revalidated.` };
    }
});
