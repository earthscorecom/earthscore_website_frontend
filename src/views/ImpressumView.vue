<template>
  <div class="min-h-[92vh] flex items-start mt-20 box mx-auto sm:px-6 md:px-16">
    <div class="grid md:grid-cols-2 w-full pt-2 sm:pt-10 gap-4">
      <div class="order-last md:order-first pt-4 pb-20 md:pb-0 md:pt-0 px-6 sm:px-0">
        <h1 class="text-[32px] mb-8 leading-[35px]">Impressum</h1>
        <div class="text-base mb-6">
          <p>WhatsGreen Research & Science GmbH</p>
          <p>Rommerskirchener Str. 21</p>
          <p>Walzwerk Atelier 65</p>
          <p>50259 Pulheim</p>
          <p>Deutschland</p>
        </div>

        <div class="text-base mb-6">
          <p>Telefon: +49 (0)223 4786954 (Zentrale)</p>
          <p>Email: info@earthscore.com</p>
        </div>

        <div class="text-base">
          <p>Registergericht: AG Köln</p>
          <p>Registernummer: HRB 112686</p>
          <p>Geschäftsführer: Manuel Mattern</p>
          <p>USt-ID: DE358475907</p>
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
import Img from '@/assets/img/impressum.png'
</script>
