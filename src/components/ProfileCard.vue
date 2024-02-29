<template>
  <section class="tw-w-full">
    <div
      class="tw-gap-8 tw-items-center tw-py-8 tw-px-4 tw-mx-auto tw-max-w-screen-xl
      xl:tw-gap-16 md:tw-grid md:tw-grid-cols-2 sm:tw-py-16 lg:tw-px-6"
    >
      <img
        class="tw-w-full tw-rounded-full"
        src="https://avatars.githubusercontent.com/u/17137300?v=4"
        alt="dashboard image"
      />
      <div class="tw-mt-4 md:tw-mt-0">
        <h2
          class="tw-mb-4 tw-text-3xl tw-tracking-tight tw-font-extrabold tw-text-white
          sm:tw-text-4xl"
        >
          {{ $t('main.profile.title') }}
        </h2>
        <p
          class="tw-mb-6 tw-font-light tw-text-gray-400 md:tw-text-lg"
        >
          I should put some description about myself
        </p>
        <div class="tw-grid tw-grid-cols-1 xl:tw-grid-cols-2 tw-gap-4">
          <div
            v-for="info in personalInfos"
            v-bind:key="info.name"
            class="tw-flex tw-flex-row tw-items-center tw-gap-x-2"
          >
            <q-icon :name="info.icon" class="tw-text-white" />
            <div class="tw-text-white dark:tw-text-white">
              {{ info.name }}
            </div>
            <div class="tw-text-gray-400 dark:tw-text-gray-400">
              {{ info.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

interface PersonalInfo {
  icon: string,
  name: string,
  value: string,
}

const birthDate = new Date('1991-06-30T00:00:00');

const age = computed(() => {
  const diffs = new Date().getTime() - birthDate.getTime();
  return new Date(diffs).getUTCFullYear() - 1970;
});

const personalInfos = computed((): PersonalInfo[] => [
  {
    icon: 'location_on',
    name: i18n.t('main.profile.location'),
    value: i18n.t('main.profile.taichung'),
  },
  {
    icon: 'calendar_month',
    name: i18n.t('main.profile.age'),
    value: `${age.value}`,
  },
  {
    icon: 'cake',
    name: i18n.t('main.profile.birthdate'),
    value: birthDate.toLocaleDateString(i18n.locale.value, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
  },
  {
    icon: 'school',
    name: i18n.t('main.profile.school'),
    value: i18n.t('main.profile.ncu'),
  },
]);
</script>
