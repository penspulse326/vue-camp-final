<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { useFetch } from '@/composables/useFetch';
import { api } from '@/api';
import { API_AUTH } from '@/api/path';
import InputRequireStar from '@/components/InputRequireStar.vue';

const formData = ref({
  email: '',
  password: ''
});

const errorMessage = ref<String[]>([]);

const { data, error, isLoading, refetch } = useFetch(API_AUTH.SIGN_IN, 'post', formData.value);

async function handleSubmit() {
  if (!formData.value.email || !formData.value.password) {
    errorMessage.value = ['必填欄位不可為空'];
    return;
  }

  if (formData.value.password.length < 6) {
    errorMessage.value = ['密碼長度不可小於 6 個字元'];
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
    errorMessage.value = error.value.data.message;
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
      <div class="mt-4 w-full text-center">
        <button type="submit" class="btn w-[50%]">登入</button>
        <div class="mt-2">
          <p v-for="(error, index) in errorMessage" :key="index" class="text-red-500">
            {{ error }}
          </p>
        </div>
      </div>
    </form>
    <RouterLink to="signup" class="mt-8 text-primary underline hover:font-bold"
      >沒有帳號嗎？點此註冊</RouterLink
    >
    <LoadingAnime v-if="isLoading" />
  </section>
</template>
