<template>
  <div
    class="bg-black-N700 text-white py-5 px-6 sm:px-8 lg:px-16 md:flex items-center justify-between"
  >
    <div class="flex gap-3 justify-start flex-col md:flex-row items-center flex-wrap">
      <RouterLink :to="{ name: 'home' }" class="flex items-center text-lg">
        <img class="w-10 h-10" :src="ImgLogo" alt="Logo" />
        <span class="pl-2 font-medium">EarhtScore</span>
      </RouterLink>
      <div class="text-base mt-[32px] mb-[48px] md:mt-0 md:mb-0 md:mr-10">
        Copyright © 2024 WhatsGreen GmbH
      </div>
      <div class="space-x-12 md:mr-10">
        <RouterLink
          :to="{ name: 'impressum' }"
          :class="{ 'text-primary-A300 font-medium': route.name === 'impressum' }"
          class="text-base transition-all hover:font-medium"
          >{{ t('footer.link1') }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'privacy-policy' }"
          :class="{ 'text-primary-A300 font-medium': route.name === 'privacy-policy' }"
          class="text-base transition-all hover:font-medium"
          >{{ t('footer.link2') }}</RouterLink
        >
      </div>
    </div>
    <div class="flex items-center justify-center md:justify-normal space-x-5 mt-12 md:mt-0">
      <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
        <div
          :style="{ 'background-image': 'url(' + FooterImg1 + ')' }"
          class="w-[106px] h-[32px] bg-cover bg-center"
        ></div>
      </div>
      <div class="flex justify-center items-center h-[54px] w-[140px] bg-white rounded-md">
        <div
          :style="{ 'background-image': 'url(' + FooterImg2 + ')' }"
          class="w-[77px] h-[54px] bg-cover bg-center"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

// import stores

// import components
import FooterImg1 from '@/assets/img/footer-1.svg'
import FooterImg2 from '@/assets/img/footer-2.svg'
import ImgLogo from '@/assets/img/logo.svg'

const { t } = useI18n({ useScope: 'global' })
const route = useRoute()
</script>
