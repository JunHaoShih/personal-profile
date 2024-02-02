import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

export type ThemeMode = 'dark' | 'light' | 'system';

export const useDarkMode = defineStore('darkMode', () => {
  const colorTheme = ref<ThemeMode>('system');

  const themeKey = 'defaultTheme';

  const isDark = computed(
    ():boolean => {
      if (colorTheme.value === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return colorTheme.value === 'dark';
    },
  );

  const defaultTheme = localStorage.getItem(themeKey) as ThemeMode | undefined;
  colorTheme.value = defaultTheme || 'system';

  watch(colorTheme, (newValue) => {
    localStorage.setItem(themeKey, newValue);
  });

  return {
    colorTheme,
    isDark,
  };
});
