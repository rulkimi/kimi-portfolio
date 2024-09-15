<script setup>
import { HoverCard } from '@/components/templates';
</script>

<template>
  <section id="experience">
    <div class="sticky top-0 p-4 -mx-4 z-20 text-sm font-bold tracking-widest text-slate-200 lg:sr-only">
      EXPERIENCE
    </div>
    <div class="flex flex-col gap-4">
      <HoverCard
        date="SEP 2023 &ndash; PRESENT"
        title="Software Engineer"
        company="Mesiniaga Digital Sdn. Bhd."
        link="https://mesiniaga.com.my/"
        :tags="['Vue.js', 'Vite', 'Figma', 'Tailwind CSS', 'Vue Tauri', 'GenAI', 'FastAPI', 'Axios', 'Pinia']"
      >
        Designed and developed Mesiniaga’s first AI-powered internal website, featuring chatbots, translators, and analysis tools.
        The platform includes user and admin pages for efficient management.
      </HoverCard>
      <HoverCard
        date="MAY 2022 &ndash; APR 2023"
        title="Software Trainee"
        company="Knex Inc."
        link="https://www.linkedin.com/company/knex-inc./about/"
        :tags="['Dataplicity', 'Ubuntu']"
      >
        Monitored the company's IoT devices across 6 regions in Brazil, executed code modifications for tasks like storage optimization and error checks,
        and performed initial debugging on software issues, improving functionality and user experience.
      </HoverCard>
      <div class="flex">
        <a
          href="https://github.com/rulkimi/kimi-portfolio/blob/main/kimi_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 hover:gap-4 text-slate-200 hover:text-teal-300 transition-all duration-300"
        >
          <span>View Full Resume</span>
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </a>
      </div>
    </div>
  </section>
</template>