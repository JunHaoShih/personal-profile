<template>
  <div
    class="tw-px-5 md:tw-max-w-2xl"
  >
    <div class="tw-text-center tw-pb-10">
      <h2
        class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white
        sm:tw-text-4xl lg:tw-text-5xl"
      >
        {{ $t('main.experience') }}
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
          {{ $t(job.name) }}
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
          {{ toYearMonthFormat(job.from) }} - {{ job.to ? toYearMonthFormat(job.to) : 'Present' }}
        </time>
        <ul class="tw-list-disc tw-space-y-4">
          <li class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">
            {{ job.description }}
          </li>
          <li class="tw-text-base tw-font-normal tw-text-gray-500 dark:tw-text-gray-400">
            {{ job.description }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface Job {
  name: string,
  from: Date,
  to?: Date,
  description: string,
}

const i18n = useI18n();

function toYearMonthFormat(date: Date) {
  return date.toLocaleDateString(i18n.locale.value, {
    year: 'numeric',
    month: '2-digit',
  });
}

const jobs = ref<Job[]>([
  {
    name: 'main.jobs.leantec.name',
    from: new Date('2022-07-01T00:00:00'),
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    name: 'Place holder',
    from: new Date('2021-06-01T00:00:00'),
    to: new Date('2022-06-01T00:00:00'),
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    name: 'Place holder',
    from: new Date('2016-03-01T00:00:00'),
    to: new Date('2021-05-01T00:00:00'),
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
  {
    name: 'Place holder',
    from: new Date('2015-03-01T00:00:00'),
    to: new Date('2016-03-01T00:00:00'),
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
  },
]);
</script>
