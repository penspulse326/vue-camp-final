<script setup lang="ts">
import { api } from '@/api';
import { API_USER } from '@/api/endpoints';
import InputRequireStar from '@/components/InputRequireStar.vue';
import { useFetch } from '@/composables/useFetch';
import type { LoginForm } from '@/constants/types';
import { useUserStore } from '@/stores/user';
import { ref, watch } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const formData = ref<LoginForm>({
  email: '',
  password: '',
});

const errorMessage = ref('');

const { data, error, isLoading, refetch } = useFetch();

const router = useRouter();
const { setNickname } = useUserStore();

async function handleSubmit() {
  if (!formData.value.email || !formData.value.password) {
    errorMessage.value = '必填欄位不可為空';
    return;
  }

  if (formData.value.password.length < 6) {
    errorMessage.value = '密碼長度不可小於 6 個字元';
    return;
  }

  await refetch(() => API_USER._SING_IN(formData.value));
}

watch(data, () => {
  if (data.value) {
    api.defaults.headers.common.Authorization = data.value.token;
    localStorage.setItem('token', data.value.token);
    setNickname(data.value.nickname);
    router.push({ name: 'home' });
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
        <h2>
          電子郵件
          <InputRequireStar />
        </h2>
        <input
          v-model.trim="formData.email"
          type="email"
          class="form-input w-full"
        />
      </div>
      <div class="space-y-2 w-full">
        <h2>
          密碼
          <InputRequireStar />
        </h2>
        <input
          v-model.trim="formData.password"
          type="password"
          class="form-input w-full"
        />
      </div>
      <div class="mt-4 w-full text-center">
        <button type="submit" class="btn w-[50%]">登入</button>
        <div class="mt-2">
          <p class="text-red-500">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </form>
    <RouterLink
      to="/auth/signup"
      class="mt-4 text-primary underline hover:font-bold"
    >
      沒有帳號嗎？點此註冊
    </RouterLink>
  </section>
  <LoadingAnime v-if="isLoading" />
</template>
