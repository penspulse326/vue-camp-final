<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TodoView from '@/views/TodoView.vue';
</script>

<template>
  <header>
    <!-- <nav class="bg-blue-500">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  </header>

  <!-- <RouterView /> -->
  <TodoView />
</template>

<style scoped></style>
