<template>
  <section class="section features" id="features">
    <div class="inner">
      <div class="s-head">
        <div class="eyebrow"><span class="eyebrow-line"></span><span>{{ t('feat.eyebrow') }}</span></div>
        <h2 v-html="t('feat.h2')"></h2>
        <p>{{ t('feat.sub') }}</p>
      </div>

      <div class="feat-grid">
        <!-- Circular Blueprints -->
        <article class="feat-card">
          <div class="feat-top">
            <span class="feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" /><path d="m3 12 9 4.5 9-4.5" /><path d="m3 16.5 9 4.5 9-4.5" /></svg></span>
            <span class="feat-badges"><span class="feat-badge feat-badge--soon">{{ t('feat.badge.soon') }}</span><span class="feat-badge">{{ t('feat.badge') }}</span></span>
          </div>
          <h3>Circular Blueprints</h3>
          <p>{{ t('feat.bp') }}</p>
          <div class="feat-sig">
            <div class="feat-chips"><span class="feat-chip">Light</span><span class="feat-chip">Standard</span><span class="feat-chip">Implementation</span><span class="feat-chip">Proof</span><span class="feat-chip">Enterprise</span></div>
            <div class="bp-sim">
              <div class="bp-row"><span class="bp-k">{{ t('feat.bp.cost') }}</span><span class="bp-bar"><i class="now" style="--v:100%"></i></span><span class="bp-bar"><i class="aft" style="--v:68%"></i></span><span class="bp-delta">−32%</span></div>
              <div class="bp-row"><span class="bp-k">CO₂</span><span class="bp-bar"><i class="now" style="--v:100%"></i></span><span class="bp-bar"><i class="aft" style="--v:55%"></i></span><span class="bp-delta">−45%</span></div>
              <div class="bp-legend"><span><i class="now"></i><span>{{ t('feat.before') }}</span></span><span><i class="aft"></i><span>{{ t('feat.after') }}</span></span></div>
            </div>
          </div>
        </article>

        <!-- Research -->
        <article class="feat-card">
          <div class="feat-top">
            <span class="feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></span>
            <span class="feat-badge">{{ t('feat.badge') }}</span>
          </div>
          <h3>Research</h3>
          <p>{{ t('feat.rs') }}</p>
          <div class="feat-sig">
            <div class="feat-chips"><span class="feat-chip">{{ t('feat.rs.c1') }}</span><span class="feat-chip">{{ t('feat.rs.c2') }}</span><span class="feat-chip">{{ t('feat.rs.c3') }}</span><span class="feat-chip">{{ t('feat.rs.c4') }}</span></div>
            <div class="rs-hits">
              <div class="rs-row"><span class="rs-tag buy">{{ t('feat.buy') }}</span><span class="rs-name">Edelstahl-Schrott 1.4301</span><span class="rs-src">{{ t('feat.external') }}</span></div>
              <div class="rs-row"><span class="rs-tag sell">{{ t('feat.sell') }}</span><span class="rs-name">PP-Mahlgut, sortenrein</span><span class="rs-src">{{ t('feat.external') }}</span></div>
              <div class="rs-alert"><span class="rs-dot"></span><span>{{ t('feat.rs.alert') }}</span></div>
            </div>
          </div>
        </article>

        <!-- Search & Match -->
        <article class="feat-card">
          <div class="feat-top">
            <span class="feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 1v3M12 20v3M1 12h3M20 12h3" /></svg></span>
            <span class="feat-badge">{{ t('feat.badge') }}</span>
          </div>
          <h3>Search &amp; Match</h3>
          <p>{{ t('feat.sm') }}</p>
          <div class="feat-sig">
            <div class="ms-score"><span class="ms-ring">93<span class="ms-of">/ 100</span></span><span class="ms-lbl">{{ t('feat.sm.example') }}</span></div>
            <div class="ms-dims">
              <div class="ms-dim"><span>{{ t('dim.category') }}</span><span class="ms-bar" style="--v:100%"></span></div>
              <div class="ms-dim"><span>{{ t('dim.volume') }}</span><span class="ms-bar" style="--v:88%"></span></div>
              <div class="ms-dim"><span>{{ t('dim.price') }}</span><span class="ms-bar" style="--v:81%"></span></div>
              <div class="ms-dim"><span>{{ t('dim.location') }}</span><span class="ms-bar" style="--v:99%"></span></div>
              <div class="ms-dim"><span>{{ t('dim.window') }}</span><span class="ms-bar" style="--v:90%"></span></div>
              <div class="ms-dim"><span>{{ t('dim.quality') }}</span><span class="ms-bar" style="--v:97%"></span></div>
            </div>
          </div>
        </article>

        <!-- Communication Agent -->
        <article class="feat-card">
          <div class="feat-top">
            <span class="feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
            <span class="feat-badge">{{ t('feat.badge') }}</span>
          </div>
          <h3>Communication Agent</h3>
          <p>{{ t('feat.ca') }}</p>
          <div class="feat-sig">
            <div class="feat-chat">
              <div class="bubble in"><span class="who"><span>{{ t('feat.ca.buyer') }}</span><span class="bub-time">09:42</span></span><span>{{ t('feat.ca.msg1') }}</span></div>
              <div class="bubble out"><span class="who"><span>{{ t('feat.ca.draft') }}</span><span class="bub-time">09:42</span></span><span>{{ t('feat.ca.msg2') }}</span></div>
              <div class="confirm"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5" /></svg><span>{{ t('feat.ca.confirm') }}</span></div>
            </div>
          </div>
        </article>
      </div>

      <div class="feat-outcome">
        <div class="feat-outcome-l">
          <div class="o-label">Der Effekt</div>
          <h3>{{ t('feat.outcome.h') }}</h3>
          <p>{{ t('feat.outcome.p') }}</p>
        </div>
        <div class="o-stats">
          <span class="o-stat"><span class="o-ic euro">€</span><span>{{ t('feat.outcome.s1') }}</span></span>
          <span class="o-stat"><span class="o-ic co2">CO₂</span><span>{{ t('feat.outcome.s2') }}</span></span>
        </div>
      </div>

      <div class="feat-base">
        <div class="feat-base-label">{{ t('feat.base.label') }}</div>
        <div class="feat-base-list">
          <span>Listings</span><span>{{ t('feat.base.trading') }}</span><span>{{ t('feat.base.messages') }}</span><span>{{ t('feat.base.invoices') }}</span><span>CRM</span><span>{{ t('feat.base.co2') }}</span><span>{{ t('feat.base.users') }}</span><span>Newsletter</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
