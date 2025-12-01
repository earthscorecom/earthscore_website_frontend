<template>
  <BaseSortableList :data="reportData" default-sort-key="necessary">
    <template #navButton="{ buttonName }">
      {{ t(`cookie.${buttonName}`) }}
    </template>
    <template #sectionText="{ text }">
      {{ t(`cookie.${text}`) }}
    </template>
    <template #header="{ headerTitle }">
      {{ t(`cookie.${headerTitle}`) }}
    </template>
    <template #body="{ bodyTitle }">
      {{ bodyTitle ? t(`cookie.${bodyTitle}`) : '' }}
    </template>
  </BaseSortableList>
</template>

<script setup lang="ts">
// import libraries and references
import { useI18n } from 'vue-i18n'

// import stores
import { reportData } from '@/constant/CookiesData'

// import components
import BaseSortableList from '@/global/BaseSortableList.vue'

const { t } = useI18n({ useScope: 'global' })
</script>
