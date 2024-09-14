<script setup>
import { NavBar, } from '@/components';
import { GlowingBackground } from '@/components/templates';
</script>

<template>
  <GlowingBackground color="#0984FF">
    <div class="max-w-[1280px] mx-auto h-screen flex gap-4 px-24">
      <NavBar class="w-1/2"/>
      <div class="w-1/2 flex flex-col gap-24 py-24">
        <slot></slot>
      </div>
    </div>
  </GlowingBackground>
</template>
