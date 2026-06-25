import { createI18n, type MessageResolver } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

export const LANG_KEY = 'es_lang'
export const SUPPORTED = ['de', 'en'] as const
export type Lang = (typeof SUPPORTED)[number]

export function isLang(v: unknown): v is Lang {
  return v === 'de' || v === 'en'
}

const saved = localStorage.getItem(LANG_KEY)
const initial: Lang = isLang(saved) ? saved : 'de'

export const i18n = createI18n({
  legacy: false,
  locale: initial,
  fallbackLocale: 'de',
  // Several marketing strings intentionally carry inline markup (rendered via v-html).
  warnHtmlMessage: false,
  // Our locale files use flat, dotted keys (e.g. "nav.wert") rather than nested
  // objects — a literal lookup keeps keys like "feat.badge" and "feat.badge.soon"
  // from colliding under the default path resolver.
  messageResolver: ((obj: Record<string, unknown>, key: string) =>
    obj && typeof obj === 'object' && key in obj ? obj[key] : null) as MessageResolver,
  messages: { de, en }
})

document.documentElement.setAttribute('lang', initial)
