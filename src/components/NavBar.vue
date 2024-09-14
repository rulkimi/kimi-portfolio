<script setup>
import { ref } from 'vue';

const activeNav = ref('ABOUT');

const navigations = ref([
  { name: 'ABOUT' },
  { name: 'EXPERIENCE' },
  { name: 'PROJECTS' },
]);

const setActiveNav = nav => {
  activeNav.value = nav;
}

</script>

<template>
  <div class="w-full h-full">
    <div class="h-full flex flex-col justify-between">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-4xl sm:text-5xl font-bold">Azrul Hakimi</h1>
          <h2 class="text-lg sm:text-xl font-medium">Junior Front-end Developer</h2>
          <div class="leading-normal max-w-xs">I build pixel-perfect, engaging, and accessible digital experiences.</div>
        </div>
        <div class="flex flex-col gap-4">
          <div
            v-for="navigation in navigations"
            :key="navigation.name"
            class="flex items-center gap-4 font-medium group cursor-pointer"
            @click="setActiveNav(navigation.name)"
          >
            <div
              class="h-px w-8 bg-text group-hover:w-16 transition-all duration-200"
              :class="{ 'w-16' : activeNav === navigation.name }"
            ></div>
            <span
              class="text-xs"
            >
              {{ navigation.name }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <div>Logo 1</div>
        <div>Logo 2</div>
        <div>Logo 3</div>
        <div>Logo 4</div>
      </div>
    </div>
  </div>
</template>