<template>
  <section class="section credits" id="credits">
    <div class="inner">
      <div class="s-head center">
        <div class="eyebrow"><span class="eyebrow-line"></span><span>{{ t('credits.eyebrow') }}</span></div>
        <h2 v-html="t('credits.h2')"></h2>
        <p>{{ t('credits.sub') }}</p>
      </div>
      <div class="credits-grid">
        <div class="credits-card">
          <div class="credits-card-head">
            <h3>{{ t('credits.bp.title') }}</h3>
            <span class="credits-card-tag">{{ t('credits.bp.tag') }}</span>
          </div>
          <ul class="credits-list">
            <li><span class="cl-name">Blueprint Light</span><span class="cl-val">~8.000</span></li>
            <li><span class="cl-name">Circular Blueprint Light</span><span class="cl-val">~42.000</span></li>
            <li><span class="cl-name">Circular Blueprint Standard</span><span class="cl-val">~60.000</span></li>
            <li><span class="cl-name">Circular Blueprint Premium</span><span class="cl-val">~85.000</span></li>
            <li><span class="cl-name">Circular Blueprint Enterprise</span><span class="cl-val">~180.000</span></li>
          </ul>
        </div>
        <div class="credits-card">
          <div class="credits-card-head">
            <h3>{{ t('credits.fn.title') }}</h3>
            <span class="credits-card-tag">{{ t('credits.fn.tag') }}</span>
          </div>
          <ul class="credits-list">
            <li><span class="cl-name">{{ t('credits.fn.research') }}</span><span class="cl-val">~50</span></li>
            <li><span class="cl-name">{{ t('credits.fn.agent') }}</span><span class="cl-val">~200</span></li>
            <li><span class="cl-name">{{ t('credits.fn.contact') }}</span><span class="cl-val">~150</span></li>
          </ul>
        </div>
      </div>
      <p class="credits-note">{{ t('credits.note') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
