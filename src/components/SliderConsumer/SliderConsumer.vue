<template>
  <div id="slider-consumer">
    <div class="hidden lg:block">
      <SliderDesktop :contentList="contentList"></SliderDesktop>
    </div>
    <div class="lg:hidden">
      <SliderMobile :contentList="contentList"></SliderMobile>
    </div>
  </div>
</template>
<script setup lang="ts">
import SliderDesktop from './components/SliderDesktop.vue'
import SliderMobile from './components/SliderMobile.vue'
import Img1 from '@/assets/img/B2B_1.svg'
import Img2 from '@/assets/img/B2B_2.svg'
import Img3 from '@/assets/img/B2B_3.svg'
import Img4 from '@/assets/img/B2B_4.svg'
import Img5 from '@/assets/img/B2B_5.svg'
import ImgMobi1 from '@/assets/img/b2b-mob-1.svg'
import ImgMobi2 from '@/assets/img/b2b-mob-2.svg'
import ImgMobi3 from '@/assets/img/b2b-mob-3.svg'
import ImgMobi4 from '@/assets/img/b2b-mob-4.svg'
import ImgMobi5 from '@/assets/img/b2b-mob-5.svg'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const contentList = computed(() => [
  {
    name: t('homePage.screen5.item1.title'),
    img: Img1,
    imgMobi: ImgMobi1,
    className: 'min-w-[250px]',
    text: t('homePage.screen5.item1.text')
  },
  {
    name: t('homePage.screen5.item2.title'),
    img: Img2,
    imgMobi: ImgMobi2,
    className: 'min-w-[250px]',
    text: t('homePage.screen5.item2.text')
  },
  {
    name: t('homePage.screen5.item3.title'),
    img: Img3,
    imgMobi: ImgMobi3,
    className: 'min-w-[550px]',
    text: t('homePage.screen5.item3.text')
  },
  {
    name: t('homePage.screen5.item4.title'),
    img: Img4,
    imgMobi: ImgMobi4,
    className: 'min-w-[150px]',
    text: t('homePage.screen5.item4.text')
  },
  {
    name: t('homePage.screen5.item5.title'),
    img: Img5,
    imgMobi: ImgMobi5,
    className: 'min-w-[180px]',
    text: t('homePage.screen5.item5.text')
  }
])
</script>
