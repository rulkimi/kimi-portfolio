<script setup>
import { NavBar } from '@/components';
import { GlowingBackground } from '@/components/templates';
</script>

<template>
  <GlowingBackground color="#0984FF">
    <div class="max-w-[1280px] mx-auto h-screen flex gap-4 px-24 w-full h-full">
      <NavBar class="flex-1"/>
      <div class="flex-1 flex flex-col gap-28 py-24">
        <slot></slot>
      </div>
    </div>
  </GlowingBackground>
</template>
