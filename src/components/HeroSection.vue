<template>
  <section class="tw-w-full">
    <div class="tw-py-8 tw-px-4 tw-mx-auto tw-max-w-screen-xl tw-text-center lg:py-16 lg:px-12">
      <a href="#"
        class="tw-inline-flex tw-justify-between tw-items-center tw-py-1 tw-px-1 tw-pr-4
        tw-mb-7 tw-text-sm tw-text-gray-700 tw-bg-gray-100 tw-rounded-full dark:tw-bg-gray-800
        dark:tw-text-white hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700"
        role="alert"
      >
        <span
          class="tw-text-xs tw-bg-primary-600 tw-rounded-full tw-text-white tw-px-4 tw-py-1.5
          tw-mr-3"
        >
          New
        </span>
        <span
          class="tw-text-sm tw-font-medium"
        >
          Info! Click!
        </span>
        <svg
          class="tw-ml-2 tw-w-5 tw-h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1
            1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd">
          </path>

        </svg>
      </a>
      <div class="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center">
        <h1
          class="tw-mb-4 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none
          tw-text-orange-500 md:tw-text-5xl lg:tw-text-6xl dark:tw-text-green-500"
        >
          {{ $t('main.name') }}
        </h1>
        <div class="tw-hidden tw-w-4 sm:tw-block" />
        <h1
          class="tw-mb-4 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none
          tw-text-gray-900 md:tw-text-5xl lg:tw-text-6xl dark:tw-text-white"
        >
          {{ $t('main.title') }}
        </h1>
      </div>
      <p
        class="tw-mb-8 tw-text-lg tw-font-normal tw-text-gray-500 lg:tw-text-xl sm:tw-px-16
        xl:tw-px-48 dark:tw-text-gray-400"
      >
        Put some description here
      </p>
    </div>
    <div
      class="tw-flex tw-flex-col tw-mb-8 lg:tw-mb-16 tw-space-y-4 sm:tw-flex-row
      sm:tw-justify-center sm:tw-space-y-0 sm:tw-space-x-4"
    >
      <a
        href="#"
        class="tw-inline-flex tw-justify-center tw-items-center tw-py-3 tw-px-5 tw-text-base
        tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-primary-700
        hover:tw-bg-primary-800 focus:tw-ring-primary-300 dark:focus:tw-ring-primary-900"
      >
        Learn more!
        <q-icon name="arrow_forward"
          class="tw-ml-2 -tw-mr-1 tw-w-5 tw-h-5"
        />
      </a>
      <a
        href="#"
        class="tw-inline-flex tw-justify-center tw-items-center tw-py-3 tw-px-5 tw-text-base
        tw-font-medium tw-text-center tw-text-gray-900 tw-rounded-lg tw-border tw-border-gray-800
        hover:tw-bg-gray-100 focus:tw-ring-gray-100 dark:tw-text-white dark:tw-border-gray-700
        dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-800"
      >
        <q-icon name="info"
          class="tw-mr-2 -tw-ml-1 tw-w-5 tw-h-5"
        />
        Not decided
      </a>
    </div>
  </section>
</template>
