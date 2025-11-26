<template>
  <div class="grid grid-cols-8 justify-items-center items-center w-full">
    <div></div>
    <div class="col-span-6 grid grid-col-3 xl:grid-cols-5 gap-8 items-center justify-items-center">
      <div
        class="h-[271px] w-[271px] sm:h-[344px] sm:w-[344px] col-span-3 xl:col-span-2 bg-center bg-cover rounded-md"
        :style="{ 'background-image': 'url(' + img + ')' }"
      ></div>
      <div class="md:px-4 hidden sm:block col-span-3">
        <div>
          <h5 class="text-[28px]">{{ name }}</h5>
          <p class="text-base text-primary-A300 uppercase">{{ position }}</p>
          <p class="text-base font-medium">{{ deskPosition }}</p>
        </div>
        <p v-if="isActive" class="mt-8 min-h-[200px]">
          {{ text }}
        </p>
      </div>
    </div>
    <div></div>
  </div>
  <div class="px-6 mt-5 sm:hidden min-h-[480px]">
    <h5 class="text-[28px]">{{ name }}</h5>
    <p class="text-base text-primary-A300 uppercase">{{ position }}</p>
    <p class="text-base font-medium">{{ deskPosition }}</p>
    <p v-if="isActive" class="mt-10">
      {{ text }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  name: string
  position: string
  deskPosition: string
  text: string
  img: string
  isActive: boolean
}>()

defineEmits(['click-prev', 'click-next'])
</script>

<style>
.next,
.swiper-rtl .prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.next,
.swiper-rtl .prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.prev,
.next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
}

.prev,
.swiper-rtl .next {
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}

#slider-team .swiper-wrapper {
  display: flex;
  align-items: start;
}
</style>
