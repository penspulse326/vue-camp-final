<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { API_TODO } from '@/api/endpoints';
import LogoLink from '@/components/LogoLink.vue';
import MessageModal from '@/components/MessageModal.vue';
import TodoContent from '@/components/TodoContent.vue';
import TodoInput from '@/components/TodoInput.vue';
import { useFetch } from '@/composables/useFetch';
import { useTodoStore } from '@/stores/todo';
import { useUserStore } from '@/stores/user';
import { api } from '@/api';

const router = useRouter();
const { data, error, isLoading, refetch } = useFetch();

const isModalOpened = ref(false);
const message = ref('');

/**
 * user store
 */
const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

/**
 * todos store
 */
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
const { setTodos } = todoStore;

async function handleGetTodos() {
  await refetch(() => API_TODO._GET_ALL());

  if (data.value) {
    setTodos(data.value.data);
  }
}

async function handleAddTodo(todo: string) {
  if (!todo) {
    isModalOpened.value = true;
    message.value = '代辦事項不能空白 QAQ';
    return;
  }

  await refetch(() => API_TODO._ADD(todo), handleGetTodos);
}

async function handleToggleStatus(id: string) {
  await refetch(() => API_TODO._TOGGLE_STATUS(id), handleGetTodos);
}

async function handleDeleteTodo(id: string) {
  await refetch(() => API_TODO._DELETE(id), handleGetTodos);
}

function handleCloseModal() {
  isModalOpened.value = false;
}
watch(error, () => {
  message.value = '發生錯誤，請稍後再試 QAQ';
  isModalOpened.value = true;
});

onBeforeMount(async () => {
  if (!api.defaults.headers.common.Authorization) {
    router.push({ name: 'login' });
    return;
  }

  await handleGetTodos();
});
</script>

<template>
  <main class="f-center h-[100dvh] bg-gradient-to-b from-secondary to-primary">
    <nav
      class="fixed top-0 flex justify-between items-center gap-4 px-4 py-2 w-full"
    >
      <LogoLink />
      <div class="flex gap-4 text-lg text-gray-900 font-bold">
        <span>{{ userInfo.nickname }}</span>
        <RouterLink
          to="/auth/login"
          class="underline duration-100 hover:scale-105"
        >
          登出
        </RouterLink>
      </div>
    </nav>
    <div class="container mx-auto">
      <div class="m-3">
        <div class="mx-auto space-y-8 max-w-[420px]">
          <TodoInput @add-todo="handleAddTodo" />
          <TodoContent
            :todos="todos"
            @toggle-status="handleToggleStatus"
            @delete-todo="handleDeleteTodo"
          />
        </div>
      </div>
    </div>
  </main>
  <MessageModal
    :is-open="isModalOpened"
    :message="message"
    @close="handleCloseModal"
  />
  <LoadingAnime v-if="isLoading" />
</template>
