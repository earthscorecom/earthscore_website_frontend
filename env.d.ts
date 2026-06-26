/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_APP_SIGNUP_URL?: string
  readonly VITE_APP_LOGIN_URL?: string
  readonly VITE_PRICING_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'virtual:pricing' {
  export interface PricingCard {
    id: string
    name: string
    is_trial: boolean
    monthly_price_eur: number
    annual_price_eur: number
    monthly_credits: number
    included_seats: number
    trial_days: number | null
    badge: 'popular' | 'best_value' | null
    self_serve: boolean
  }
  export interface PricingPayload {
    currency: string
    annual_discount_pct: number
    tokens_per_credit: number
    billing_cycles: string[]
    cards: PricingCard[]
  }
  const payload: PricingPayload
  export default payload
}
