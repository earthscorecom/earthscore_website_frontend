<template>
  <section class="section pricing" id="pricing">
    <div class="inner">
      <div class="s-head center">
        <div class="eyebrow"><span class="eyebrow-line"></span><span>{{ t('price.eyebrow') }}</span></div>
        <h2 v-html="t('price.h2')"></h2>
        <p>{{ t('price.sub') }}</p>
      </div>

      <div class="billing">
        <div class="billing-toggle" role="tablist">
          <button :class="{ on: mode === 'monthly' }" role="tab" @click="mode = 'monthly'">{{ t('price.monthly') }}</button>
          <button :class="{ on: mode === 'annual' }" role="tab" @click="mode = 'annual'">
            <span>{{ t('price.annual') }}</span> <span class="save">−15 %</span>
          </button>
        </div>
      </div>

      <div class="price-grid">
        <div v-for="p in plans" :key="p.tier" class="price-card" :class="{ featured: p.featured }">
          <span v-if="p.badge" class="price-badge" :class="p.badgeClass">{{ t(p.badge) }}</span>
          <div class="price-tier">{{ p.tier }}</div>
          <div class="price-amount">
            <span class="cur">€</span>
            <span v-if="p.fixed" >{{ p.fixed }}</span>
            <template v-else>
              <span class="num">{{ mode === 'annual' ? p.annual : p.monthly }}</span>
              <span class="per"> {{ t('price.permonth-u') }}</span>
            </template>
          </div>
          <div class="price-period">{{ p.fixed ? t(p.period!) : billNote }}</div>
          <div class="price-credits">{{ p.credits }} <span class="u">{{ t(p.creditsUnit) }}</span></div>
          <ul class="price-features">
            <li>
              <strong>{{ p.seats }}</strong> <span>{{ t(p.seatsLabel) }}</span>
              <span v-if="p.seatNote" class="feat-subnote">{{ t(p.seatNote) }}</span>
            </li>
          </ul>
          <a :href="appLinks.signup" class="lp-btn lp-btn--block" :class="p.featured ? 'lp-btn--primary' : 'lp-btn--secondary'">{{ t('cta.start') }}</a>
        </div>
      </div>

      <div class="price-included">
        <div class="pi-inner">
          <div class="pi-label">{{ t('price.incl.label') }}<span class="pi-sub">{{ t('price.incl.sub') }}</span></div>
          <ul class="pi-list">
            <li>Circular Blueprints</li>
            <li>Research</li>
            <li>Search &amp; Match</li>
            <li>Communication Agent</li>
          </ul>
        </div>
      </div>
      <div class="price-foot-note">{{ t('price.footnote') }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { appLinks } from '@/config/appLinks'
import pricing from 'virtual:pricing'

const { t, locale } = useI18n()

const mode = ref<'monthly' | 'annual'>('monthly')

const NOTE = {
  monthly: { de: 'monatlich abgerechnet · zzgl. MwSt.', en: 'billed monthly · plus VAT' },
  annual: { de: 'jährlich abgerechnet · −15 % · zzgl. MwSt.', en: 'billed annually · −15% · plus VAT' }
}
const billNote = computed(() => NOTE[mode.value][locale.value === 'en' ? 'en' : 'de'])

interface Plan {
  id: string
  tier: string
  featured?: boolean
  badge?: string
  badgeClass?: string
  fixed?: string
  period?: string
  monthly?: string
  annual?: string
  credits: string
  creditsUnit: string
  seats: string
  seatsLabel: string
  seatNote?: string
}

// Presentation layer: marketing copy, badges and i18n keys live here and are
// keyed by `id`. The actual numbers (prices, credits, seats) are merged in from
// `virtual:pricing`, which is fetched from VITE_PRICING_API_URL at build time.
const planMeta: Plan[] = [
  {
    id: 'free_trial',
    tier: 'Free Trial',
    badge: 'price.badge.limited',
    badgeClass: 'price-badge--limited',
    period: 'price.trial14',
    creditsUnit: 'price.included-u',
    credits: '',
    seats: '',
    seatsLabel: 'price.seat1'
  },
  {
    id: 'starter',
    tier: 'Starter',
    creditsUnit: 'price.permonth-u',
    credits: '',
    seats: '',
    seatsLabel: 'price.seats'
  },
  {
    id: 'team',
    tier: 'Team',
    featured: true,
    badge: 'price.badge.popular',
    creditsUnit: 'price.permonth-u',
    credits: '',
    seats: '',
    seatsLabel: 'price.seats'
  },
  {
    id: 'scale',
    tier: 'Scale',
    badge: 'price.badge.best',
    badgeClass: 'price-badge--ghost',
    creditsUnit: 'price.permonth-u',
    credits: '',
    seats: '',
    seatsLabel: 'price.seats'
  },
  {
    id: 'enterprise',
    tier: 'Enterprise',
    creditsUnit: 'price.permonth-u',
    credits: '',
    seats: '',
    seatsLabel: 'price.seats',
    seatNote: 'price.ent.sub'
  }
]

const eur = (n: number) => n.toLocaleString('de-DE')

const plans = computed<Plan[]>(() =>
  planMeta.map((meta) => {
    const card = pricing.cards.find((c) => c.id === meta.id)
    if (!card) return meta

    const merged: Plan = {
      ...meta,
      credits: `${eur(card.monthly_credits)} Credits`,
      seats: String(card.included_seats)
    }

    if (card.is_trial || card.monthly_price_eur === 0) {
      merged.fixed = eur(card.monthly_price_eur)
    } else {
      merged.monthly = eur(card.monthly_price_eur)
      // API gives the full annual total; the card shows a per-month figure.
      merged.annual = eur(Math.round(card.annual_price_eur / 12))
    }

    return merged
  })
)
</script>
