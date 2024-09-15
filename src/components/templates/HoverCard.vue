<script setup>
defineProps({
  date: String,
  imagePath: String,
  imageAlt: {
    type: String,
    default: 'rulkimi\'s assets'
  },
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: false
  },
  tags: {
    type: Array,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  
});

const goToLink = link => {
  window.open(link, '_blank');
}
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="-mx-4 p-4 group cursor-pointer rounded-md hover:bg-slate-800/50 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 transition duration-200 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12">

      <!-- Date: Appears at top for small screens, default position for lg: and above -->
      <div v-if="date" class="order-1 lg:order-none lg:col-span-3 text-xs font-medium text-nowrap my-1">{{ date }}</div>
      <!-- Image: Appears at bottom for small screens, default position for lg: and above -->
      <img v-else class="order-3 mt-4 lg:mt-0 lg:order-none lg:col-span-3 rounded" :src="imagePath" width="115" :alt="imageAlt">

      <!-- Main content (Title, Company, etc.) -->
      <div class="order-2 lg:order-none lg:col-span-9">
        <div class="text-slate-200 group-hover:text-teal-300 mb-2">
          <span v-if="company">{{ title }} • {{ company }}</span>
          <span v-else>{{ title }}</span>
          <span class="ml-2 group-hover:ml-4 transition-all duration-300">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </span>
        </div>
        <div class="text-sm">
          <slot></slot>
        </div>
        <div class="flex flex-wrap gap-1 mt-4">
          <div
            v-for="tag in tags"
            :key="tag"
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 text-nowrap"
          >
            {{ tag }}
          </div>
        </div>
      </div>



    </div>
  </a>
</template>

