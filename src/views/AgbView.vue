<template>
  <LegalDoc :html="legalDocs.agb" current="agb" />
</template>

<script setup lang="ts">
import LegalDoc from '@/components/layouts/LegalDoc.vue'
import { legalDocs } from '@/data/legalDocs'
</script>
