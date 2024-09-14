<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="max-w-[1280px] mx-auto h-screen">
    <div class="flex gap-4 p-4 w-full h-full">
      <NavBar />
      <slot></slot>
    </div>
  </div>
</template>