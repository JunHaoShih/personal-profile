<template>
  <div
    ref="gradientPanelRef"
    class="tw-absolute tw-inset-0 tw-z-50"
    :style="gradientStyle"
  />
</template>

<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core';
import { computed, ref } from 'vue';

const gradientPanelRef = ref<HTMLDivElement>();

const { elementX, elementY } = useMouseInElement(gradientPanelRef);

const gradientStyle = computed(
  () => `background: radial-gradient(300px at ${elementX.value}px ${elementY.value}px, rgba(29, 78, 216, 0.15), transparent 80%);`,
);
</script>
