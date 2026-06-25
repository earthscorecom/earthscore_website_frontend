<template>
  <LegalDoc :html="legalDocs.datenschutz" current="datenschutz" />
</template>

<script setup lang="ts">
import LegalDoc from '@/components/layouts/LegalDoc.vue'
import { legalDocs } from '@/data/legalDocs'
</script>
