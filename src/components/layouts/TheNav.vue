<template>
  <nav class="nav" :class="{ scrolled, 'nav--hidden': hidden }">
    <a href="#top" class="brand" @click="closeMenu">
      <img class="brand-logo" :src="logoDark" alt="EarthScore" />
      <img class="brand-mark-img" :src="logoMark" alt="EarthScore" />
    </a>
    <div class="nav-links">
      <a
        v-for="l in links"
        :key="l.id"
        :href="`#${l.id}`"
        :class="{ active: activeId === l.id }"
        >{{ t(l.key) }}</a
      >
    </div>
    <div class="nav-right">
      <LanguageSwitcher />
      <a :href="appLinks.login" class="nav-signin">{{ t('nav.signin') }}</a>
      <a :href="appLinks.signup" class="lp-btn lp-btn--primary lp-btn--nav">{{ t('cta.start') }}</a>
    </div>
    <button
      type="button"
      class="nav-burger"
      :aria-expanded="menuOpen"
      :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
      @click="toggleMenu"
    >
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="nav-mobile" :hidden="!menuOpen" @click="onMobileClick">
    <a v-for="l in links" :key="l.id" :href="`#${l.id}`">{{ t(l.key) }}</a>
    <div class="nav-mobile-actions">
      <div class="nav-mobile-lang">
        <div class="nav-mobile-langdd">
          <LanguageSwitcher />
        </div>
      </div>
      <a :href="appLinks.login" class="lp-btn lp-btn--secondary lp-btn--block">{{ t('nav.signin') }}</a>
      <a :href="appLinks.signup" class="lp-btn lp-btn--primary lp-btn--block">{{ t('cta.start') }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { appLinks } from '@/config/appLinks'
import logoDark from '@/assets/logo/earthscore-2026-dark.svg'
import logoMark from '@/assets/logo/earthscore-2026-mark.svg'

const { t } = useI18n()

const links = [
  { id: 'wert', key: 'nav.wert' },
  { id: 'demo-root', key: 'nav.demo' },
  { id: 'plattform', key: 'nav.plattform' },
  { id: 'features', key: 'nav.features' },
  { id: 'pricing', key: 'nav.pricing' }
]

const scrolled = ref(false)
const hidden = ref(false)
const activeId = ref<string | null>(null)
const menuOpen = ref(false)
let lastY = 0

function onScroll() {
  const y = window.scrollY
  scrolled.value = y > 8
  const smart = window.innerWidth <= 920
  if (smart && !menuOpen.value) {
    if (y > 120 && y > lastY + 4) hidden.value = true
    else if (y < lastY - 4 || y < 120) hidden.value = false
  } else {
    hidden.value = false
  }
  lastY = y

  // scroll-spy: last section whose top is above the offset line
  const pos = y + 140
  let current: string | null = null
  for (const l of links) {
    const el = document.getElementById(l.id)
    if (el && el.getBoundingClientRect().top + y <= pos) current = l.id
  }
  activeId.value = current
}

function toggleMenu() {
  menuOpen.value ? closeMenu() : openMenu()
}
function openMenu() {
  menuOpen.value = true
  hidden.value = false
  document.body.style.overflow = 'hidden'
}
function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}
function onMobileClick(e: MouseEvent) {
  if ((e.target as HTMLElement).closest('a:not(.lp-btn--secondary):not(.lp-btn--primary), a')) {
    // close after navigating to an anchor or pressing a CTA
    if ((e.target as HTMLElement).closest('a')) closeMenu()
  }
}

function onResize() {
  if (window.innerWidth > 1040) closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = ''
})
</script>
