import type { Lang } from '@/plugins/i18n/i18n'
import type { Loc } from './demoData'

// UI labels for the interactive demo (ported from demo-app.jsx UI.de/UI.en).
export const UI = {
  de: {
    eyebrow: 'Interaktive Demo',
    h2a: 'Die Plattform, an ',
    h2b: 'Ihrem Beispiel',
    h2c: '.',
    sub: 'Branche wählen, Feature wählen — sehen Sie mit realistischen Beispieldaten, wie EarthScore in Ihrem Kontext arbeitet.',
    branche: 'Ihre Branche',
    feature: 'Feature',
    yield: 'Ertrag / Jahr',
    co2: 'CO₂ vermieden',
    before: 'Vorher · heute',
    after: 'Nachher · nach Umsetzung',
    projection: 'Projektion:',
    metaBefore: 'Vorher',
    metaAfter: 'Nachher',
    simResult: 'Ergebnis nach Umsetzung',
    note: 'Beispieldaten · Ihre Live-Werte sind nach Anmeldung verfügbar',
    cta: 'Mit Ihren Daten starten'
  },
  en: {
    eyebrow: 'Interactive demo',
    h2a: 'The platform, on ',
    h2b: 'your example',
    h2c: '.',
    sub: 'Pick an industry, pick a feature — see with realistic sample data how EarthScore works in your context.',
    branche: 'Your industry',
    feature: 'Feature',
    yield: 'Return / year',
    co2: 'CO₂ avoided',
    before: 'Before · today',
    after: 'After · once implemented',
    projection: 'Projection:',
    metaBefore: 'Before',
    metaAfter: 'After',
    simResult: 'Result once implemented',
    note: 'Sample data · your live figures are available after sign-up',
    cta: 'Start with your data'
  }
} as const

// Pick the localized variant of a { de, en } field, falling back to German.
export function pick(x: Loc | string, lang: Lang): string {
  if (x && typeof x === 'object') return x[lang] ?? x.de
  return x
}

export function fmtVal(x: number, fmt: string, lang: Lang): string {
  const loc = lang === 'en' ? 'en-GB' : 'de-DE'
  if (fmt === 'M') return '€' + (lang === 'en' ? x.toFixed(2) : x.toFixed(2).replace('.', ',')) + ' M'
  if (fmt === 't') return Math.round(x).toLocaleString(loc) + ' t'
  if (fmt === '%') return Math.round(x) + '%'
  return Math.round(x).toString()
}

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t
