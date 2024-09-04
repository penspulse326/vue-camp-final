<script setup lang="ts">
const props = defineProps<{
  id: string;
  isDone: boolean;
}>();

const emit = defineEmits(['toggleStatus']);

function handleToggleStatus() {
  emit('toggleStatus', props.id);
}
</script>

<template>
  <label
    class="f-center w-6 h-6 border rounded-md cursor-pointer duration-100 hover:bg-primary/25"
  >
    <input
      id=""
      type="checkbox"
      name=""
      class="hidden"
      @change="handleToggleStatus"
    />
    <img v-if="props.isDone" src="../assets/icon-check.svg" alt="勾勾" />
  </label>
</template>

<style scoped></style>
