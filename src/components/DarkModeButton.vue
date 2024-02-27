<template>
  <!-- dark mode button -->
  <q-btn round class="before:tw-shadow-none">
    <template v-slot:default>
      <q-avatar
        size="30px"
        :icon="darkMode.isDark ? 'dark_mode' : 'light_mode'"
        :class="darkMode.isDark ? 'tw-text-primary-600' : 'tw-text-amber-600'"
        :dark="darkMode.isDark"
      >
        <q-menu :dark="darkMode.isDark">
          <q-list
            class="tw-bg-white tw-text-gray-900 dark:tw-bg-stone-800 dark:tw-text-stone-300"
          >
            <q-item
              v-for="theme in themes"
              v-bind:key="theme.mode"
              clickable v-close-popup
              @click="theme.onClick"
            >
              <q-item-section avatar>
                <q-icon :class="theme.icon.class" :name="theme.icon.name" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  {{ $t(theme.name) }}
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon
                  v-if="theme.mode === darkMode.colorTheme"
                  name="check"
                  color="green"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-avatar>
    </template>
  </q-btn>
</template>

<script setup lang="ts">
import { ThemeMode, useDarkMode } from 'src/stores/darkModeStore';

const darkMode = useDarkMode();

interface ThemeAction {
  mode: ThemeMode,
  icon: {
    class: string,
    name: string,
  },
  name: string,
  onClick: () => void,
}

const themes: ThemeAction[] = [
  {
    mode: 'light',
    icon: {
      name: 'light_mode',
      class: 'tw-text-amber-600',
    },
    name: 'themes.light',
    onClick: () => {
      darkMode.colorTheme = 'light';
    },
  },
  {
    mode: 'dark',
    icon: {
      name: 'dark_mode',
      class: 'tw-text-primary-600',
    },
    name: 'themes.dark',
    onClick: () => {
      darkMode.colorTheme = 'dark';
    },
  },
  {
    mode: 'system',
    icon: {
      name: 'sync',
      class: 'tw-text-green-600',
    },
    name: 'themes.system',
    onClick: () => {
      darkMode.colorTheme = 'system';
    },
  },
];
</script>
