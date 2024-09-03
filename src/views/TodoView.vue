<script setup lang="ts">
import LogoLink from '@/components/LogoLink.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoContent from '@/components/TodoContent.vue';
import MessageModal from '@/components/MessageModal.vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { useFetch } from '@/composables/useFetch';
import { onMounted, ref, watch } from 'vue';
import { API_TODO } from '@/api/endpoints';

const isModalOpened = ref(false);

const { nickname, setTodos } = useUserStore();
const { data, error, isLoading, refetch } = useFetch();

async function handleGetTodos() {
  await refetch(() => API_TODO._GET_ALL());

  if (data.value) {
    setTodos(data.value.data);
  }
}

async function handleAddTodo(todo: string) {
  if (!todo) {
    isModalOpened.value = true;
    return;
  }

  await refetch(() => API_TODO._ADD(todo));
  await handleGetTodos();
}

function handleCloseModal() {
  isModalOpened.value = false;
}

onMounted(async () => {
  await refetch(() => API_TODO._GET_ALL());

  if (data.value) {
    setTodos(data.value.data);
  }
});
</script>

<template>
  <main class="f-center h-[100dvh] bg-gradient-to-b from-secondary to-primary">
    <nav
      class="fixed top-0 flex justify-between items-center gap-4 px-4 py-2 w-full"
    >
      <LogoLink />
      <div class="flex gap-4 text-lg text-gray-900 font-bold">
        <span>{{ nickname }}</span>
        <RouterLink to="/login" class="underline duration-100 hover:scale-105"
          >登出</RouterLink
        >
      </div>
    </nav>
    <div class="container mx-auto">
      <div class="m-3">
        <div class="mx-auto space-y-8 max-w-[420px]">
          <TodoInput @add-todo="handleAddTodo" />
          <TodoContent />
        </div>
      </div>
    </div>
  </main>
  <MessageModal :isOpen="isModalOpened" @close="handleCloseModal" />
</template>
