<script setup>
import { HoverCard } from '@/components/templates';
</script>

<template>
  <div class="flex flex-col gap-4">
    <HoverCard
      date="2024 &ndash; PRESENT"
      title="Software Engineer"
      company="Mesiniaga Digital Sdn. Bhd."
      link="https://mesiniaga.com.my/"
      :tags="['Vue.Js', 'Vite', 'Figma', 'GenAI']"
    >
      Refined and built Mesiniaga’s first AI-integrated website, incorporating chatbots, translators, and analysis tools,
      while designing the UI and API integration for admin pages to manage users, prompt templates, and message logs with a simple CRUD flow.
    </HoverCard>
    <HoverCard
      date="2022 &ndash; 2023"
      title="Software Trainee"
      company="Knex Inc."
      link="https://www.linkedin.com/company/knex-inc./about/"
      :tags="['Dataplicity', 'Ubuntu']"
    >
      Monitored the company's IoT devices across 6 regions in Brazil, executed 10+ code modifications for tasks like storage optimization and error checks,
      and performed initial debugging on 5+ software issues, improving functionality and user experience.
    </HoverCard>
  </div>
</template>