<template>
  <div class="min-h-[92vh] flex items-start mt-20 box mx-auto sm:px-6 md:px-16">
    <div class="grid md:grid-cols-2 w-full pt-2 sm:pt-10 gap-4">
      <div class="order-last md:order-first pt-4 pb-20 md:pb-0 md:pt-0 px-6 sm:px-0">
        <h1 class="text-[32px] mb-8 leading-[35px]">{{ t('imprint.title') }}</h1>
        <div class="text-base mb-6">
          <p>WhatsGreen Research & Science GmbH</p>
          <p>Rommerskirchener Str. 21</p>
          <p>50259 Pulheim</p>
          <p>Deutschland</p>
        </div>

        <div class="text-base mb-6">
          <p>{{ t('imprint.phone') }}: +49 (0)2238 4784075 ({{ t('imprint.headquarters') }})</p>
          <p>{{ t('imprint.email') }}: info@earthscore.com</p>
        </div>

        <div class="text-base">
          <p>{{ t('imprint.register') }}: AG Köln</p>
          <p>{{ t('imprint.register_number') }}: HRB 112686</p>
          <p>{{ t('imprint.head') }}: Manuel Mattern</p>
          <p>{{ t('imprint.identification_number') }}: DE358475907</p>
        </div>
      </div>
      <div
        :style="{ 'background-image': 'url(' + Img + ')' }"
        class="h-[445px] bg-cover bg-center sm:rounded-[4px]"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { useI18n } from 'vue-i18n'

// import stores

// import components
import Img from '@/assets/img/impressum.svg'

const { t } = useI18n({ useScope: 'global' })
</script>
