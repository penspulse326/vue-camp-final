<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoLink from '@/components/LogoLink.vue';
import TodoInput from '@/components/TodoInput.vue';
</script>

<template>
  <main class="center h-[100dvh] bg-gradient-to-b from-primary to-secondary">
    <div class="container mx-auto">
      <h1 class="text-3xl text-center">SSS 的待辦事項</h1>
      <div class="mx-auto mt-4 max-w-[420px]">
        <TodoInput />
        <section class="center flex-col mt-4 mx-auto px-4 py-12 rounded-lg bg-white"></section>
      </div>
    </div>
  </main>
</template>
