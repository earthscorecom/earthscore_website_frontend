<template>
  <div>
    <nav class="legal-nav">
      <RouterLink to="/" aria-label="EarthScore — Startseite">
        <img class="brand-logo" :src="logoDark" alt="EarthScore" />
      </RouterLink>
      <div class="legal-nav-r">
        <LanguageSwitcher />
        <RouterLink to="/" class="legal-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          <span>{{ locale === 'en' ? 'Back to homepage' : 'Zurück zur Startseite' }}</span>
        </RouterLink>
      </div>
    </nav>

    <div ref="content" @click="onClick" v-html="html"></div>

    <footer class="legal-foot">
      <span>© 2026 WhatsGreen Research &amp; Science GmbH · EarthScore</span><span class="sep">·</span>
      <RouterLink to="/impressum" :class="{ 'is-current': current === 'impressum' }">{{ t('footer.imprint') }}</RouterLink><span class="sep">·</span>
      <RouterLink to="/datenschutz" :class="{ 'is-current': current === 'datenschutz' }">{{ t('footer.privacy') }}</RouterLink><span class="sep">·</span>
      <RouterLink to="/agb" :class="{ 'is-current': current === 'agb' }">{{ t('footer.agb') }}</RouterLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import logoDark from '@/assets/logo/earthscore-2026-dark.svg'
import '@/assets/css/legal.css'

defineProps<{ html: string; current: 'impressum' | 'datenschutz' | 'agb' }>()

const { t, locale } = useI18n()
const router = useRouter()
const content = ref<HTMLElement | null>(null)
let cleanupSpy: (() => void) | null = null

// Mirror legal-i18n.js: show only the data-lang-block matching the current language.
function applyLang() {
  content.value?.querySelectorAll<HTMLElement>('[data-lang-block]').forEach((el) => {
    el.hidden = el.getAttribute('data-lang-block') !== locale.value
  })
}

// Scroll-spy for the docs-style TOC (.legal-wrap.has-toc .pagetoc a) — sets .on.
function setupSpy() {
  cleanupSpy?.()
  const root = content.value
  if (!root) return
  const spies: { wrap: HTMLElement; recompute: () => void }[] = []
  const observers: IntersectionObserver[] = []

  root.querySelectorAll<HTMLElement>('.legal-wrap.has-toc').forEach((wrap) => {
    const links = Array.from(wrap.querySelectorAll<HTMLAnchorElement>('.pagetoc a'))
    if (!links.length) return
    const sections = links
      .map((a) => ({ a, t: document.getElementById((a.getAttribute('href') || '').slice(1)) }))
      .filter((s): s is { a: HTMLAnchorElement; t: HTMLElement } => !!s.t)
    if (!sections.length) return

    const recompute = () => {
      let active = sections[0].a
      for (const s of sections) if (s.t.getBoundingClientRect().top <= 150) active = s.a
      const se = document.scrollingElement || document.documentElement
      if (se.scrollHeight - se.clientHeight - se.scrollTop <= 2) active = sections[sections.length - 1].a
      links.forEach((l) => l.classList.toggle('on', l === active))
    }
    const io = new IntersectionObserver(() => recompute(), { rootMargin: '-150px 0px -65% 0px', threshold: [0, 1] })
    sections.forEach((s) => io.observe(s.t))
    observers.push(io)
    spies.push({ wrap, recompute })
    recompute()
  })

  const onScroll = () => spies.forEach((sp) => !sp.wrap.hidden && sp.recompute())
  window.addEventListener('scroll', onScroll, { passive: true })
  cleanupSpy = () => {
    window.removeEventListener('scroll', onScroll)
    observers.forEach((io) => io.disconnect())
  }
}

// Keep internal navigation inside the SPA; honour the "German version" toggle link.
function onClick(e: MouseEvent) {
  const a = (e.target as HTMLElement).closest('a')
  if (!a) return
  if (a.hasAttribute('data-lang-toggle')) {
    e.preventDefault()
    locale.value = 'de'
    return
  }
  const href = a.getAttribute('href') || ''
  if (href.startsWith('/')) {
    e.preventDefault()
    router.push(href)
  }
}

async function refresh() {
  await nextTick()
  applyLang()
  setupSpy()
}

onMounted(refresh)
watch(locale, () => {
  applyLang()
  nextTick(() => setupSpy())
})
onBeforeUnmount(() => cleanupSpy?.())
</script>
