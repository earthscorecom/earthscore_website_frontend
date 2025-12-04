<template>
  <div>
    <CookieSettings
      :img-cookie="ImgCookie"
      :title="t('cookie.cookie_settings')"
      @is-open="($evt: boolean) => toggleModalCookie($evt)"
    />
    <BaseModal
      :is-visible="showModalCookie"
      :title="t('cookie.this_website_uses_cookies')"
      @close="toggleModalCookie"
    >
      <template #header>
        <div class="mr-2">
          <LocaleLanguageSwitcher />
        </div>
      </template>
      <template #default>
        <CookieConfigModal @close="toggleModalCookie" />
      </template>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
// import libraries and references
import { useI18n } from 'vue-i18n'

// import stores
import { useCookies } from '@/composables/useCookies'

// import components
import CookieSettings from '@/global/CookieSettings.vue'
import BaseModal from '@/global/BaseModal.vue'
import ImgCookie from '@/assets/img/cookie.svg'
import CookieConfigModal from './components/CookieConfigModal.vue'
import LocaleLanguageSwitcher from './components/LocaleLanguageSwitcher.vue'

const { t } = useI18n({ useScope: 'global' })
const { showModalCookie, toggleModalCookie } = useCookies()
</script>
