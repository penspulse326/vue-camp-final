import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TodoItem } from '@/constants/types';

export const useUserStore = defineStore('user', () => {
  const nickname = ref('');
  const todos = ref<TodoItem[]>([]);

  function setNickname(value: string) {
    nickname.value = value;
  }

  function setTodos(value: TodoItem[]) {
    console.log(value);
    todos.value = value;
  }

  function resetUser() {
    nickname.value = '';
    todos.value = [];
  }

  return { nickname, todos, setNickname, setTodos, resetUser };
});
