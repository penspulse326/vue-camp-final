<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import { computed } from 'vue';
import CheckBox from './CheckBox.vue';
import type { TodoItem } from '@/constants/types';

const props = defineProps<{
  todos: TodoItem[];
}>();

const emit = defineEmits(['toggleStatus', 'deleteTodo']);

const categories = computed(() => {
  return [
    { name: '全部', todos: props.todos },
    {
      name: '待完成',
      todos: props.todos.filter((todo: TodoItem) => !todo.status),
    },
    {
      name: '已完成',
      todos: props.todos.filter((todo: TodoItem) => todo.status),
    },
  ];
});

function toggleStatus(id: string) {
  emit('toggleStatus', id);
}

function deleteTodo(id: string) {
  emit('deleteTodo', id);
}
</script>

<template>
  <div>
    <TabGroup v-if="todos.length">
      <!-- 類別 -->
      <TabList class="flex space-x-1 rounded-xl bg-primary/50 p-1">
        <Tab
          v-for="category in categories"
          :key="category.name"
          v-slot="{ selected }"
          as="template"
        >
          <button
            class="w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2"
            :class="[
              selected
                ? 'bg-white text-primary shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category.name }}
          </button>
        </Tab>
      </TabList>

      <!-- 待辦事項列表 -->
      <TabPanels class="mt-2">
        <TabPanel
          v-for="category in categories"
          :key="category.name"
          class="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2"
        >
          <ul class="todo__list pr-1 max-h-[400px] overflow-y-scroll">
            <li
              v-for="item in category.todos"
              :key="item.id"
              class="flex justify-between items-center border-b p-3 hover:bg-gray-100"
            >
              <div class="flex items-center gap-4">
                <CheckBox
                  :id="item.id"
                  :is-done="item.status"
                  @toggle-status="toggleStatus(item.id)"
                />
                <span
                  class="inline-block max-w-[200px] md:max-w-[300px] truncate"
                  :class="[item.status && 'line-through']"
                >
                  {{ item.content }}
                </span>
              </div>
              <button type="button" @click="deleteTodo(item.id)">
                <img src="../assets/icon-delete.svg" alt="刪除待辦事項" />
              </button>
            </li>
          </ul>
          <div class="mt-2 py-2 text-center">
            {{ categories[1].todos.length }} 個待完成項目
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <div
      v-else
      class="my-12 text-slate-900 text-center text-2xl font-bold tracking-widest"
    >
      目前尚無待辦事項
    </div>
  </div>
</template>

<style scoped>
.todo__list::-webkit-scrollbar {
  width: 4px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}

.todo__list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #1a5e63;
}
</style>
