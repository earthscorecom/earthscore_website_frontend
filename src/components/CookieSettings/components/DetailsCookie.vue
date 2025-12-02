<template>
  <div class="rounded-b-xl overflow-hidden">
    <div class="w-full flex">
      <div
        :class="[
          isActive ? 'bg-white text-black-N900' : 'bg-black-N300 text-white border-black-N300',
          'cursor-pointer basis-1/2 flex justify-center items-center uppercase rounded-tl-lg'
        ]"
        @click="() => (isActive = true)"
      >
        {{ t('cookie.cookie_declaration') }}
      </div>
      <div
        :class="[
          !isActive ? 'bg-white text-black-N900' : 'bg-black-N300 text-white border-black-N300',
          'cursor-pointer basis-1/2 flex justify-center items-center uppercase rounded-tr-lg'
        ]"
        @click="() => (isActive = false)"
      >
        {{ t('cookie.about_cookies') }}
      </div>
    </div>
    <div class="h-48 w-full bg-white text-black-N900 overflow-auto">
      <div v-if="isActive">
        <SortableTable></SortableTable>
      </div>
      <div v-else class="text-xs p-4">
        <p>
          {{ t('cookie.about_cookies_text') }}
        </p>
        <p class="mt-3">
          {{ t('cookie.about_cookies_text2') }}
          <span>
            <router-link
              :to="{ name: 'privacy-policy' }"
              class="underline text-black"
              @click="$emit('isClose')"
            >
              {{ t('cookie.privacy_policy') }}
            </router-link>
          </span>
          .
        </p>
        <p>{{ t('cookie.cookies_consent') }} ID: e6f08ec3-eb93-4cfb-a78f-91d8e22e5b32</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SortableTable from './SortableTable.vue'


const { t } = useI18n({ useScope: 'global' })

defineEmits<{
  (event: 'isClose'): void
}>()
const isActive = ref(true)
</script>
