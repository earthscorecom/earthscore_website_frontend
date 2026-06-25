<template>
  <section class="section" id="plattform">
    <div class="inner">
      <div class="s-head">
        <div class="eyebrow"><span class="eyebrow-line"></span><span>{{ t('plat.eyebrow') }}</span></div>
        <h2 v-html="t('plat.h2')"></h2>
        <p>{{ t('plat.sub') }}</p>
      </div>

      <div class="pgrid">
        <article v-for="c in cards" :key="c.n" class="pcard">
          <div class="pcard-top">
            <span class="picon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" v-html="c.ic"></svg></span>
            <span class="pstep"><span class="num">{{ c.n }}</span> · {{ c.s }}</span>
          </div>
          <h3 v-html="c.t"></h3>
          <p>{{ c.p }}</p>
          <ul class="pbul">
            <li v-for="(b, i) in c.b" :key="i">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#dbeafe"></circle><path d="M6 10.2l2.6 2.6L14 7.4" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>{{ b }}
            </li>
          </ul>
        </article>
      </div>

      <div class="band">
        <div class="band-inner">
          <div>
            <div class="band-eyebrow">{{ t('band.eyebrow') }}</div>
            <h2 class="band-h" v-html="t('band.h')"></h2>
            <p v-html="t('band.p')"></p>
            <span class="band-note">{{ t('band.note') }}</span>
          </div>
          <div class="loop">
            <svg class="loop-svg" viewBox="0 0 360 360" fill="none" aria-hidden="true">
              <circle cx="180" cy="180" r="128" stroke="rgba(255,255,255,.18)" stroke-width="1.5" stroke-dasharray="3 7" />
              <g fill="#6ea8ff">
                <path transform="translate(270.5 89.5) rotate(45)" d="M0,-6 L9,0 L0,6 Z" />
                <path transform="translate(270.5 270.5) rotate(135)" d="M0,-6 L9,0 L0,6 Z" />
                <path transform="translate(89.5 270.5) rotate(225)" d="M0,-6 L9,0 L0,6 Z" fill="#34d399" />
                <path transform="translate(89.5 89.5) rotate(315)" d="M0,-6 L9,0 L0,6 Z" />
              </g>
            </svg>
            <div class="loop-center"><div class="lc-t">Human-in-the-Loop</div><div class="lc-s">{{ t('loop.center-s') }}</div></div>
            <div class="node n1"><div class="nh"><span class="nn">1</span><span class="nt">{{ t('loop.n1t') }}</span></div><div class="nd">{{ t('loop.n1d') }}</div></div>
            <div class="node n2"><div class="nh"><span class="nn">2</span><span class="nt">{{ t('loop.n2t') }}</span></div><div class="nd">{{ t('loop.n2d') }}</div></div>
            <div class="node human n3"><div class="nh"><span class="nn">3</span><span class="nt">{{ t('loop.n3t') }}</span></div><div class="nd">{{ t('loop.n3d') }}</div></div>
            <div class="node n4"><div class="nh"><span class="nn">4</span><span class="nt">{{ t('loop.n4t') }}</span></div><div class="nd">{{ t('loop.n4d') }}</div></div>
          </div>
        </div>
        <div class="band-clusters">
          <div class="bc-label">{{ t('band.cluster-label') }}</div>
          <div class="bc-grid">
            <div class="bc-col">
              <div class="bc-h">{{ t('band.cl1') }}</div>
              <div class="bc-agents"><span>Research-Agent</span><span>Validation-Agent</span><span>Price-Agent</span></div>
            </div>
            <div class="bc-col">
              <div class="bc-h">{{ t('band.cl2') }}</div>
              <div class="bc-agents"><span>Search-&amp;-Match-Agent</span><span>Contact-Agent</span><span>CO₂-Agent</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// The five platform building blocks. Brand/product copy from the handover
// (German only there — no i18n keys were provided for these card bodies).
const cards = [
  {
    ic: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6M11 8v6"/>',
    n: '01',
    s: 'Diagnose',
    t: 'Value Audit',
    p: 'Niederschwelliger Einstieg: Das Value Audit erfasst Ihren Betrieb über mehrere hundert Datenpunkte — die Grundlage für jeden Circular Blueprint. Anbindung an ERP, Energie und Beschaffung.',
    b: ['Kostenlos starten', 'Grundlage für Circular Blueprints', 'Auditqualität: CSRD-/ESRS-Goldstandard']
  },
  {
    ic: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>',
    n: '02',
    s: 'Priorisierung',
    t: 'Hotspot Ranking',
    p: 'Agentische KI identifiziert die größten Hebel und priorisiert nach ROI, Machbarkeit, Risiko und Geschwindigkeit.',
    b: ['Pareto-Logik: 20 % bringen 80 %', 'Wirtschaftlichkeit je Hebel beziffert', 'Human-in-the-Loop — Sie entscheiden']
  },
  {
    ic: '<path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/>',
    n: '03',
    s: 'Umsetzung',
    t: 'Circular Blueprints',
    p: 'Aus den priorisierten Hebeln werden umsetzbare Handlungspakete — mit Verantwortlichen, Meilensteinen und Rückfluss-Rechnung.',
    b: ['Klare Owner und Meilensteine', 'Übertragbar auf weitere Standorte', 'Aus einem Hebel wird ein Projekt']
  },
  {
    ic: '<path d="M12 2 4 6v6c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/>',
    n: '04',
    s: 'Nachweis',
    t: 'Measure &amp; Proof',
    p: 'Wirkung gemessen in Euro und CO₂. MRV-tauglich, auditfähig, anschlussfähig an CSRD/ESRS — als Nebenprodukt, nicht als Selbstzweck.',
    b: ['Ergebnis in Euro, nicht in Punkten', 'Durchgängiger Audit-Trail', 'Compliance als Nebenprodukt']
  },
  {
    ic: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
    n: '05',
    s: 'Skalierung',
    t: 'Circular Marketplace',
    p: 'Kaufen und verkaufen: Was bei Ihnen Nebenstrom ist, wird für andere zum Rohstoff — und Sie beziehen selbst, was Sie brauchen. KI-Matching, verifizierte Partner, dokumentierte Transaktionen.',
    b: ['Material, Nebenströme, Logistik, Partner', 'KI-Matching mit verifizierten Partnern', 'Messbare CO₂-Einsparung je Trade']
  }
]
</script>
