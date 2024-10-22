<template>
  <div>
    <h1>Jual {{ product.name }} | Bestfoless</h1>
    <p>Price: Rp {{ product.price }}</p>
    <p>Quantity: {{ product.quantity }}</p>
    <p>Date: {{ product.date }}</p>
    <br />
    <p>Generation timestamp: {{ generatedUtcTime }}</p>
    <p>Generated seconds ago: {{ secondsAgo }}</p>
    <button @click="clearCache">REFRESH CSR</button>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id;
const { data: product, refresh } = await useAsyncData(`key-product-${id}`, () =>{
 console.log('Server works...', id);
 return $fetch(`/api/products/${id}`)
})


const generatedUtcTime = product.value.date;
const secondsAgo = ref();

onMounted(() => {
  secondsAgo.value = Math.round((new Date().getTime() - new Date(generatedUtcTime).getTime()) / 1000);
});

// Call this when you want to refresh the data
const clearCache = () => {
    refresh(); // This will refetch the data and clear the cache
};
</script>