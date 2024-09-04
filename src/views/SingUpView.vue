<script setup lang="ts">
import { API_USER } from '@/api/endpoints';
import InputRequireStar from '@/components/InputRequireStar.vue';
import { useFetch } from '@/composables/useFetch';
import type { SignupForm } from '@/constants/types';
import { ref, watch } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const formData = ref<SignupForm>({
  email: '',
  nickname: '',
  password: '',
});
const samePassword = ref('');
const errorMessage = ref('');

const { data, error, isLoading, refetch } = useFetch();
const router = useRouter();

async function handleSubmit() {
  if (
    !formData.value.email ||
    !formData.value.nickname ||
    !formData.value.password ||
    !samePassword.value
  ) {
    errorMessage.value = '必填欄位不可為空';
    return;
  }

  if (formData.value.password.length < 6) {
    errorMessage.value = '密碼長度不可小於 6 個字元';
    return;
  }

  if (formData.value.password !== samePassword.value) {
    errorMessage.value = '密碼不一致';
    return;
  }

  await refetch(() => API_USER._SIGN_UP(formData.value));
}

watch(data, () => {
  if (data.value) {
    router.push({ name: 'login' });
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
    <form
      action="#"
      class="f-center flex-col gap-4 min-w-[280px]"
      @submit.prevent="handleSubmit"
    >
      <div class="space-y-2 w-full">
        <h2>電子郵件<InputRequireStar /></h2>
        <input
          v-model.trim="formData.email"
          type="email"
          class="form-input w-full"
        />
      </div>
      <div class="space-y-2 w-full">
        <h2>暱稱<InputRequireStar /></h2>
        <input
          v-model.trim="formData.nickname"
          type="text"
          class="form-input w-full"
        />
      </div>
      <div class="space-y-2 w-full">
        <h2>密碼<InputRequireStar /></h2>
        <input
          v-model.trim="formData.password"
          type="password"
          class="form-input w-full"
        />
      </div>
      <div class="space-y-2 w-full">
        <h2>確認密碼<InputRequireStar /></h2>
        <input
          v-model.trim="samePassword"
          type="password"
          class="form-input w-full"
        />
      </div>
      <div class="mt-4 w-full text-center">
        <button type="submit" class="btn w-[50%]">註冊</button>
        <div class="mt-2">
          <p class="text-red-500">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </form>
    <RouterLink
      to="/auth/login"
      class="mt-4 text-primary underline hover:font-bold"
    >
      已經有帳號了嗎？點此登入
    </RouterLink>
  </section>
  <LoadingAnime v-if="isLoading" />
</template>
