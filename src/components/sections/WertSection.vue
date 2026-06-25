<template>
  <section class="section wert" id="wert">
    <div class="inner">
      <div class="value-grid">
        <div class="value-text">
          <div class="eyebrow"><span class="eyebrow-line"></span><span>{{ t('wert.eyebrow') }}</span></div>
          <h2 v-html="t('wert.h2')"></h2>
          <p class="value-lead">{{ t('wert.lead') }}</p>
          <div class="vblock">
            <h3>{{ t('wert.b1h') }}</h3>
            <p v-html="t('wert.b1p')"></p>
          </div>
          <div class="vblock">
            <h3>{{ t('wert.b2h') }}</h3>
            <p v-html="t('wert.b2p')"></p>
          </div>
          <div class="callout">
            <span class="q"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ea8ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6l-8-4Z" /><path d="m9 12 2 2 4-4" /></svg></span>
            <div class="callout-t"><span class="lead">{{ t('wert.callout-lead') }}</span><span v-html="t('wert.callout-body')"></span></div>
          </div>
        </div>
        <div class="video">
          <div class="video-tag">{{ t('wert.videotag') }}</div>
          <div class="vteaser" aria-hidden="true">
            <div class="vt-head"><span class="vt-dot"></span><span>{{ t('wert.vthead') }}</span></div>
            <div class="vt-rows">
              <div class="vt-row"><span class="vt-l">{{ t('wert.vt1') }}</span><span class="vt-bar"><i></i></span><span class="vt-v">€480k</span></div>
              <div class="vt-row"><span class="vt-l">{{ t('wert.vt2') }}</span><span class="vt-bar"><i></i></span><span class="vt-v">€220k</span></div>
              <div class="vt-row"><span class="vt-l">{{ t('wert.vt3') }}</span><span class="vt-bar"><i></i></span><span class="vt-v">€140k</span></div>
            </div>
          </div>
          <div class="video-meta"><span class="ph">{{ t('wert.soon') }}</span><span>{{ t('wert.videofollows') }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
