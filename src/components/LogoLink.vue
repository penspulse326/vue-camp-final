<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <h1 class="flex w-[242px] md:w-[312px] h-9 md:h-12">
    <RouterLink to="/" class="w-full" />
  </h1>
</template>

<style scoped>
h1 {
  background-image: url('@/assets/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;

  text-indent: 101%;
  white-space: nowrap;
  overflow: hidden;
}
</style>
