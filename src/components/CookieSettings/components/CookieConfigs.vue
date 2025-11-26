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
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// import stores

// import components
import CookieSettings from '@/global/CookieSettings.vue'
import BaseModal from '@/global/BaseModal.vue'
import ImgCookie from '@/assets/img/cookie.svg'
import CookieConfigModal from './CookieConfigModal.vue'
import LocaleLanguageSwitcher from './LocaleLanguageSwitcher.vue'

const { t } = useI18n({ useScope: 'global' })

const showModal = ref<boolean>(false)

const toggleModal = (): void => {
  showModal.value = !showModal.value
}
</script>
