<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>Price: ${{ product.price }}</p>
    <p>Quantity: {{ product.quantity }}</p>
    <p>Date: {{ product.date }}</p>
    <br />
    <p>Generation timestamp: {{ generatedUtcTime }}</p>
    <p>Generated seconds ago: {{ secondsAgo }}</p>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id;
const { data: product } = await useAsyncData(`product-$id}`, () =>{
 console.log('Server works...', id);
 return $fetch(`/api/products/${id}`)
})


const generatedUtcTime = product.value.date;
const secondsAgo = ref();

onMounted(() => {
  secondsAgo.value = Math.round((new Date().getTime() - new Date(generatedUtcTime).getTime()) / 1000);
});
</script>