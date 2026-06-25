<template>
  <div>
    <div class="sim-toprow">
      <div class="slider-ends" style="width:100%;margin-bottom:0">
        <span :class="{ a: t < 0.5 }">{{ ui.before }}</span>
        <span class="sim-state">{{ ui.projection }} <span class="now">{{ pct }}%</span></span>
        <span :class="{ a: t >= 0.5 }" :style="{ color: t >= 0.5 ? 'var(--es-blue)' : '' }">{{ ui.after }}</span>
      </div>
    </div>
    <div class="slider-wrap">
      <input
        type="range"
        min="0"
        max="100"
        :value="pct"
        class="slider"
        :style="{ '--p': pct + '%' }"
        @input="onInput"
      />
    </div>

    <div class="sim-metrics">
      <div v-for="(m, i) in combo.metrics" :key="i" class="metric">
        <div class="metric-k">{{ pick(m.k, lang) }}</div>
        <div class="metric-v">{{ fmtVal(lerp(m.before, m.after, t), m.fmt, lang) }}</div>
        <div class="metric-track"><i :style="{ width: barWidth(m) + '%' }"></i></div>
        <div class="metric-ba">
          <span>{{ ui.metaBefore }} <b>{{ fmtVal(m.before, m.fmt, lang) }}</b></span>
          <span>{{ ui.metaAfter }} <b>{{ fmtVal(m.after, m.fmt, lang) }}</b></span>
        </div>
      </div>
    </div>

    <div class="sim-summary">
      <span class="lbl">{{ ui.simResult }}</span>
      <span class="vals">{{ pick(combo.summary.euro, lang) }} · {{ pick(combo.summary.co2, lang) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import type { Lang } from '@/plugins/i18n/i18n'
import type { EffectCombo, Metric } from '@/data/demoData'
import { fmtVal, lerp, pick, UI } from '@/data/demoUi'

const props = defineProps<{ combo: EffectCombo; lang: Lang }>()

const ui = computed(() => UI[props.lang === 'en' ? 'en' : 'de'])
const t = ref(0)
const pct = computed(() => Math.round(t.value * 100))
let raf = 0

function barWidth(m: Metric) {
  const val = lerp(m.before, m.after, t.value)
  return Math.max(6, (val / m.before) * 100)
}

function onInput(e: Event) {
  cancelAnimationFrame(raf)
  t.value = Number((e.target as HTMLInputElement).value) / 100
}

function run() {
  cancelAnimationFrame(raf)
  t.value = 0
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    t.value = 1
    return
  }
  const start = performance.now()
  const dur = 1100
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / dur)
    t.value = 1 - Math.pow(1 - p, 3)
    if (p < 1) raf = requestAnimationFrame(step)
  }
  raf = requestAnimationFrame(step)
}

watch(() => props.combo, run, { immediate: true })
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>
