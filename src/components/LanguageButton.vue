<template>
  <q-btn round>
    <template v-slot:default>
      <q-avatar
        size="30px"
        icon="language"
        :dark="darkMode.isDark"
      >
        <q-menu :dark="darkMode.isDark">
          <q-list
            class="tw-bg-white tw-text-gray-900 dark:tw-bg-stone-800 dark:tw-text-stone-300"
          >
            <q-item
              v-for="language in languages"
              v-bind:key="language.lang"
              clickable v-close-popup
              @click="setLanguage(language.lang)"
            >
              <q-item-section>
                <q-item-label>
                  {{ $t(language.name) }}
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon
                  v-if="language.lang === i18n.locale.value"
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
import { useI18n } from 'vue-i18n';
import { useDarkMode } from 'src/stores/darkModeStore';

const darkMode = useDarkMode();

const i18n = useI18n();

interface LanguageAction {
  lang: string,
  name: string,
}

const languages: LanguageAction[] = [
  {
    lang: 'en-US',
    name: 'languages.enUS',
  },
  {
    lang: 'zh-TW',
    name: 'languages.zhTW',
  },
];

function setLanguage(lang: string) {
  i18n.locale.value = lang;
}
</script>
