<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { useFetch } from '@/composables/useFetch';
import { api } from '@/api';
import { AUTH } from '@/api/path';
import InputRequireStar from '@/components/InputRequireStar.vue';

const formData = ref({
  email: '',
  password: ''
});

const errorMessage = ref('');

const { data, error, isLoading, refetch } = useFetch(AUTH.SIGN_IN, 'post', formData.value);

async function handleSubmit() {
  if (!formData.value.email || !formData.value.password) {
    errorMessage.value = '請輸入電子郵件和密碼';
    return;
  }
  await refetch();
}

watch(data, () => {
  if (data.value) {
    api.defaults.headers.common['Authorization'] = `Bearer ${data.value.token}`;
  }
});

watch(error, () => {
  if (error.value) {
    errorMessage.value = '登入失敗，請檢查輸入資訊是否正確';
  }
});
</script>

<template>
  <section
    class="f-center flex-col mt-4 mx-auto px-4 py-12 max-w-[420px] rounded-lg shadow-md bg-white"
  >
    <form @submit.prevent="handleSubmit" action="#" class="f-center flex-col gap-4 min-w-[280px]">
      <div class="space-y-2 w-full">
        <h2>電子郵件<InputRequireStar /></h2>
        <input type="text" v-model.trim="formData.email" class="form-input w-full" />
      </div>
      <div class="space-y-2 w-full">
        <h2>密碼<InputRequireStar /></h2>
        <input type="password" v-model.trim="formData.password" class="form-input w-full" />
      </div>
      <button type="submit" class="btn w-full">登入</button>
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </form>
    <RouterLink to="signup" class="mt-8 text-primary underline hover:font-bold"
      >沒有帳號嗎？點此註冊</RouterLink
    >
    <LoadingAnime v-if="isLoading" />
  </section>
</template>
