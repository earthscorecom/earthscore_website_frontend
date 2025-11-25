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
        <form class="space-y-4" @submit.prevent>
          <div v-for="(value, key, index) in preferences" :key="index" class="gap-3">
            <BaseCheckbox
              :model-value="preferences[key]"
              :label="t(`cookie.${key}`)"
              :disabled="index === 0"
              :value="value"
              :active-class="index === 0 ? 'bg-primary-A300 opacity-40' : 'bg-primary-A300'"
              @update:modelValue="
                ($evt: CheckboxValue) => changeValue($evt as boolean, key as KeyPreferences)
              "
            />
          </div>
        </form>
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
// import libraries and references
import { onMounted, reactive, computed, watch, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useForm } from 'vee-validate'

// import stores
import { useLanguage } from '@/composables/useLanguage'
import en from '@/plugins/i18n/locales/en.json'
import de from '@/plugins/i18n/locales/de.json'

// import components
import BaseButton from '@/global/BaseButton.vue'
import BaseCheckbox from '@/global/BaseCheckbox.vue'
import type { CheckboxValue } from '@/global/BaseCheckbox.vue'

const { localLanguage, changeLocalLanguage } = useLanguage()

const messages = {
  en: en,
  de: de
}

const { t, locale } = useI18n({
  messages,
  useScope: 'local',
  locale: localStorage.getItem('lang')
})

type CookieOptions = {
  necessary: boolean
  performance: boolean
  targeting: boolean
  functionality: boolean
  unclassified: boolean
  date: string
}
type CookiePreferences = Omit<CookieOptions, 'date'>
type CookiePreferencesWithoutNecessary = Omit<CookiePreferences, 'necessary'>
type KeyPreferences = 'performance' | 'targeting' | 'functionality' | 'unclassified'

const emit = defineEmits<{
  (event: 'close'): void
}>()

const preferences = reactive<CookiePreferences>({
  necessary: true,
  performance: false,
  targeting: false,
  functionality: false,
  unclassified: false
})

const { meta } = useForm({
  initialValues: preferences as CookiePreferences
})

const preferencesReducedObject = computed<CookiePreferencesWithoutNecessary>(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { necessary, ...rest } = preferences
  return rest
})
const hasRightSaveCookies = computed<boolean>(
  () => Object.values(preferencesReducedObject.value).includes(true) || meta.value.dirty
)
const reSizeBlockModal = computed<string>(() => (locale.value === 'en' ? 'w-72' : 'w-80'))

const getConsent = (): void => {
  const cookies: string | null = localStorage.getItem('STORAGE_KEY')
  if (cookies) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { date, ...rest } = JSON.parse(cookies)
    Object.assign(preferences, rest)
  }
}
const setAllToWithKeys = (value: boolean): void => {
  const keys = Object.keys(
    preferencesReducedObject.value
  ) as (keyof CookiePreferencesWithoutNecessary)[]

  keys.forEach((key) => {
    preferences[key] = value
  })
}

const saveCookies = (): void => {
  const cookies: CookieOptions = { ...preferences, date: new Date().toISOString() }
  localStorage.setItem('STORAGE_KEY', JSON.stringify(cookies))
  emit('close')
}
const setAll = (): void => {
  setAllToWithKeys(true)
  saveCookies()
}
const declineAll = (): void => {
  setAllToWithKeys(false)
  localStorage.removeItem('STORAGE_KEY')
  emit('close')
}

const changeValue = (value: boolean, key: KeyPreferences): void => {
  preferences[key] = value
  meta.value.dirty = true
}
const setLocalLanguage = () => {
  const lang: string | null = localStorage.getItem('lang')
  changeLocalLanguage(lang as string)
}

onMounted((): void => {
  getConsent()
  setLocalLanguage()
})
onUnmounted((): void => {
  setLocalLanguage()
})

watch(
  () => localLanguage.value,
  () => {
    locale.value = localLanguage.value
  }
)
</script>
