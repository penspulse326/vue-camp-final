<script setup lang="ts">
import { ref } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import CheckBox from './CheckBox.vue';

const categories = ref({
  全部: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2
    }
  ],
  待完成: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12
    }
  ],
  已完成: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2
    }
  ]
});
</script>

<template>
  <div>
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-primary/50 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
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
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="flex justify-between items-center rounded-md p-3 hover:bg-gray-100"
            >
              <div class="flex items-center gap-4">
                <CheckBox />
                <span class="inline-block max-w-[200px] md:max-w-[300px] truncate">{{
                  post.title
                }}</span>
              </div>
              <button type="button">
                <img src="../assets/icon-delete.svg" alt="刪除待辦事項" />
              </button>
            </li>
          </ul>
          <div class="mt-2 pt-2 border-t">5 個待完成項目</div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
