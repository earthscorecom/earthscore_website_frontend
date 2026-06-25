<template>
  <div v-if="modalOpen" class="cc-scrim" @click="closeModal"></div>

  <!-- Banner -->
  <div v-if="bannerOpen" class="cc-banner" role="dialog" aria-modal="false" aria-label="Cookie-Hinweis">
    <div class="cc-banner-in">
      <div class="cc-banner-text">
        <div class="cc-banner-h">{{ t('cc.h') }}</div>
        <p v-html="t('cc.body')"></p>
      </div>
      <div class="cc-banner-actions">
        <button type="button" class="cc-btn cc-btn--ghost" @click="rejectAll">{{ t('cc.reject') }}</button>
        <button type="button" class="cc-btn cc-btn--ghost" @click="openModal">{{ t('cc.settings') }}</button>
        <button type="button" class="cc-btn cc-btn--primary" @click="acceptAll">{{ t('cc.acceptall') }}</button>
      </div>
    </div>
  </div>

  <!-- Settings modal -->
  <div v-if="modalOpen" class="cc-modal" role="dialog" aria-modal="true" aria-label="Cookie-Einstellungen">
    <div class="cc-modal-head">
      <div class="cc-modal-h">{{ t('cc.title') }}</div>
      <button type="button" class="cc-x" :aria-label="t('cc.title')" @click="closeModal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
    </div>
    <div class="cc-modal-body">
      <div class="cc-cat">
        <div class="cc-cat-top">
          <div class="cc-cat-h">{{ t('cc.cat.necessary') }}</div>
          <span class="cc-locked">{{ t('cc.always') }}</span>
        </div>
        <p>{{ t('cc.necessary.d') }}</p>
      </div>
      <div v-for="cat in categories" :key="cat.id" class="cc-cat">
        <div class="cc-cat-top">
          <div class="cc-cat-h">{{ t(cat.title) }}</div>
          <label class="cc-switch">
            <input type="checkbox" v-model="draft[cat.id]" />
            <span class="cc-track"></span>
          </label>
        </div>
        <p>{{ t(cat.desc) }}</p>
      </div>
    </div>
    <div class="cc-modal-foot">
      <button type="button" class="cc-btn cc-btn--ghost" @click="rejectAll">{{ t('cc.rejectall') }}</button>
      <button type="button" class="cc-btn cc-btn--secondary" @click="saveSelection">{{ t('cc.save') }}</button>
      <button type="button" class="cc-btn cc-btn--primary" @click="acceptAll">{{ t('cc.acceptall') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCookieConsent } from '@/composables/useCookieConsent'

const { t } = useI18n()
const { openTrigger } = useCookieConsent()

const STORAGE_KEY = 'es_cookie_consent_v1'
type Cat = 'statistik' | 'marketing' | 'medien'

const categories: { id: Cat; title: string; desc: string }[] = [
  { id: 'statistik', title: 'cc.cat.statistik', desc: 'cc.statistik.d' },
  { id: 'marketing', title: 'cc.cat.marketing', desc: 'cc.marketing.d' },
  { id: 'medien', title: 'cc.cat.medien', desc: 'cc.medien.d' }
]

const bannerOpen = ref(false)
const modalOpen = ref(false)
const draft = reactive<Record<Cat, boolean>>({ statistik: false, marketing: false, medien: false })

type Consent = Record<Cat, boolean>

function read(): Consent | null {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
  } catch {
    return null
  }
}

function applyConsent(c: Consent) {
  // Go-live: load the real tags only after opt-in, e.g.
  //   if (c.statistik) loadGoogleAnalytics()
  //   if (c.marketing) loadLinkedInInsight()
  //   if (c.medien) enableGoogleMaps()
  window.dispatchEvent(new CustomEvent('es-consent', { detail: c }))
}

function save(c: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...c, ts: new Date().toISOString() }))
  } catch {
    /* ignore */
  }
  applyConsent(c)
}

function decide(c: Consent) {
  save(c)
  bannerOpen.value = false
  modalOpen.value = false
}

const acceptAll = () => decide({ statistik: true, marketing: true, medien: true })
const rejectAll = () => decide({ statistik: false, marketing: false, medien: false })
const saveSelection = () => decide({ ...draft })

function openModal() {
  const c = read()
  categories.forEach((cat) => (draft[cat.id] = !!c?.[cat.id]))
  modalOpen.value = true
}

function closeModal() {
  modalOpen.value = false
}

onMounted(() => {
  const stored = read()
  if (stored) applyConsent(stored)
  else bannerOpen.value = true
})

watch(openTrigger, () => openModal())
</script>
