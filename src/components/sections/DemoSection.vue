<template>
  <div id="demo-root">
    <section class="section">
      <div class="inner">
        <div class="s-head">
          <div class="eyebrow"><span class="eyebrow-line"></span>{{ ui.eyebrow }}</div>
          <h2>{{ ui.h2a }}<span class="accent">{{ ui.h2b }}</span>{{ ui.h2c }}</h2>
          <p>{{ ui.sub }}</p>
        </div>

        <div class="frame">
          <div class="frame-controls">
            <div>
              <div class="ctl-label">{{ ui.branche }}</div>
              <div class="seg" role="tablist">
                <button
                  v-for="x in DEMO.industries"
                  :key="x.id"
                  :class="{ on: x.id === ind }"
                  @click="ind = x.id"
                >
                  {{ pick(x.label, lang) }}<span class="sub">{{ pick(x.sub, lang) }}</span>
                </button>
              </div>
            </div>
            <div>
              <div class="ctl-label">{{ ui.feature }}</div>
              <div class="pills">
                <button
                  v-for="f in DEMO.features"
                  :key="f.id"
                  class="pill"
                  :class="{ on: f.id === feat }"
                  @click="feat = f.id"
                >
                  <span class="pdot"></span>{{ pick(f.label, lang) }}
                </button>
              </div>
            </div>
          </div>

          <div class="result">
            <div class="r-head">
              <div>
                <div class="r-title">{{ pick(combo.title, lang) }}</div>
                <div class="r-context">{{ pick(combo.context, lang) }}</div>
              </div>
              <span class="badge" :class="`badge--${badge.variant}`">{{ pick(badge.label, lang) }}</span>
            </div>
            <DemoSimulation v-if="feat === 'effect'" :key="ind + feat" :combo="effectCombo" :lang="lang" />
            <DemoRankRows v-else :key="ind + feat" :combo="rankCombo" :lang="lang" />
          </div>

          <div class="frame-foot">
            <span class="note">{{ ui.note }}</span>
            <a :href="appLinks.signup" class="lp-btn lp-btn--ghost">{{ ui.cta }} <span class="btn-arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Lang } from '@/plugins/i18n/i18n'
import { DEMO, type EffectCombo, type RankCombo } from '@/data/demoData'
import { pick, UI } from '@/data/demoUi'
import { appLinks } from '@/config/appLinks'
import DemoRankRows from './demo/DemoRankRows.vue'
import DemoSimulation from './demo/DemoSimulation.vue'

const { locale } = useI18n()
const lang = computed<Lang>(() => (locale.value === 'en' ? 'en' : 'de'))
const ui = computed(() => UI[lang.value])

const ind = ref('mfg')
const feat = ref('blueprint')

const combo = computed(() => DEMO.data[ind.value][feat.value])
const rankCombo = computed(() => combo.value as RankCombo)
const effectCombo = computed(() => combo.value as EffectCombo)
const badge = computed(() => DEMO.badges[feat.value])
</script>
