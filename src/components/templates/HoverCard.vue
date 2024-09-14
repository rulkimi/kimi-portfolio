<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="-mx-4 p-4 group cursor-pointer rounded-md hover:bg-slate-800/50 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 transition duration-200 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
    <div class="grid grid-cols-12">
      
      <div class="col-span-3 text-xs font-medium text-nowrap my-1">{{ date }}</div>

      <div class="col-span-9">
        <div class="text-slate-200 group-hover:text-teal-300 mb-2 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
          <span>{{ title }} • {{ company }}</span>
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
        <slot></slot>
        <div class="flex gap-1 mt-4">
          <div
            v-for="tag in tags"
            :key="tag"
            class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
          >
            {{ tag }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
