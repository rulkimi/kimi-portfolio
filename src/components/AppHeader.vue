<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeNav = ref('about');
const sections = ref([]);

onMounted(() => {
  sections.value = Array.from(document.querySelectorAll('section'));

  // Intersection Observer callback
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeNav.value = entry.target.id;
      }
    });
  };

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the section is visible
    rootMargin: '0px 0px -30% 0px' // this fixes if content is too short like in experience
  });

  // Observe each section
  sections.value.forEach(section => observer.observe(section));

  // Cleanup observer on unmount
  onUnmounted(() => {
    sections.value.forEach(section => observer.unobserve(section));
  });
});

const navigations = ref([
  { id: 'about', name: 'ABOUT' },
  { id: 'experience', name: 'EXPERIENCE' },
  { id: 'projects', name: 'PROJECTS' },
]);

const scrollToPage = (navId) => {
  activeNav.value = navId;
  const element = sections.value.find(section => section.id === navId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<template>
  <header class="py-12 md:py-24">
    <div class="h-full flex flex-col gap-4 justify-between">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-200">Azrul Hakimi</h1>
          <h2 class="text-lg sm:text-xl font-medium text-slate-200">Junior Front-end Developer</h2>
          <div class="leading-normal max-w-xs">
            I’m eager to learn, discuss improvements, and connect with others,
            while striving to create engaging and accessible digital experiences.
          </div>
        </div>
        <div class="hidden md:flex flex-col gap-4">
          <a
            :href="`#${navigation.id}`"
            v-for="navigation in navigations"
            :key="navigation.id"
            class="flex items-center gap-4 font-medium group cursor-pointer"
            @click.prevent="scrollToPage(navigation.id)"
          >
            <div
              class="h-px w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-200"
              :class="{ '!w-16 !bg-slate-200' : activeNav === navigation.id }"
            ></div>
            <span
              class="text-xs group-hover:text-slate-200"
              :class="{ 'text-slate-200' : activeNav === navigation.id }"
            >
              {{ navigation.name }}
            </span>
          </a>
        </div>
      </div>
      <div class="flex gap-6 text-2xl">
        <a class="hover:scale-110" href="https://github.com/rulkimi" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a class="hover:scale-110" href="https://www.linkedin.com/in/azrul-hakimi-75a32420a/" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a class="hover:scale-110" href="mailto:azrulkimi00@gmail.com" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
    </div>
  </header>
</template>
