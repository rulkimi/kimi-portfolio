<template>
  <TheNavbar />
  <TheHero text="HI, I'M KIMI" />
  <div
    class="fixed right-4 bottom-4 lg:right-1 lg:text-[1.44rem] cursor-pointer font-bold hover:text-[1.5rem] transition-all duration-300 ease-in-out"
    style="writing-mode: vertical-lr;">
    Scroll here -->
  </div>
</template>

<script setup>
import TheHero from './components/TheHero.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

