<script setup>
import { AppHeader, AppFooter } from '@/components';
import { GlowingBackground } from '@/components/templates';
</script>

<template>
  <GlowingBackground color="#0984FF">
    <div class="max-w-[1280px] mx-auto h-screen flex flex-col md:flex-row gap-4 px-6 md:px-24 overflow-auto custom-scroll">
      <AppHeader class="md:w-1/2 md:sticky md:top-0"/>
      <div class="md:w-1/2 flex flex-col gap-24 py-12 md:py-24">
        <slot></slot>
        <AppFooter />
      </div>
    </div>
  </GlowingBackground>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #0f172a;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #4d5c7184;
  border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #6b7280; 
}
</style>
