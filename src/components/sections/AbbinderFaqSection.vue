<template>
  <section class="abbinder" id="cta">
    <div class="abbinder-inner">
      <h2>Der nächste Industrieerfolg entsteht nicht durch <span class="accent">mehr Produktion</span>. Sondern durch <span class="accent">kluge Vernetzung</span> des Bestehenden.</h2>
      <p class="abbinder-sub">EarthScore ist die Plattform, auf der diese Vernetzung passiert. Kostenlos einsteigen — ohne Bindung, ohne Risiko.</p>
      <div class="abbinder-cta">
        <a :href="appLinks.signup" class="lp-btn lp-btn--primary lp-btn--lg">{{ t('cta.start') }}</a>
        <a href="#kontakt" class="lp-btn lp-btn--secondary lp-btn--lg">20-Minuten-Walkthrough buchen <span class="btn-arrow">→</span></a>
      </div>
      <div class="faq">
        <div class="faq-head">{{ t('faq.head') }}</div>
        <details v-for="(f, i) in faqs" :key="f.q" class="faq-item" :open="i === 0">
          <summary><span>{{ t(f.q) }}</span><span class="ic"></span></summary>
          <div class="faq-a">{{ t(f.a) }}</div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { appLinks } from '@/config/appLinks'

const { t } = useI18n()

const faqs = [
  { q: 'faq.q1', a: 'faq.a1' },
  { q: 'faq.q2', a: 'faq.a2' },
  { q: 'faq.q3', a: 'faq.a3' },
  { q: 'faq.q4', a: 'faq.a4' },
  { q: 'faq.q5', a: 'faq.a5' },
  { q: 'faq.q6', a: 'faq.a6' }
]
</script>
