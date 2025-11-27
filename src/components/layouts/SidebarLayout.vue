<template>
  <div
    @click="($event) => close($event)"
    id="sidebar"
    :class="{ 'bg-black-N900/55 w-full z-[60] absolute left-0 top-0 h-full': isOpen }"
  >
    <div
      class="border z-50 fixed w-full md:w-96 right-0 h-screen bg-white slide-animation scrollbar overflow-y-auto"
    >
      <div class="pl-8 pr-6 md:pr-16 pt-5">
        <div class="flex justify-end items-center space-x-3">
          <button
            @click="setLocale"
            class="p-2 text-2xl flex items-center text-black-N100 space-x-2 transition-all md:hover:text-black-N900 group"
          >
            <LangIcon></LangIcon>
            <span class="block text-lg uppercase transition-all md:group-hover:font-medium">{{
              swithcLocaleTo
            }}</span>
          </button>
          <button
            @click="$emit('close')"
            class="border border-black-N900 rounded-md px-1 py-1 text-lg"
          >
            <CloseIcon></CloseIcon>
          </button>
        </div>
        <ul class="space-y-8 mb-20 mt-5">
          <li
            v-for="(contentItem, index) in list"
            :key="index"
            @click.prevent="onClick(contentItem.id, contentItem.margin)"
          >
            <a
              class="text-xl text-light transition-all hover:font-medium"
              :href="`#${contentItem.id}`"
            >
              {{ contentItem.name }}
            </a>
          </li>
        </ul>
      </div>
      <hr class="bg-black-N900 h-0.5" />
      <div class="px-8 pb-3">
        <span class="block text-3xl py-16">{{ t('sidebar.contact') }}:</span>
        <ContactList></ContactList>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

// import stores
import { useWidth } from '@/composables/useWidth'
import { toBlock } from '@/utils/toBlock'

// import components
import ContactList from '@/components/ContactList.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import LangIcon from '@/components/icons/LangIcon.vue'

const EN_LOCALE = 'en'
const DE_LOCALE = 'de'
const { locale, t } = useI18n({ useScope: 'global' })

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])
const { screenWidth } = useWidth()

const list = computed(() => [
  { name: t('sidebar.list.item1'), id: 'mission', margin: screenWidth.value > 768 ? 95 : 200 },
  {
    name: t('sidebar.list.item2'),
    id: 'our-solutions',
    margin: screenWidth.value > 768 ? 95 : 200
  },
  {
    name: t('sidebar.list.item3'),
    id: 'slider-consumer',
    margin: screenWidth.value > 768 ? 95 : 200
  },
  {
    name: t('sidebar.list.item4'),
    id: 'slider-possibility',
    margin: screenWidth.value > 768 ? 95 : 200
  },
  { name: t('sidebar.list.item5'), id: 'slider-team', margin: 50 },
  { name: t('sidebar.list.item6'), id: 'contact-form', margin: screenWidth.value > 768 ? 95 : 100 }
])

const swithcLocaleTo = computed(() => (locale.value == EN_LOCALE ? DE_LOCALE : EN_LOCALE))

const setLocale = () => {
  locale.value = swithcLocaleTo.value
  localStorage.setItem('lang', locale.value)
  emit('close')
}

const onClick = (id: string, margin: number) => {
  emit('close')
  toBlock(id, margin)
}

const close = (e: any) => {
  if (e.target.id === 'sidebar') {
    emit('close')
  }
}
</script>
<style scoped>
.slide-animation {
  transform: translateX(100%);
  transform-origin: right center;
  transition: transform 0.8s;
}

.menu-open .slide-animation {
  transform: translateX(0);
}
</style>
