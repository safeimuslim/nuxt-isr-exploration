// server/api/products/[id].ts
export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  return {
    id: id,
    random: Math.random(),
    name: "Sepatu",
    price: 10000,
    quantity: 10,
    date: new Date(),
  };
});
