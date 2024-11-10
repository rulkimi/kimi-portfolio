<script setup>
import { HoverCard } from '@/components/templates';

import kiminotesImage from '@/assets/kiminotes-project.png';
import recipeGeneratorImage from '@/assets/recipe-generator-project.png';
import busLocationTrackerImage from '@/assets/bus-location-project.png';
import instagramNonfollowersTrackerImage from '@/assets/instagram-nonfollowers-project.png';
</script>

<template>
  <section id="projects">
    <div class="sticky top-0 p-4 -mx-4 z-20 text-sm font-bold tracking-widest text-slate-200 lg:sr-only">
      PROJECTS
    </div>
    <div class="flex flex-col gap-4">
      <HoverCard
        :image-path="kiminotesImage"
        image-alt="azrul hakimi's personal documentation website, kiminotes, preview"
        title="kiminotes"
        link="https://rulkimi.github.io/kiminotes/"
        :tags="['Vue.Js', 'Vite', 'Tailwind CSS']"
      >
        A personal coding notes website with some challenges faced during website development and interactive examples for quick reference and hands-on practice.
        It’s packed with best practices from a year in the industry to ensure high-quality code and smooth site functionality for effective learning and review.
      </HoverCard>
      <HoverCard
        :image-path="recipeGeneratorImage"
        image-alt="recipe generator image preview"
        title="Recipe Generator"
        link="https://rulkimi.github.io/recipe-generator/"
        :tags="['Shadcn-Vue', 'Gemini AI', 'FastAPI', 'Render']"
      >
        A recipe generator web app that uses AI to create recipes. It includes search options by dish name, ingredients, or images, and a feature to save favorite recipes.
        The app also has APIs developed and documented for search and recipe generation, allowing for customization based on dietary needs and preferences.
      </HoverCard>
      <HoverCard
        :image-path="busLocationTrackerImage"
        image-alt="bus location tracker image preview"
        title="Bus Location Tracker"
        link="https://rulkimi.github.io/bus-location-server/"
        :tags="['Vue.Js', 'GTFS-R', 'FastAPI', 'Render']"
      >
        A real-time bus tracking API that monitors live bus locations around KL and Selangor.
        It pulls in accurate, up-to-date data by connecting with the GTFS API.
      </HoverCard>
      <HoverCard
        :image-path="instagramNonfollowersTrackerImage"
        image-alt="instagram non followers tracker website image preview"
        title="Instragram Non-Followers Tracker"
        link="https://rulkimi.github.io/insta-nonfollowers/"
        :tags="['HTML', 'JavaScript', 'Bootstrap']"
      >
        A web app that identifies Instagram non-followers by processing JSON files from Instagram data exports.
        It includes features for generating and downloading detailed HTML reports and provides a step-by-step guide to help users with data processing,
        making the app easy to use and navigate.
      </HoverCard>
      <div class="flex">
        <a
          href="https://github.com/rulkimi/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 hover:gap-4 text-slate-200 hover:text-teal-300 transition-all duration-300"
        >
          <span>View On Github</span>
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </a>
      </div>
    </div>
  </section>
</template>