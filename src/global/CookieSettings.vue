<template>
  <div
    class="flex items-center rounded-full gap-2 cursor-pointer text-white text-sm w-[34.5pt] h-[34.5pt] bg-black-N900 whitespace-nowrap transition-all duration-300 ease-in-out"
    :class="{ 'pr-0 lg:pr-2 w-[34.5pt] lg:w-full ': isHovered }"
    @mouseenter="onHover(true)"
    @mouseleave="onHover(false)"
    @click="$emit('isOpen', true)"
  >
    <img :src="imgCookie" alt="Cookie" />
    <div
      class="opacity-0 text-base uppercase"
      :class="{
        'opacity-100 invisible lg:visible transition-all duration-300 ease-in-out min-w-max':
          isHovered,
        invisible: !isHovered
      }"
    >
      {{ title }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    title?: string
    imgCookie?: string
  }>(),
  {
    title: 'Cookie settings',
    imgCookie: ''
  }
)
defineEmits<{
  (event: 'isOpen', value: boolean): void
}>()

const isHovered = ref<boolean>(false)

const onHover = (val: boolean): void => {
  isHovered.value = val
}
</script>
