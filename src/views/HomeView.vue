<template>
  <!-- FIRST BLOCK -->
  <div class="box mx-auto">
    <div
      :style="{ 'background-image': 'url(' + BgImg1 + ')' }"
      class="w-full h-[784px] flex flex-col justify-center items-center bg-cover bg-center transition-all duration-300 ease-in-out"
    >
      <span class="inline-block text-center"
        ><img class="md:h-[272px] h-[165px] w-[215px] md:w-[373px]" :src="ImgLogo" alt="Logo"
      /></span>
      <span
        class="uppercase text-[11.1px] md:text-[19.3px] text-center font-bold w-[215px] md:w-[373px] whitespace-nowrap"
        >{{ t('homePage.screen1.subtitle') }}</span
      >
      <button
        type="button"
        @click="toBlock('contact-form', screenWidth > 768 ? 95 : 200)"
        class="rounded-md transition-all bg-primary-A300 active:bg-primary-A600 hover:font-medium text-white mt-12 px-4 py-2"
      >
        {{ t('homePage.screen1.btn') }}
      </button>
      <!-- <div class="absolute bottom-[20px] left-[4px]">
        <CookieConfigs />
      </div> -->
    </div>
    <!-- SECOND BLOCK -->
    <div class="pt-12 pb-[72px] md:pt-32 md:pb-[226px] px-6 sm:px-8 lg:px-16" id="mission">
      <span class="block text-primary-A300 text-base font-medium md:text-xl mb-3 uppercase">{{
        t('homePage.screen2.title')
      }}</span>
      <p class="text-[22px] md:text-[32px] md:leading-[40px]">
        {{ t('homePage.screen2.text') }}
      </p>
    </div>
    <!-- THIRD BLOCK -->
    <div id="our-solutions" class="grid grid-cols-1 lg:grid-cols-3 lg:border border-gray-950">
      <div class="bg-primary-A300 px-6 sm:px-8 lg:px-16 pb-[72px] lg:pb-[142px]">
        <div class="lg:h-[220px] pt-12 lg:pt-0 flex items-start flex-col justify-end">
          <p class="text-white text-base md:text-xl uppercase pb-4">
            {{ t('homePage.screen3.block1.title') }}
          </p>
          <p class="headline text-white">{{ t('homePage.screen3.block1.subtitle') }}:</p>
        </div>
        <p class="text-base text-white pb-4 pt-4">
          {{ t('homePage.screen3.block1.text') }}
        </p>
      </div>
      <div
        class="px-6 sm:px-8 lg:px-16 pb-[72px] bg-white flex flex-col items-start relative border-y border-x-0 lg:border-y-0 lg:border-x border-gray-950"
      >
        <div class="lg:h-[220px] pt-12 lg:pt-0 flex items-end">
          <p class="headline">
            {{ t('homePage.screen3.block2.title') }}
          </p>
        </div>
        <p class="text-base pb-4 pt-4">
          {{ t('homePage.screen3.block2.text') }}
        </p>
        <button
          @click="toBlock('slider-consumer', screenWidth > 768 ? 95 : 200)"
          class="flex items-center space-x-3 mt-9 lg:absolute group lg:bottom-[15%] lg:-translate-y-[-57%]"
        >
          <DownIcon
            class="text-primary-A300 text-[32px] md:text-[56px] transition-all group-hover:rotate-0 rotate-[-90deg]"
          ></DownIcon>
          <span
            class="text-base md:text-xl transition-all group-hover:text-primary-A300 group-hover:font-medium"
          >
            {{ t('homePage.screen3.btn') }}</span
          >
        </button>
      </div>
      <div class="px-6 sm:px-8 flex flex-col lg:px-16 pb-[72px] bg-white items-start relative">
        <div class="lg:h-[220px] pt-12 lg:pt-0 flex items-end">
          <p class="headline">
            {{ t('homePage.screen3.block3.title') }}
          </p>
        </div>
        <p class="text-base pb-4 pt-4">
          {{ t('homePage.screen3.block3.text') }}
        </p>
        <button
          @click="toBlock('slider-possibility', screenWidth > 768 ? 95 : 200)"
          class="flex items-center space-x-3 mt-9 lg:absolute group lg:bottom-[15%] lg:-translate-y-[-57%]"
        >
          <DownIcon
            class="text-primary-A300 text-[32px] md:text-[56px] transition-all group-hover:rotate-0 rotate-[-90deg]"
          ></DownIcon>
          <span
            class="text-base md:text-xl transition-all group-hover:text-primary-A300 group-hover:font-medium"
          >
            {{ t('homePage.screen3.btn') }}</span
          >
        </button>
      </div>
    </div>
    <!-- FOUR BLOCK -->
    <div
      id="slider-consumer"
      :style="{ 'background-image': 'url(' + BgImg2 + ')' }"
      class="w-full h-[784px] flex flex-col justify-end bg-cover bg-bottom md:bg-center px-6 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-16"
    >
      <div class="max-w-[930px] text-white">
        <p class="headline">
          {{ t('homePage.screen4.title') }}
        </p>
        <p class="headline">
          {{ t('homePage.screen4.subtitle') }}
        </p>
      </div>
      <div class="w-full text-white">
        <p class="text-base font-medium uppercase pt-4">
          {{ t('homePage.screen4.text') }}
        </p>
      </div>
    </div>
    <!-- FOUR FIVE -->
    <SliderConsumer></SliderConsumer>
    <!-- SIX BLOCK -->
    <div
      id="slider-possibility"
      :style="{ 'background-image': 'url(' + BgImg3 + ')' }"
      class="w-full h-[784px] flex flex-col justify-end bg-cover bg-bottom md:bg-center px-6 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-16"
    >
      <div class="box text-white">
        <div class="text-white max-w-[838px]">
          <p class="headline">{{ t('homePage.screen6.title') }} <br /></p>
          <p class="headline">
            {{ t('homePage.screen6.subtitle') }}
          </p>
        </div>
        <p class="w-full text-base font-medium uppercase pt-4">
          {{ t('homePage.screen6.text') }}
        </p>
      </div>
    </div>
    <!-- SEVEN BLOCK -->
    <SliderPossibility></SliderPossibility>
    <!-- EIGHT  BLOCK -->
    <h3 class="headline px-6 sm:px-8 lg:px-16 py-12" id="slider-team">
      {{ t('homePage.screen8.title') }}
    </h3>
    <SliderTeam></SliderTeam>
    <!-- NINE  BLOCK -->
    <div
      class="px-6 sm:px-8 lg:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-4"
      id="viewport-contact-form"
    >
      <div class="flex flex-col" id="contact-form">
        <h2 class="headline">{{ t('homePage.screen9.title') }}</h2>
        <p class="text-xl mt-5">{{ t('homePage.screen9.subtitle') }}</p>
        <div class="mt-10 md:mt-20 mb-10">
          <ContactList></ContactList>
        </div>
      </div>
      <div>
        <ContactForm></ContactForm>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { useI18n } from 'vue-i18n'

// import stores
import { useWidth } from '@/composables/useWidth'

// import components
import { toBlock } from '@/utils/toBlock'
import BgImg1 from '@/assets/img/full-screen-1.svg'
import BgImg2 from '@/assets/img/full-screen-2.svg'
import BgImg3 from '@/assets/img/full-screen-3.svg'
import ImgLogo from '@/assets/img/main-logo.svg'
import DownIcon from '@/components/icons/DownIcon.vue'
import ContactForm from '@/components/ContactForm.vue'
import ContactList from '@/components/ContactList.vue'
import SliderConsumer from '@/components/SliderConsumer/SliderConsumer.vue'
import SliderTeam from '@/components/SliderTeam/SliderTeam.vue'
import SliderPossibility from '@/components/SliderPossibility.vue'

const { t } = useI18n({ useScope: 'global' })
const { screenWidth } = useWidth()
</script>
