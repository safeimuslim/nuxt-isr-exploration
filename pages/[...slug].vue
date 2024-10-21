<template>
  <div>
    <h1>{{ slugString }}</h1>
    <ul>
      <li><a href="/page-1">A-Tag: Page 1</a></li>
      <li><a href="/page-2">A-Tag: Page 2</a></li>
      <li><a href="/page-3">A-Tag: Page 3</a></li>
    </ul>
    <ul>
      <li><NuxtLink href="/page-1">NuxtLink: Page 1</NuxtLink></li>
      <li><NuxtLink href="/page-2">NuxtLink: Page 2</NuxtLink></li>
      <li><NuxtLink href="/page-3">NuxtLink: Page 3</NuxtLink></li>
    </ul>
    <p>Generation timestamp: {{ generatedUtcTime }}</p>
    <p>Generated seconds ago: {{ secondsAgo }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  validate: async route => {
    const slugString = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug.join('/');
    return ['page-1', 'page-2', 'page-3'].includes(slugString);
  },
});

const route = useRoute();
const slugString = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug.join('/');

const { data: apiResponse } = await useAsyncData(slugString, async () => {
 console.log('Server works....', slugString);
  await new Promise(resolve => setTimeout(resolve, 5000));
  return { 
   utc_datetime: new Date()
  }
});

const generatedUtcTime = apiResponse.value!.utc_datetime;
const secondsAgo = ref();

onMounted(() => {
  secondsAgo.value = Math.round((new Date().getTime() - new Date(generatedUtcTime).getTime()) / 1000);
});
</script>