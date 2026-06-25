<template>
  <section class="makro">
    <svg class="makro-net" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 620" fill="none" aria-hidden="true">
      <g stroke="rgba(52,211,153,.22)" stroke-width="1">
        <path d="M120 90 L300 180 L210 330 L120 90Z" /><path d="M300 180 L520 120 L640 260 L520 120" />
        <path d="M640 260 L520 410 L210 330 L640 260" /><path d="M640 260 L860 200 L1000 340 L860 200" />
        <path d="M860 200 L820 420 L1000 340" /><path d="M520 410 L820 420" />
        <path d="M1000 340 L1120 500" /><path d="M820 420 L700 560 L520 410" />
      </g>
      <g fill="rgba(255,255,255,.5)">
        <circle cx="120" cy="90" r="3" /><circle cx="300" cy="180" r="3" /><circle cx="520" cy="120" r="3" /><circle cx="210" cy="330" r="3" />
        <circle cx="520" cy="410" r="3" /><circle cx="1000" cy="340" r="3" /><circle cx="700" cy="560" r="3" /><circle cx="1120" cy="500" r="3" />
      </g>
      <g fill="#34d399"><circle cx="640" cy="260" r="4.5" /><circle cx="860" cy="200" r="4.5" /><circle cx="820" cy="420" r="4" /></g>
    </svg>
    <div class="makro-inner">
      <div>
        <div class="kicker"><span class="dot"></span><span>{{ t('makro.kicker') }}</span></div>
        <div class="makro-eyebrow"><span class="l"></span><span>{{ t('makro.eyebrow') }}</span></div>
        <h2 v-html="t('makro.h2')"></h2>
        <p v-html="t('makro.p1')"></p>
        <p v-html="t('makro.p2')"></p>
      </div>
      <div class="pillars">
        <div class="pillar"><div class="pillar-h"><span class="pillar-n">01</span><span class="pillar-t">{{ t('makro.p1t') }}</span></div><div class="pillar-d">{{ t('makro.p1d') }}</div></div>
        <div class="pillar"><div class="pillar-h"><span class="pillar-n">02</span><span class="pillar-t">{{ t('makro.p2t') }}</span></div><div class="pillar-d">{{ t('makro.p2d') }}</div></div>
        <div class="pillar"><div class="pillar-h"><span class="pillar-n">03</span><span class="pillar-t">{{ t('makro.p3t') }}</span></div><div class="pillar-d">{{ t('makro.p3d') }}</div></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
