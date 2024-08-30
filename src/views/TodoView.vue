<script setup lang="ts">
import LogoLink from '@/components/LogoLink.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContent from '@/components/TodoContent.vue';
import { api } from '@/api';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';

console.log(api.defaults.headers.common['Authorization']);
const { nickname } = useUserStore();
</script>

<template>
  <main class="f-center h-[100dvh] bg-gradient-to-b from-secondary to-primary">
    <nav class="fixed top-0 flex justify-between items-center gap-4 px-4 py-2 w-full">
      <LogoLink />
      <div class="flex gap-4 text-lg text-gray-900 font-bold">
        <span>{{ nickname }}</span>
        <RouterLink to="/login" class="underline duration-100 hover:scale-105">登出</RouterLink>
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
