import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TodoItem } from '@/constants/types';

export const useTodoStore = defineStore('todo-api', () => {
  // state
  const todos = ref<TodoItem[]>([]);

  // action
  function setTodos(value: TodoItem[]) {
    todos.value = value;
  }

  function resetTodos() {
    todos.value = [];
  }

  return { todos, setTodos, resetTodos };
});
