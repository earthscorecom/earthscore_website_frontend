import type { Plugin } from 'vite'
import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

const VIRTUAL_ID = 'virtual:pricing'
const RESOLVED_ID = '\0' + VIRTUAL_ID

const FALLBACK_PATH = fileURLToPath(new URL('../src/data/pricing.fallback.json', import.meta.url))

/**
 * Fetches the pricing payload once, at build start (and on dev-server start),
 * and serves it to the app through the `virtual:pricing` module. Prices are
 * therefore baked into the bundle — no runtime request, no loading state.
 *
 * If the endpoint is unreachable the committed fallback JSON is used, so the
 * build never fails and offline dev still works.
 */
export function pricingPlugin(apiUrl: string | undefined): Plugin {
  let payload: string

  return {
    name: 'earthscore-pricing',

    async buildStart() {
      const fallback = readFileSync(FALLBACK_PATH, 'utf-8')

      if (!apiUrl) {
        this.warn('[pricing] no API URL set (VITE_PRICING_API_URL) — using fallback JSON')
        payload = fallback
        return
      }

      try {
        const res = await fetch(apiUrl)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = (await res.json()) as { data?: unknown }
        // API wraps the payload in { data: ... }
        payload = JSON.stringify(json.data ?? json)
        this.info(`[pricing] fetched live pricing from ${apiUrl}`)
      } catch (err) {
        this.warn(`[pricing] fetch from ${apiUrl} failed (${(err as Error).message}) — using fallback JSON`)
        payload = fallback
      }
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },

    load(id) {
      if (id === RESOLVED_ID) {
        return `export default ${payload}`
      }
    }
  }
}
