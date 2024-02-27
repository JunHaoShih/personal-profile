<template>
  <q-page class="tw-flex tw-flex-col tw-items-center tw-justify-start">
    <HeroSection
      class="tw-bg-gradient-to-b tw-from-neutral-200 tw-to-neutral-300
      dark:tw-bg-gradient-to-b dark:tw-from-slate-900 dark:tw-to-slate-800"
    />
    <ProfileCard class="tw-bg-gradient-to-b tw-from-slate-800 tw-to-slate-900" />
    <JobTimeline class="tw-mt-10" />
    <TechStackSection class="tw-mt-10" />
  </q-page>
</template>

<script setup lang="ts">
import HeroSection from 'src/components/HeroSection.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
import JobTimeline from 'src/components/JobTimeline.vue';
import TechStackSection from 'src/components/TechStackSection.vue';
</script>
