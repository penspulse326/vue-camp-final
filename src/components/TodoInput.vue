<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['addTodo']);

const todoContent = ref('');

function addTodo() {
  emit('addTodo', todoContent.value);
  todoContent.value = '';
}
</script>

<template>
  <div class="flex p-2 rounded-lg shadow-md bg-white">
    <input
      v-model="todoContent"
      type="text"
      placeholder="請輸入待辦事項"
      class="flex-grow px-2 outline-none"
      @keyup.enter="addTodo"
    />
    <button type="button" class="btn" @click="addTodo">新增</button>
  </div>
</template>
