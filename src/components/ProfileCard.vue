<template>
  <section class="tw-bg-white dark:tw-bg-gray-900">
    <div
      class="tw-gap-8 tw-items-center tw-py-8 tw-px-4 tw-mx-auto tw-max-w-screen-xl
      xl:tw-gap-16 md:tw-grid md:tw-grid-cols-2 sm:py-16 lg:px-6"
    >
      <img
        class="tw-w-full dark:tw-hidden"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
        alt="dashboard image"
      />
      <img
        class="tw-w-full tw-hidden dark:tw-block"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
        alt="dashboard image"
      />
      <div class="tw-mt-4 md:tw-mt-0">
        <h2
          class="tw-mb-4 tw-text-4xl tw-tracking-tight tw-font-extrabold tw-text-gray-900
          dark:tw-text-white"
        >
          About me!
        </h2>
        <p
          class="tw-mb-6 tw-font-light tw-text-gray-500 md:tw-text-lg dark:text-gray-400"
        >
          I should put some description about myself
        </p>
        <div class="tw-grid tw-grid-cols-2 tw-gap-4">
          <div
            v-for="info in personalInfos"
            v-bind:key="info.name"
            class="tw-flex tw-flex-row tw-items-center tw-gap-x-2"
          >
            <q-icon :name="info.icon" />
            <div class="tw-text-gray-900 dark:tw-text-white">
              {{ info.name }}
            </div>
            <div class="tw-text-gray-500 dark:tw-text-gray-400">
              {{ info.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface PersonalInfo {
  icon: string,
  name: string,
  value: string,
}

const age = computed(() => {
  const diffs = new Date().getTime() - new Date('1991-06-30T00:00:00').getTime();
  return new Date(diffs).getUTCFullYear() - 1970;
});

const personalInfos = ref<PersonalInfo[]>([
  {
    icon: 'location_on',
    name: 'Location:',
    value: 'Taichung',
  },
  {
    icon: 'calendar_month',
    name: 'Age:',
    value: `${age.value}`,
  },
  {
    icon: 'cake',
    name: 'Birth date',
    value: '1991, 6, 30',
  },
  {
    icon: 'school',
    name: 'School',
    value: 'National Central University',
  },
]);
</script>
