import { ref } from 'vue'

// Bumped whenever something (e.g. the footer "Cookie settings" link) wants the
// consent modal opened. CookieConsent.vue watches this and opens accordingly.
const openTrigger = ref(0)

export function useCookieConsent() {
  return {
    openTrigger,
    openSettings() {
      openTrigger.value++
    }
  }
}
