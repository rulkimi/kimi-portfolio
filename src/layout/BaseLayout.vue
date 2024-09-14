<script setup>
import { NavBar } from '@/components';
</script>

<template>
  <div class="max-w-[1280px] mx-auto h-screen flex gap-4 px-24 w-full h-full overflow-auto custom-scroll">
    <NavBar class="flex-1"/>
    <div class="flex-1 flex flex-col gap-28 py-24">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar styling */
.custom-scroll::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
</style>
