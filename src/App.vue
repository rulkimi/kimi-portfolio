<template>
  <TheNavbar />
  <section ref="hero">
    <TheHero text="HI, I'M KIMI" />
  </section>
  <div
    class="fixed text-text right-4 bottom-4 lg:right-1 lg:text-[1.44rem] cursor-pointer font-bold hover:text-[1.5rem] transition-all duration-300 ease-in-out"
    style="writing-mode: vertical-lr;">
    Scroll here -->
  </div>
  <section ref="about">
    <AboutMe />
  </section>
  <section ref="projects">
    <TheProjects />
  </section>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import TheHero from './components/TheHero.vue';
import TheNavbar from './components/TheNavbar.vue';
import AboutMe from './components/AboutMe.vue';
import TheProjects from './components/TheProjects.vue';

const hero = ref(null);
const about = ref(null);
const projects = ref(null);
const refs = { hero, about, projects };

provide('sectionRefs', refs);

onMounted(() => {
  console.log(hero.value)
})
</script>

