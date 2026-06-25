<template>
  <div class="rows">
    <div v-for="(r, i) in combo.rows" :key="i" class="row">
      <span class="rk">{{ String(i + 1).padStart(2, '0') }}</span>
      <div class="rmain">
        <div class="rname">
          {{ pick(r.n, lang) }}
          <span v-if="r.chip" class="chip" :class="r.chip.t">{{ pick(r.chip.l, lang) }}</span>
        </div>
        <div class="rmeta">{{ pick(r.meta, lang) }}</div>
        <div class="rbar"><i :style="{ width: widths[i] }"></i></div>
      </div>
      <div class="rstats">
        <div class="rstat"><div class="rstat-v">{{ r.v }}</div><div class="rstat-k">{{ ui.yield }}</div></div>
        <div class="rstat"><div class="rstat-v">{{ r.co2 }}</div><div class="rstat-k">{{ ui.co2 }}</div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import type { Lang } from '@/plugins/i18n/i18n'
import type { RankCombo } from '@/data/demoData'
import { pick, UI } from '@/data/demoUi'

const props = defineProps<{ combo: RankCombo; lang: Lang }>()

const ui = computed(() => UI[props.lang === 'en' ? 'en' : 'de'])
const widths = ref<string[]>(props.combo.rows.map(() => '0%'))
let raf = 0

function animate() {
  widths.value = props.combo.rows.map(() => '0%')
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      widths.value = props.combo.rows.map((r) => r.w + '%')
    })
  )
}

watch(() => props.combo, animate, { immediate: true })
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>
