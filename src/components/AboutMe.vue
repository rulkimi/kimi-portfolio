<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex-1">
      <div class="md:m-10 flex-1">
        <div class="text-[4rem] md:text-[5rem] leading-none mb-8 font-bold text-accent">ABOUT ME</div>
        <div v-for="text in aboutMe" :key="text" class="block mb-4">{{ text }}</div>
      </div>
    </div>
    <div class="flex-1 flex justify-center">
      <div class="bg-gray-400 md:m-10 rounded-3xl md:flex-1 md:flex md:items-center md:justify-center w-full sm:w-1/2 h-3/4">
        <img src="/azrul_image.jpeg" alt="azrul's picture" class="object-cover rounded-3xl h-full w-full">
      </div>
    </div>
  </div>
</template>

<script setup>
const aboutMe = [`
  I graduated with first-class honors in Mechanical Engineering from the top university in Malaysia.
  However, I discovered my true passion lies in software development, particularly in frontend development.
  I have been self-teaching HTML, CSS, and JavaScript with the goal of securing a position as a software engineer at Mesiniaga.
  Fortunately, I had the opportunity to become a frontend developer there, utilizing the Vue.js framework.
  `,
  `
  It is safe to say that working in this field, is what I enjoy most and am eager to enhance my skills and gain more experience.
  I am interested in contributing to or collaborating with companies and open source projects, specifically in the creation of UI
  and UX for websites or various projects.
  `];
  

</script>
