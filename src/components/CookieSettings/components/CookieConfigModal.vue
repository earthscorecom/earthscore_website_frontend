<template>
  <div :class="reSizeBlockModal">
    <div>
      <p class="text-xs">
        {{ t('cookie.text_descriptions') }}
        <span>
          <router-link :to="{ name: 'privacy-policy' }" class="underline text-primary-A300">
            {{ t('cookie.privacy_policy') }}
          </router-link>
        </span>
      </p>
      <div class="mt-2">
        <div v-for="(value, key, index) in preferences" :key="index" class="gap-3">
          <BaseCheckbox v-model="preferences[key]" :label="t(`cookie.${key}`)" :value="value" />
        </div>
      </div>
    </div>
    <div class="flex gap-3 justify-center items-center mt-4">
      <BaseButton
        :title="hasRightSaveCookies ? t('cookie.btn_save_close') : t('cookie.btn_accept_all')"
        btn-class="text-xs p-2"
        @click="hasRightSaveCookies ? saveCookies() : setAll()"
      />
      <BaseButton
        :title="t('cookie.btn_decline_all')"
        btn-class="text-xs p-2"
        @click="declineAll"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/global/BaseButton.vue'
import BaseCheckbox from '@/global/BaseCheckbox.vue'

const { t } = useI18n({ useScope: 'global' })

export type CookieOptions = {
  necessary: boolean
  performance: boolean
  targeting: boolean
  functionality: boolean
  unclassified: boolean
  date: string
}
export type CookiePreferences = Omit<CookieOptions, 'date'>

const emit = defineEmits<{
  (event: 'close'): void
}>()

const preferences = reactive<CookiePreferences>({
  necessary: false,
  performance: false,
  targeting: false,
  functionality: false,
  unclassified: false
})

const hasRightSaveCookies = computed<boolean>(() => Object.values(preferences).includes(true))
const reSizeBlockModal = computed<string>(() =>
  localStorage.getItem('lang') === 'en' ? 'w-72' : 'w-80'
)

const getConsent = (): void => {
  const cookies: string | null = localStorage.getItem('STORAGE_KEY')
  if (cookies) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { date, ...rest } = JSON.parse(cookies)
    Object.assign(preferences, rest)
  }
}
const setAllToWithKeys = (value: boolean): void => {
  const keys = Object.keys(preferences) as (keyof CookiePreferences)[]

  keys.forEach((key) => {
    preferences[key] = value
  })
}
const setAll = (): void => {
  setAllToWithKeys(true)
}
const saveCookies = (): void => {
  const cookies: CookieOptions = { ...preferences, date: new Date().toISOString() }
  localStorage.setItem('STORAGE_KEY', JSON.stringify(cookies))
  emit('close')
}
const declineAll = (): void => {
  setAllToWithKeys(false)
  localStorage.removeItem('STORAGE_KEY')
}

onMounted((): void => {
  getConsent()
})
</script>
