<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { useFetch } from '@/composables/useFetch';
import { api } from '@/api';
import { AUTH } from '@/api/path';

const formData = ref({
  email: '',
  password: ''
})

const { data, error, isLoading, refetch } = useFetch(AUTH.SIGN_IN, 'post', formData.value);

async function handleSubmit() {
  await refetch();
}

watch(data, () => {
  if (data.value) {
    api.defaults.headers.common['Authorization'] = `Bearer ${data.value.token}`;
  }
})

watch(error, () => {
  if (error.value) {
    alert(error.value.data.message);
  }
})
</script>

<template>
  <section
    class="center flex-col mt-4 mx-auto px-4 py-12 max-w-[420px] rounded-lg shadow-md bg-white"
  >
    <form @submit.prevent="handleSubmit" action="#" class="center flex-col gap-4 min-w-[280px]">
      <div class="space-y-2 w-full">
        <h2>電子郵件</h2>
        <input type="text" v-model="formData.email" class="form-input w-full" />
      </div>
      <div class="space-y-2 w-full">
        <h2>密碼</h2>
        <input type="password" v-model="formData.password" class="form-input w-full" />
      </div>
      <button type="submit" class="btn w-full">登入</button>
    </form>
    <RouterLink to="signup" class="mt-8 text-primary underline hover:font-bold"
      >沒有帳號嗎？點此註冊</RouterLink
    >
  </section>
</template>
