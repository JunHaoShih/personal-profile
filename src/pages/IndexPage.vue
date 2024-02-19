<template>
  <q-page class="tw-flex tw-flex-col tw-items-center tw-justify-start tw-space-y-10">
    <HeroSection />
    <ProfileCard />
    <JobTimeline />
  </q-page>
</template>

<script setup lang="ts">
import HeroSection from 'src/components/HeroSection.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
import JobTimeline from 'src/components/JobTimeline.vue';
</script>
