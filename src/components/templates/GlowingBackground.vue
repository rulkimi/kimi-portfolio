<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'w-auto h-screen'
  },
  circleSize: {
    type: String,
    default: '1280px'
  }
});

const position = ref({ x: 0, y: 0 });
const isHovering = ref(false);

function handleMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  position.value.x = event.clientX - rect.left;
  position.value.y = event.clientY - rect.top;
  isHovering.value = true;
}

function handleMouseLeave() {
  isHovering.value = false;
}

const glowStyle = computed(() => ({
  top: `${position.value.y}px`,
  left: `${position.value.x}px`,
  transform: 'translate(-50%, -50%)',
  background: `radial-gradient(${props.color}, transparent, transparent)`,
  width: props.circleSize,
  height: props.circleSize,
  opacity: isHovering.value ? 1 : 0,
  transition: 'opacity 0.5s, top 0s, left 0s', // smooth opacity change without repositioning
}));
</script>

<template>
  <div
    class="relative bg-slate-900 overflow-hidden group/glowing"
    :class="size"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="absolute rounded-full opacity-0 transition-opacity duration-500 group-hover/glowing:opacity-100"
      :style="glowStyle"
    ></div>
    <div class="absolute bg-slate-900 bg-opacity-90 w-screen overflow-auto custom-scroll">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
</style>

