<template>
  <div>
    <CookieSettings
      :img-cookie="ImgCookie"
      :title="t('cookie.cookie_settings')"
      @is-open="toggleModal"
    />
    <BaseModal
      :is-visible="showModal"
      :title="t('cookie.this_website_uses_cookies')"
      @close="toggleModal"
    >
      <template #header>
        <div class="mr-2">
          <LocaleLanguageSwitcher />
        </div>
      </template>
      <template #default>
        <CookieConfigModal @close="toggleModal" />
      </template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
// import libraries and references
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// import stores
import { useLanguage } from '@/composables/useLanguage'
import en from '@/plugins/i18n/locales/en.json'
import de from '@/plugins/i18n/locales/de.json'

// import components
import CookieSettings from '@/global/CookieSettings.vue'
import BaseModal from '@/global/BaseModal.vue'
import ImgCookie from '@/assets/img/cookie.svg'
import CookieConfigModal from './CookieConfigModal.vue'
import LocaleLanguageSwitcher from './LocaleLanguageSwitcher.vue'

const { localLanguage } = useLanguage()

const messages = {
  en: en,
  de: de
}

const { t, locale } = useI18n({
  messages,
  useScope: 'local',
  locale: localStorage.getItem('lang')
})

const showModal = ref<boolean>(false)

const toggleModal = (): void => {
  showModal.value = !showModal.value
}

watch(
  () => localLanguage.value,
  () => {
    locale.value = localLanguage.value
  }
)
</script>
