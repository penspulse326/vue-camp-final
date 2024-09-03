<script setup lang="ts">
import { computed } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import CheckBox from './CheckBox.vue';
import type { TodoItem } from '@/constants/types';

const props = defineProps<{
  todos: TodoItem[];
}>();

const categories = computed(() => {
  return [
    { name: '全部', todos: props.todos },
    {
      name: '待完成',
      todos: props.todos.filter((todo: TodoItem) => !todo.status)
    },
    {
      name: '已完成',
      todos: props.todos.filter((todo: TodoItem) => todo.status)
    }
  ];
});
</script>

<template>
  <div>
    <TabGroup>
      <!-- 類別選單 -->
      <TabList class="flex space-x-1 rounded-xl bg-primary/50 p-1">
        <Tab
          v-for="category in categories"
          as="template"
          :key="category.name"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-primary shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
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
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          ]"
        >
          <ul>
            <li
              v-for="item in category.todos"
              :key="item.id"
              class="flex justify-between items-center rounded-md p-3 hover:bg-gray-100"
            >
              <div class="flex items-center gap-4">
                <CheckBox />
                <span
                  class="inline-block max-w-[200px] md:max-w-[300px] truncate"
                  >{{ item.content }}</span
                >
              </div>
              <button type="button">
                <img src="../assets/icon-delete.svg" alt="刪除待辦事項" />
              </button>
            </li>
          </ul>
          <div class="mt-2 pt-2 px-2 border-t">
            {{ categories[1].todos.length }} 個待完成項目
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
