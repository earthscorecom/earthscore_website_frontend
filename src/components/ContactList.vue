<template>
  <div class="space-y-6">
    <a class="flex items-center space-x-2" href="tel:+49(0)2238 4784075">
      <CallIcon class="text-2xl"></CallIcon>
      <span class="text-xl transition-all hover:font-medium"> +49 (0)2238 4784075</span></a
    >
    <a class="flex items-center space-x-2" href="mailto:info@earthscore.com">
      <PostIcon class="text-2xl"></PostIcon>
      <span class="text-xl transition-all hover:font-medium"> info@earthscore.com</span></a
    >
  </div>
</template>
<script setup lang="ts">
import CallIcon from '@/components/icons/CallIcon.vue'
import PostIcon from '@/components/icons/PostIcon.vue'
</script>
