<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <img class="footer-logo" :src="logoWhite" alt="EarthScore" />
          <div class="footer-tagline">{{ t('footer.tagline') }}</div>
          <div class="footer-contact">
            <a href="mailto:contact@earthscore.com">contact@earthscore.com</a>
            <span>Pulheim, Deutschland</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>{{ t('footer.product') }}</h4>
          <ul>
            <li><a href="#wert">{{ t('nav.wert') }}</a></li>
            <li><a href="#demo-root">{{ t('nav.demo') }}</a></li>
            <li><a href="#plattform">{{ t('nav.plattform') }}</a></li>
            <li><a href="#pricing">{{ t('nav.pricing') }}</a></li>
            <li><a href="#kontakt">{{ t('footer.contact') }}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>{{ t('footer.legal') }}</h4>
          <ul>
            <li><RouterLink to="/impressum">{{ t('footer.imprint') }}</RouterLink></li>
            <li><RouterLink to="/datenschutz">{{ t('footer.privacy') }}</RouterLink></li>
            <li><RouterLink to="/agb">{{ t('footer.agb') }}</RouterLink></li>
            <li><a href="#" @click.prevent="openSettings">{{ t('footer.cookie') }}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 WhatsGreen Research &amp; Science GmbH · EarthScore · Pulheim</span>
        <LanguageSwitcher up />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useCookieConsent } from '@/composables/useCookieConsent'
import logoWhite from '@/assets/logo/earthscore-2026-white.svg'

const { t } = useI18n()
const { openSettings } = useCookieConsent()
</script>
