<script setup>
import { NavBar } from '@/components';
</script>

<template>
  <div class="max-w-[1280px] mx-auto h-screen">
    <div class="flex gap-4 p-24 w-full h-full">
      <NavBar class="flex-1"/>
      <div class="flex-1 flex flex-col gap-28">
        <slot></slot>
      </div>
    </div>
  </div>
</template>