<script setup>
import { HoverCard } from '@/components/templates';
</script>

<template>
  <div class="flex flex-col gap-4">
    <HoverCard
      date="2024 &ndash; PRESENT"
      title="kiminotes"
      company="Personal Project"
      link="https://rulkimi.github.io/kiminotes/"
      :tags="['Vue.Js', 'Vite', 'Tailwind CSS']"
    >
      Developed a personal coding notes website featuring interactive coding challenges and examples for efficient reference and hands-on review,
      integrating best practices from a year of industry experience to ensure high-quality, robust code and enhanced site functionality for effective learning and retrieval.
    </HoverCard>
    <HoverCard
      date="2022 &ndash; 2023"
      title="Recipe Generator"
      company="Personal Project"
      link="https://rulkimi.github.io/recipe-generator/"
      :tags="['Shadcn-Vue', 'Gemini AI', 'FastAPI', 'Render']"
    >
      Built a recipe generator web app using Vite, Vue.js, Tailwind CSS, Python FastAPI, and Gemini AI. Added search options (by dish name, ingredients, or images)
      and a recipe saving feature. Developed and documented APIs for search and recipe generation, supporting custom instructions and dietary needs.
    </HoverCard>
  </div>
</template>