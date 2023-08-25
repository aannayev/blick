<script setup lang="ts">
const {$api} = useNuxtApp()

const response = await $api.get('articles').json()

console.log(response)

</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
