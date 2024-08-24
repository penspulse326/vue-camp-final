<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoLink from '@/components/LogoLink.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContent from '@/components/TodoContent.vue';
</script>

<template>
  <main class="center h-[100dvh] bg-gradient-to-b from-primary to-secondary">
    <nav class="fixed top-0 flex justify-between items-center gap-4 px-4 py-2 w-full">
      <LogoLink />
      <div class="flex gap-4 text-lg text-gray-900 font-bold">
        <span>sss111</span>
        <button type="button" class="underline duration-100 hover:scale-105">登出</button>
      </div>
    </nav>
    <div class="container mx-auto">
      <div class="m-3">
        <div class="mx-auto space-y-8 max-w-[420px]">
          <TodoInput />
          <TodoContent />
        </div>
      </div>
    </div>
  </main>
</template>
