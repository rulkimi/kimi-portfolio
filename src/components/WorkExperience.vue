<script setup>
import { HoverCard } from '@/components/templates';
</script>

<template>
  <section id="experience" class="flex flex-col gap-4">
    <HoverCard
      date="SEP 2024 &ndash; PRESENT"
      title="Software Engineer"
      company="Mesiniaga Digital Sdn. Bhd."
      link="https://mesiniaga.com.my/"
      :tags="['Vue.js', 'Vite', 'Figma', 'Tailwind CSS', 'Vue Tauri', 'GenAI', 'FastAPI', 'Axios', 'Pinia']"
    >
      Refined and built Mesiniaga’s first AI-integrated website, incorporating chatbots, translators, and analysis tools,
      while designing the UI and API integration for admin pages to manage users, prompt templates, and message logs with a simple CRUD flow.
    </HoverCard>
    <HoverCard
      date="MAY 2022 &ndash; APR 2023"
      title="Software Trainee"
      company="Knex Inc."
      link="https://www.linkedin.com/company/knex-inc./about/"
      :tags="['Dataplicity', 'Ubuntu']"
    >
      Monitored the company's IoT devices across 6 regions in Brazil, executed 10+ code modifications for tasks like storage optimization and error checks,
      and performed initial debugging on 5+ software issues, improving functionality and user experience.
    </HoverCard>
    <div class="flex">
      <a
        href="https://github.com/rulkimi/kimi-portfolio/blob/main/kimi_resume.pdf"
        target="_blank"
        class="flex items-center gap-2 hover:gap-4 text-slate-200 hover:text-teal-300 transition-all duration-300"
      >
        <span>View Full Resume</span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </a>
    </div>
  </section>
</template>