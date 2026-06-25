<template>
  <RouterView />
  <CookieConsent />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import CookieConsent from './components/CookieConsent.vue'
import { LANG_KEY } from './plugins/i18n/i18n'

const { locale } = useI18n()

// Persist the chosen language (shared with the legal pages) and keep <html lang> in sync.
watch(locale, (lang) => {
  localStorage.setItem(LANG_KEY, lang)
  document.documentElement.setAttribute('lang', lang)
})
</script>
