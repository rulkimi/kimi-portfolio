<script setup>
import { AppHeader, AppFooter } from '@/components';
import { GlowingBackground } from '@/components/templates';
</script>

<template>
  <GlowingBackground color="#0984FF">
    <div class="max-w-[1280px] mx-auto h-screen flex gap-4 px-24 overflow-auto custom-scroll">
      <AppHeader class="w-1/2"/>
      <div class="w-1/2 flex flex-col gap-24 py-24">
        <slot></slot>
        <AppFooter />
      </div>
    </div>
  </GlowingBackground>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #1f2937;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #6b7280; 
}
</style>
