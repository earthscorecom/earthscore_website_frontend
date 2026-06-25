<template>
  <section class="section kontakt" id="kontakt">
    <div class="inner">
      <div class="kontakt-grid">
        <div class="k-pitch">
          <div class="eyebrow"><span class="eyebrow-line"></span><span>{{ t('kontakt.eyebrow') }}</span></div>
          <h2>{{ t('kontakt.h2') }}</h2>
          <p>{{ t('kontakt.p') }}</p>
          <ul class="k-trust">
            <li v-for="k in ['kontakt.t1', 'kontakt.t2', 'kontakt.t3']" :key="k">
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#dbeafe"></circle><path d="M6 10.2l2.6 2.6L14 7.4" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span>{{ t(k) }}</span>
            </li>
          </ul>
        </div>

        <WalkthroughForm />

        <div class="k-contact">
          <a class="k-ci" href="mailto:contact@earthscore.com">
            <span class="k-ci-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
            <span class="k-ci-t"><span class="k-ci-k">{{ t('kontakt.ciEmail') }}</span><span class="k-ci-v">contact@earthscore.com</span></span>
          </a>
          <a class="k-ci" href="tel:+4922384784075">
            <span class="k-ci-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg></span>
            <span class="k-ci-t"><span class="k-ci-k">{{ t('kontakt.ciPhone') }}</span><span class="k-ci-v">+49 (0) 2238 478 40 75</span></span>
          </a>
          <div class="k-ci k-ci--static">
            <span class="k-ci-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></span>
            <span class="k-ci-t"><span class="k-ci-k">{{ t('kontakt.ciStudio') }}</span><span class="k-ci-v">Rommerskirchener Str. 21 · 50259 Pulheim</span></span>
          </div>
          <div class="k-ci k-ci--static">
            <span class="k-ci-ic"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
            <span class="k-ci-t"><span class="k-ci-k">{{ t('kontakt.ciHours') }}</span><span class="k-ci-v">{{ t('kontakt.ciHoursV') }}</span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import WalkthroughForm from '@/components/WalkthroughForm.vue'
const { t } = useI18n()
</script>
