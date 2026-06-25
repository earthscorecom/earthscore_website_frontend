<template>
  <header class="hero" id="top">
    <div class="hero-wrap">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-line"></span><span>{{ t('hero.eyebrow') }}</span></div>
        <h1 class="hero-h1" v-html="t('hero.h1')"></h1>
        <p class="hero-sub" v-html="t('hero.sub')"></p>
        <div class="hero-cta">
          <a :href="appLinks.signup" class="lp-btn lp-btn--primary lp-btn--lg">{{ t('cta.start') }}</a>
          <a href="#demo-root" class="lp-btn lp-btn--secondary lp-btn--lg" v-html="t('hero.cta2')"></a>
        </div>
        <div class="mig-strip"><span class="bar"></span><span class="deflag deflag--sm"></span><span>{{ t('hero.mig') }}</span></div>
      </div>

      <div class="visual">
        <div style="position:relative;margin:18px 0 44px">
          <span class="agent-node"><span class="agent-pulse"></span><span>{{ t('hero.agentnode') }}</span></span>
          <div ref="mock" class="mock" :class="{ 'is-in': inView }">
            <div class="mock-head">
              <div class="mock-head-l">
                <span class="mock-icn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg></span>
                <div><div class="mock-title">{{ t('mock.title') }}</div><div class="mock-sub scanline" v-html="t('mock.sub')"></div></div>
              </div>
              <span class="badge-live"><span class="dot"></span>Live</span>
            </div>
            <div class="mock-body">
              <div v-for="row in hotspots" :key="row.rank" class="hsrow">
                <div class="hs-l">
                  <span class="hs-rank">{{ row.rank }}</span>
                  <div>
                    <div class="hs-name">{{ t(row.name) }}</div>
                    <div class="hs-tag"><span class="hs-cat">{{ t(row.cat) }}</span><span>{{ t(row.tag) }}</span></div>
                  </div>
                </div>
                <div class="hs-bar"><i :style="{ '--w': row.w }"></i></div>
                <div class="hs-val">{{ row.val }}</div>
              </div>
            </div>
            <div class="mock-foot"><span class="mock-foot-l">{{ t('mock.total') }}</span><span class="mock-foot-v">€935k<span class="yr">{{ t('mock.peryear') }}</span></span></div>
          </div>
          <div class="peek">
            <div class="match-card">
              <div class="match-stripe"></div>
              <div class="match-in">
                <div class="match-top"><span class="chip waste">{{ t('chip.waste') }}</span><span class="match-score">93% Match</span></div>
                <div class="match-name">{{ t('peek.name') }}</div>
                <div class="match-metrics"><span class="mm-qty">2.400 kg</span><span class="mm-co2">~4,8 t CO₂</span></div>
                <div class="match-meta">{{ t('peek.meta') }}</div>
                <span class="match-cta" v-html="t('peek.cta')"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { appLinks } from '@/config/appLinks'

const { t } = useI18n()

const hotspots = [
  { rank: '01', name: 'mock.h1', cat: 'mock.c1', tag: 'mock.t1', w: '94%', val: '€480k' },
  { rank: '02', name: 'mock.h2', cat: 'mock.c2', tag: 'mock.t2', w: '72%', val: '€220k' },
  { rank: '03', name: 'mock.h3', cat: 'mock.c3', tag: 'mock.t3', w: '55%', val: '€140k' },
  { rank: '04', name: 'mock.h4', cat: 'mock.c4', tag: 'mock.t4', w: '40%', val: '€95k' }
]

const mock = ref<HTMLElement | null>(null)
const inView = ref(false)
let io: IntersectionObserver | null = null

onMounted(() => {
  if (!mock.value) return
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          inView.value = true
          io?.disconnect()
        }
      })
    },
    { threshold: 0.2 }
  )
  io.observe(mock.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>
