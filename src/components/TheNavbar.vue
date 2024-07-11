<template>
  <nav ref="navbar" class="fixed bg-secondary/[0.8] pb-2 w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-5 rtl:space-x-reverse">
        <img src="../assets/kimi.svg" width="30" />
        <span class="self-center text-3xl text-text font-semibold whitespace-nowrap">Kimi</span>
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <div class="flex items-center">
          <ul class="items-center font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li v-for="menu in menus">
              <a
                href="#"
                class="block py-2 px-3 text-[1.44rem] text-text font-bold hover:text-accent md:p-0"
                @click="scroll(menu.ref)"
              >
                {{ menu.name }}
              </a>
            </li>
            <BaseButton>Let's talk!</BaseButton>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject } from 'vue';
import BaseButton from './BaseButton.vue';

const navbar = ref(null);
const menus = ref([
  { name: 'About', ref: 'about'},
  { name: 'Projects', ref: 'projects'},
  { name: 'Aspirations', ref: 'aspirations'},
]);

const sectionRefs = inject('sectionRefs');

const scroll = (refName) => {
  if (sectionRefs[refName]?.value) {
    const element = sectionRefs[refName].value;
    const navbarHeight = navbar.value.offsetHeight || 0;

    // Calculate the offset position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};


</script>