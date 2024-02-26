<template>
  <div
    class="tw-px-5 md:tw-max-w-2xl"
  >
    <div class="tw-text-center tw-pb-10">
      <h2
        class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white
        sm:tw-text-4xl lg:tw-text-5xl"
      >
        Experiences
      </h2>
    </div>
    <ol
      class="tw-relative tw-border-s tw-border-gray-200 dark:tw-border-gray-700"
    >
      <li
        v-for="(job, index) in jobs"
        v-bind:key="index"
        class="tw-mb-10 tw-ms-6"
      >
        <q-icon
          name="date_range"
          class="tw-absolute tw-w-6 tw-h-6 tw-bg-blue-100 tw-rounded-full -tw-start-3
          tw-ring-white dark:tw-ring-gray-900 dark:tw-bg-blue-900"
        />
        <h3
          class="tw-flex tw-items-center tw-mb-1 tw-text-lg tw-font-semibold tw-text-gray-900
          dark:tw-text-white"
        >
          {{ job.name }}
          <span
            v-if="index === 0"
            class="tw-bg-blue-100 tw-text-blue-800 tw-text-sm tw-font-medium tw-me-2 tw-px-2.5
            tw-py-0.5 tw-rounded dark:tw-bg-blue-900 dark:tw-text-blue-300 tw-ms-3"
          >
            Latest
          </span>
        </h3>
        <time
          class="tw-block tw-mb-2 tw-text-sm tw-font-normal tw-leading-none tw-text-gray-400
          dark:tw-text-gray-500"
        >
          {{ job.dateRange }}
        </time>
        <p
          class="tw-mb-4 tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400"
        >
          {{ job.description }}
        </p>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
interface Job {
  name: string,
  dateRange: string,
  description: string,
}

const jobs: Job[] = [
  {
    name: 'Latest job',
    dateRange: 'From a to b',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    name: 'Place holder',
    dateRange: 'From a to b',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    name: 'Place holder',
    dateRange: 'Ahhh',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    name: 'Place holder',
    dateRange: 'Ahhh',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
];
</script>
