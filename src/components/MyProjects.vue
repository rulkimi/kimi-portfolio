<script setup>
import { HoverCard } from '@/components/templates';

import kiminotesImage from '@/assets/kiminotes-project.png';
import recipeGeneratorImage from '@/assets/recipe-generator-project.png';
import busLocationTrackerImage from '@/assets/bus-location-project.png';
import instagramNonfollowersTrackerImage from '@/assets/instagram-nonfollowers-project.png';
</script>

<template>
  <div class="flex flex-col gap-4">
    <HoverCard
      :image-path="kiminotesImage"
      image-alt="azrul hakimi's personal documentation website, kiminotes, preview"
      title="kiminotes"
      link="https://rulkimi.github.io/kiminotes/"
      :tags="['Vue.Js', 'Vite', 'Tailwind CSS']"
    >
      Developed a personal coding notes website featuring interactive coding challenges and examples for efficient reference and hands-on review,
      integrating best practices from a year of industry experience to ensure high-quality, robust code and enhanced site functionality for effective learning and retrieval.
    </HoverCard>
    <HoverCard
      :image-path="recipeGeneratorImage"
      image-alt="recipe generator image preview"
      title="Recipe Generator"
      link="https://rulkimi.github.io/recipe-generator/"
      :tags="['Shadcn-Vue', 'Gemini AI', 'FastAPI', 'Render']"
    >
      Built a recipe generator web app using Vite, Vue.js, Tailwind CSS, Python FastAPI, and Gemini AI. Added search options (by dish name, ingredients, or images)
      and a recipe saving feature. Developed and documented APIs for search and recipe generation, supporting custom instructions and dietary needs.
    </HoverCard>
    <HoverCard
      :image-path="busLocationTrackerImage"
      image-alt="bus location tracker image preview"
      title="Bus Location Tracker"
      link="https://rulkimi.github.io/bus-location-server/"
      :tags="['Vue.Js', 'GTFS', 'FastAPI', 'Render']"
    >
      Developed a real-time bus tracking API using Python and FastAPI, processing live bus locations around KL and Selangor.
      Integrated with the GTFS API for accurate real-time data
    </HoverCard>
    <HoverCard
      :image-path="instagramNonfollowersTrackerImage"
      image-alt="instagram non followers tracker website image preview"
      title="Instragram Non-Followers Tracker"
      link="https://rulkimi.github.io/insta-nonfollowers/"
      :tags="['HTML', 'JavaScript', 'Bootstrap']"
    >
      Created a web app to identify Instagram non-followers using Vue.js and Bootstrap, processing JSON files from Instagram data exports.
      Integrated features for generating and downloading detailed HTML reports and added a step-by-step guide to assist users in processing
      their data, enhancing usability and experience.
    </HoverCard>
    <div class="flex">
      <a
        href="https://github.com/rulkimi/"
        target="_blank"
        class="flex items-center gap-2 hover:gap-4 transition-all duration-300"
      >
        <span>View On Github</span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </a>
    </div>
  </div>
</template>