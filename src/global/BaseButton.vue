<template>
  <button
    :class="[
      'text-base font-semibold hover:opacity-90 bg-black-N900 hover:bg-primary-A500 border hover:border border-black-N10 hover:border-primary-A500 p-1 rounded-full uppercase transition-all duration-200',
      btnClass
    ]"
  >
    <span>{{ title }}</span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    btnClass?: string
  }>(),
  {
    title: 'Button',
    btnClass: ''
  }
)
</script>
