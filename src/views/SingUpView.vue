<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section
    class="center flex-col mt-4 mx-auto px-4 py-12 max-w-[420px] rounded-lg shadow-md bg-white"
  >
    <form action="" class="center flex-col gap-4 min-w-[280px]">
      <div class="space-y-2 w-full">
        <h2>電子郵件</h2>
        <input type="text" class="form-input w-full" />
      </div>
      <div class="space-y-2 w-full">
        <h2>暱稱</h2>
        <input type="password" class="form-input w-full" />
      </div>
      <div class="space-y-2 w-full">
        <h2>密碼</h2>
        <input type="password" class="form-input w-full" />
      </div>
      <div class="space-y-2 w-full">
        <h2>確認密碼</h2>
        <input type="password" class="form-input w-full" />
      </div>
      <button type="button" class="btn w-full">註冊</button>
    </form>
    <RouterLink to="/" class="mt-8 text-primary underline hover:font-bold"
      >已經有帳號了嗎？點此登入</RouterLink
    >
  </section>
</template>
