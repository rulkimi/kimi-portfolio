<script setup>
import BaseLayout from '@/layout/BaseLayout.vue';
import {
  AboutMe,
  WorkExperience,
  MyProjects,
} from '@/components'
</script>

<template>
  <BaseLayout>
    <AboutMe />
    <WorkExperience />
    <MyProjects />
  </BaseLayout>
</template>