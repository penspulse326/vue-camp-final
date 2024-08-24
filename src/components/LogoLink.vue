<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1 class="flex">
    <RouterLink to="/"></RouterLink>
  </h1>
</template>

<style scoped>
h1 {
  margin: 0 auto;
  width: 312px;
  height: 48px;

  background-image: url('@/assets/logo.svg');

  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}

a {
  width: 100%;
}
</style>
