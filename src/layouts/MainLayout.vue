<template>
  <q-layout view="hHh lpR fFf">

    <q-header
      elevated
      class="tw-bg-slate-100 dark:tw-bg-slate-900 tw-text-gray-900 dark:tw-text-slate-200
        dark:tw-bg-opacity-75 dark:tw-backdrop-blur-sm"
      height-hint="98">
      <q-toolbar>
        <div class="tw-grow" />

        <q-tabs align="center" class="tw-hidden sm:tw-block">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs>
        <div class="tw-grow" />

        <!-- dark mode button -->
        <DarkModeButton />
        <LanguageButton />
      </q-toolbar>
    </q-header>

    <q-page-container
      class="tw-bg-slate-50 dark:tw-bg-slate-800 tw-text-gray-900 dark:tw-text-slate-200"
    >
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import DarkModeButton from 'src/components/DarkModeButton.vue';
import LanguageButton from 'src/components/LanguageButton.vue';
</script>
