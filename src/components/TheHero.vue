<template>
  <div class="flex-grow flex min-h-screen items-center">
    <div class="w-full text-center hero-card-padding bg-background hero-card-rounded">
      <span
        v-for="n in 3"
        :key="n"
        :class="[ 'block', 'hero-text', 'font-bold', customColor(n) ]">
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
  return n => (n === 2 ? 'text-secondary' : 'text-accent');
});
</script>

<style scoped>
.hero-text {
  @apply leading-tight text-[10vw] lg:text-[10vw] xl:text-[8vw];
}

.hero-card-padding {
  @apply px-[2.125rem] py-[1.5rem] lg:px-[4.4375rem] lg:py-[3.1875rem] xl:px-[6.25rem] xl:py-[3.1875rem];
}

.hero-card-rounded {
  @apply rounded-[1.875rem] md:rounded-[3.125rem];
}
</style>
