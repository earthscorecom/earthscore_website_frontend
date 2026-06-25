<template>
  <div ref="root" class="lang-dd" :class="{ 'lang-dd--up': up }">
    <button
      type="button"
      class="lang-dd-btn"
      aria-haspopup="listbox"
      :aria-expanded="open"
      :aria-label="t('nav.language')"
      @click.stop="open = !open"
    >
      <svg class="globe" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" /></svg>
      <span>{{ current.short }}</span>
      <svg class="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    <ul v-show="open" class="lang-dd-menu" role="listbox">
      <li
        v-for="l in langs"
        :key="l.code"
        class="lang-opt"
        role="option"
        :aria-selected="l.code === locale"
        @click="select(l.code)"
      >
        <span class="lang-check">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5" /></svg>
        </span>
        <span class="lang-name">{{ l.label }}</span>
        <span class="lang-code">{{ l.short }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Lang } from '@/plugins/i18n/i18n'

defineProps<{ up?: boolean }>()

const { t, locale } = useI18n()

const langs: { code: Lang; short: string; label: string }[] = [
  { code: 'de', short: 'DE', label: 'Deutsch' },
  { code: 'en', short: 'EN', label: 'English' }
]

const current = computed(() => langs.find((l) => l.code === locale.value) ?? langs[0])
const open = ref(false)
const root = ref<HTMLElement | null>(null)

function select(code: Lang) {
  locale.value = code
  open.value = false
}

function onDocClick(e: MouseEvent) {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>
