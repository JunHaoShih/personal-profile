<template>
  <router-view />
</template>

<script setup lang="ts">
import { useDarkMode } from 'src/stores/darkModeStore';
import { watch } from 'vue';

const darkStore = useDarkMode();

watch(() => darkStore.isDark, (isDark) => {
  const body = document.querySelector('#root-body');
  if (!body) {
    return;
  }
  if (isDark && !body.classList.contains('tw-dark')) {
    body.classList.add('tw-dark');
  } else if (!isDark && body.classList.contains('tw-dark')) {
    body.classList.remove('tw-dark');
  }
}, {
  immediate: true,
});
</script>
