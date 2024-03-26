<template>
  <div class="flex-grow flex min-h-screen items-center">
    <div class="w-full text-center px-[6.25rem] py-[3.1875rem] bg-background rounded-[3.125rem] dark:dark">
      <span
        v-for="n in 3"
        :key="n"
        :class="[ 'block', 'text-[120px]', 'font-bold', customColor(n), 'dark:dark' ]">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: String,
});

const customColor = computed(() => {
  return n => (n === 2 ? 'text-secondary' : 'text-primary');
});
</script>
