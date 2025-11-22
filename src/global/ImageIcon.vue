<template>
  <div :class="classWrap">
    <icon :icon="icon" :rotate="rotate" :width="width" :height="height" :class="classIcon" />
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
withDefaults(
  defineProps<{
    icon?: string
    rotate?: number
    width?: string
    height?: string
    classIcon?: string
    classWrap?: string
  }>(),
  {
    icon: 'heroicons-outline:home',
    rotate: 0,
    width: '',
    height: '',
    classIcon: '',
    classWrap: ''
  }
)
</script>
