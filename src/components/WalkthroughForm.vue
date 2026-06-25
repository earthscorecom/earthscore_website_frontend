<template>
  <div class="k-card" :class="{ success: sent }">
    <h3 style="margin:0 0 6px">{{ t('kontakt.formtitle') }}</h3>
    <p class="k-form-sub">{{ t('kontakt.formsub') }}</p>

    <form class="k-form" novalidate @submit.prevent="onSubmit">
      <!-- honeypot -->
      <div aria-hidden="true" style="position:absolute;left:-9999px;top:-9999px;height:0;width:0;overflow:hidden">
        <label for="kf-website">Website</label>
        <input id="kf-website" v-model="website" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <div class="field">
        <label for="kf-mail"><span>{{ t('kontakt.l.mail') }}</span> <span class="req" aria-hidden="true">*</span></label>
        <input
          id="kf-mail"
          v-model.trim="email"
          class="k-input"
          :class="{ invalid: emailTouched && !emailOk }"
          type="email"
          :placeholder="t('kontakt.ph.mail')"
          @blur="emailTouched = true"
        />
        <span class="field-err" :class="{ on: emailTouched && !emailOk }">{{ L('Bitte geben Sie eine gültige Geschäfts-E-Mail an.', 'Please enter a valid business email.') }}</span>
      </div>

      <div class="field">
        <label for="kf-co"><span>{{ t('kontakt.l.co') }}</span> <span class="req" aria-hidden="true">*</span></label>
        <input
          id="kf-co"
          v-model.trim="company"
          class="k-input"
          :class="{ invalid: companyTouched && !companyOk }"
          type="text"
          :placeholder="t('kontakt.ph.co')"
          @blur="companyTouched = true"
        />
        <span class="field-err" :class="{ on: companyTouched && !companyOk }">{{ L('Bitte geben Sie Ihren Firmennamen an.', 'Please enter your company name.') }}</span>
      </div>

      <div class="field">
        <label>{{ t('kontakt.l.role') }}</label>
        <FormDropdown v-model="role" :placeholder="L('Bitte wählen', 'Please select')" :options="roleOptions" />
      </div>

      <div class="field">
        <label for="kf-tel"><span>{{ t('kontakt.l.tel') }}</span></label>
        <input id="kf-tel" v-model.trim="phone" class="k-input" type="tel" placeholder="+49 …" />
      </div>

      <div class="field">
        <label>{{ t('kontakt.l.branch') }}</label>
        <FormDropdown v-model="branch" :placeholder="L('Bitte wählen', 'Please select')" :options="branchOptions" />
      </div>

      <div class="field">
        <label for="kf-loc"><span>{{ t('kontakt.l.loc') }}</span> <span class="opt">{{ t('kontakt.l.locopt') }}</span></label>
        <input id="kf-loc" v-model.trim="location" class="k-input" type="text" :placeholder="t('kontakt.ph.loc')" />
      </div>

      <div class="field full">
        <label for="kf-msg"><span>{{ t('kontakt.l.msg') }}</span></label>
        <textarea id="kf-msg" v-model.trim="message" class="k-input" :placeholder="t('kontakt.ph.msg')"></textarea>
      </div>

      <label class="consent" :class="{ invalid: consentTouched && !consentOk }">
        <input v-model="consent" type="checkbox" @change="consentTouched = true" />
        <span class="consent-text" v-html="consentText"></span>
        <span class="req" aria-hidden="true">*</span>
      </label>
      <span class="field-err" :class="{ on: consentTouched && !consentOk }" style="grid-column:1/-1;margin-top:-6px">{{ L('Bitte stimmen Sie der Datenschutzerklärung zu.', 'Please accept the privacy policy.') }}</span>

      <div class="req-legend"><span class="req" aria-hidden="true">*</span> {{ L('Pflichtfeld', 'Required field') }}</div>

      <div class="k-submit-row">
        <button type="submit" class="lp-btn lp-btn--primary" :disabled="!allOk || loading">
          {{ loading ? L('Senden …', 'Sending …') : t('kontakt.submit') }}
        </button>
        <span class="k-note">{{ t('kontakt.note') }}</span>
      </div>
      <span v-if="sendError" class="field-err on" style="grid-column:1/-1">{{ sendError }}</span>
    </form>

    <div class="k-success" :class="{ on: sent }">
      <div class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5" /></svg></div>
      <h3>{{ t('kontakt.ok.h') }}</h3>
      <p>{{ t('kontakt.ok.p') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser'
import FormDropdown from './FormDropdown.vue'

const { t, locale } = useI18n()
const L = (de: string, en: string) => (locale.value === 'en' ? en : de)

const email = ref('')
const company = ref('')
const role = ref('')
const phone = ref('')
const branch = ref('')
const location = ref('')
const message = ref('')
const consent = ref(false)
const website = ref('') // honeypot

const emailTouched = ref(false)
const companyTouched = ref(false)
const consentTouched = ref(false)

const loading = ref(false)
const sent = ref(false)
const sendError = ref('')

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const emailOk = computed(() => emailRe.test(email.value.trim()))
const companyOk = computed(() => company.value.trim().length > 0)
const consentOk = computed(() => consent.value)
const allOk = computed(() => emailOk.value && companyOk.value && consentOk.value)

const consentText = computed(() =>
  L(
    "Ich bin mit der Verarbeitung meiner Angaben gemäß <a href='/datenschutz'>Datenschutzerklärung</a> einverstanden.",
    "I consent to the processing of my data per the <a href='/datenschutz'>Privacy Policy</a>."
  )
)

const roleOptions = computed(() =>
  [
    ['Geschäftsführung', 'Management / C-level'],
    ['CFO / Finanzen', 'CFO / Finance'],
    ['COO / Betrieb', 'COO / Operations'],
    ['Werk-/Standortleitung', 'Plant / site management'],
    ['Nachhaltigkeit / ESG', 'Sustainability / ESG'],
    ['Sonstige', 'Other']
  ].map(([de, en]) => ({ value: de, label: L(de, en) }))
)

const branchOptions = computed(() =>
  [
    ['Produzierendes Gewerbe', 'Manufacturing / production'],
    ['Automotive & Zulieferer', 'Automotive & suppliers'],
    ['Chemie, Kunststoff & Pharma', 'Chemicals, plastics & pharma'],
    ['Bau & Baustoffe', 'Construction & building materials'],
    ['Lebensmittel & Getränke', 'Food & beverage'],
    ['Logistik & Handel', 'Logistics & trade'],
    ['Energie & Versorgung', 'Energy & utilities'],
    ['Andere', 'Other']
  ].map(([de, en]) => ({ value: de, label: L(de, en) }))
)

async function onSubmit() {
  emailTouched.value = companyTouched.value = consentTouched.value = true
  if (!allOk.value) return

  // honeypot tripped — pretend success, send nothing
  if (website.value) {
    sent.value = true
    return
  }

  loading.value = true
  sendError.value = ''
  const composed = [
    `Rolle: ${role.value || '—'}`,
    `Telefon: ${phone.value || '—'}`,
    `Branche: ${branch.value || '—'}`,
    `Standort: ${location.value || '—'}`,
    '',
    message.value || '—'
  ].join('\n')

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { name: company.value, email: email.value, message: composed },
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    )
    sent.value = true
  } catch {
    sendError.value = L(
      'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
      'Sending failed. Please try again.'
    )
  } finally {
    loading.value = false
  }
}
</script>
