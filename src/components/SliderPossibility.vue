<template>
  <div class="grid grid-cols-1 slider-possibility-lg:grid-cols-4 z-20 py-12 md:py-16">
    <h2 class="headline mb-8 px-6 sm:px-8 lg:px-16">
      {{ t('homePage.screen7.title') }}
    </h2>
    <div class="col-span-3">
      <swiper
        @init="init"
        :spaceBetween="30"
        :key="Number(isSmallScreen)"
        :allowTouchMove="isSmallScreen"
        :speed="500"
        :slidesPerView="isSmallScreen ? 1 : 1.1"
      >
        <swiper-slide v-for="(item, i) in list" :key="i" v-slot="{ isActive }">
          <div class="grid grid-cols-1 lg:grid-cols-3 z-20">
            <div class="w-full col-span-3 relative">
              <div
                :style="{ 'background-image': 'url(' + item.img + ')' }"
                class="hidden md:block h-[377px] lg:h-[390px] bg-cover bg-center rounded-md"
              ></div>
              <div
                :style="{ 'background-image': 'url(' + item.imgMob + ')' }"
                class="h-[377px] bg-cover bg-no-repeat bg-center rounded-md md:hidden"
              ></div>
              <span class="invisible h-0">{{ swiperInstance && swiperInstance.activeIndex }}</span>
              <div
                v-if="swiperInstance"
                :key="swiperInstance.activeIndex"
                class="fixed right-[24px] sm:right-[36px] lg:right-[10px] mt-5 space-x-5"
              >
                <span v-for="(_, btnIndex) in list" :key="btnIndex">
                  <button
                    @click="onClikcBtn(btnIndex)"
                    v-if="isSmallScreen ? btnIndex !== list.length : btnIndex !== list.length - 1"
                    class="text-xl"
                    :class="{
                      'text-primary-A300 font-medium': swiperInstance.activeIndex === btnIndex,
                      'text-black-N70 transition-all hover:text-black-N900':
                        swiperInstance.activeIndex !== btnIndex
                    }"
                  >
                    0{{ btnIndex + 1 }}
                  </button>
                </span>
              </div>
              <p
                :class="{ invisible: !isActive }"
                class="uppercase text-[18px] md:text-[32px] leading-[21px] font-medium md:font-light lg:my-4 mb-3 mt-16 lg:mt-12 slider-possibility-content"
              >
                {{ item.title }}
              </p>
              <p :class="{ invisible: !isActive }" class="text-base slider-possibility-content">
                {{ item.text }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

// import stores
import { useWidth } from '@/composables/useWidth'

// import components
import SliderImg1 from '@/assets/img/B2C_1.svg'
import SliderImg2 from '@/assets/img/B2C_2.svg'
import SliderImg3 from '@/assets/img/B2C_3.svg'
import SliderImg4 from '@/assets/img/B2C_4.svg'
import SliderImgMob1 from '@/assets/img/b2c-mob-1.svg'
import SliderImgMob2 from '@/assets/img/b2c-mob-2.svg'
import SliderImgMob3 from '@/assets/img/b2c-mob-3.svg'
import SliderImgMob4 from '@/assets/img/b2c-mob-4.svg'

const { t } = useI18n({ useScope: 'global' })

const list = computed(() => {
  const items = [
    {
      title: t('homePage.screen7.item1.title'),
      text: t('homePage.screen7.item1.text'),
      img: SliderImg1,
      imgMob: SliderImgMob1
    },
    {
      title: t('homePage.screen7.item2.title'),
      text: t('homePage.screen7.item2.text'),
      img: SliderImg2,
      imgMob: SliderImgMob2
    },
    {
      title: t('homePage.screen7.item3.title'),
      text: t('homePage.screen7.item3.text'),
      img: SliderImg3,
      imgMob: SliderImgMob3
    },
    {
      title: t('homePage.screen7.item4.title'),
      text: t('homePage.screen7.item4.text'),
      img: SliderImg4,
      imgMob: SliderImgMob4
    }
  ]

  if (!isSmallScreen.value) {
    items.push({
      title: t('homePage.screen7.item4.title'),
      text: t('homePage.screen7.item4.text'),
      img: SliderImg4,
      imgMob: SliderImgMob4
    })
  }

  return items
})

const swiperInstance = ref()
const activeIndex = ref(0)
const { screenWidth } = useWidth()

const isSmallScreen = computed(() => screenWidth.value < 1075)

const init = (e: any) => {
  swiperInstance.value = e
}

const onClikcBtn = (index: number) => {
  activeIndex.value = index
  swiperInstance.value.slideTo(index)
}
</script>
<style>
@media (min-width: 1075px) {
  .slider-possibility-lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .slider-possibility-content {
    padding-left: 1.5rem; /* 24px */
    padding-right: 1.5rem; /* 24px */
  }
}

@media (min-width: 641px) and (max-width: 1023px) {
  .slider-possibility-content {
    padding-left: 2rem; /* 32px */
    padding-right: 2rem; /* 32px */
  }
}

@media (min-width: 1024px) and (max-width: 1074px) {
  .slider-possibility-content {
    padding-left: 4rem; /* 64px */
    padding-right: 4rem; /* 64px */
  }
}

@media (min-width: 1075px) {
  .slider-possibility-content {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
