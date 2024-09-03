<script setup lang="ts">
import { ref } from 'vue';

const todoContent = ref('');

const emit = defineEmits(['addTodo']);

function addTodo() {
  emit('addTodo', todoContent.value);
  todoContent.value = '';
}
</script>

<template>
  <div class="flex p-2 rounded-lg shadow-md bg-white">
    <input
      type="text"
      v-model="todoContent"
      @keyup.enter="addTodo"
      placeholder="請輸入待辦事項"
      class="flex-grow px-2 outline-none"
    />
    <button type="button" @click="addTodo" class="btn">新增</button>
  </div>
</template>
