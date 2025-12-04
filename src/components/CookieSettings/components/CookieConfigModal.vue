<template>
  <div class="w-full max-w-72 transition-all duration-300 ease-in-out">
    <div>
      <p class="text-xs">
        {{ t('cookie.text_descriptions') }}
        <span>
          <router-link
            :to="{ name: 'privacy-policy' }"
            class="underline text-primary-A300"
            @click="closeModal"
          >
            {{ t('cookie.privacy_policy') }}
          </router-link>
        </span>
      </p>
      <div class="mt-2">
        <form class="space-y-4" @submit.prevent>
          <div v-for="(value, key, index) in preferences" :key="index" class="gap-3">
            <BaseCheckbox
              :model-value="preferences[key]"
              :label="t(`cookie.${key}`)"
              :disabled="index === 0"
              :value="value"
              :active-class="
                index === 0 ? 'bg-primary-A300 opacity-40 cursor-default' : 'bg-primary-A300'
              "
              :label-class="index === 0 ? 'cursor-default' : 'cursor-pointer'"
              @update:modelValue="
                ($evt: CheckboxValue) => changeValue($evt as boolean, key as KeyPreferences)
              "
            />
          </div>
        </form>
      </div>
    </div>
    <div
      class="flex flex-col lg:flex lg:flex-row lg:gap-3 gap-y-3 justify-center items-center mt-4"
    >
      <BaseButton
        :title="hasRightSaveCookies ? t('cookie.btn_save_close') : t('cookie.btn_accept_all')"
        btn-class="text-xs p-2 w-full lg:min-w-max"
        @click="hasRightSaveCookies ? saveCookies() : setAll()"
      />
      <BaseButton
        :title="t('cookie.btn_decline_all')"
        btn-class="text-xs p-2 w-full lg:min-w-max"
        @click="declineAll"
      />
    </div>
    <!-- <div class="w-full">
      <div class="wrapper" @click="toggleActiveDetailsCookie">
        <ImageIcon icon="heroicons:cog-6-tooth" class="active-image" />
        <div class="wrapper__content active-content">
          {{ activeDetailsCookie ? t('cookie.hide_details') : t('cookie.show_details') }}
        </div>
      </div>
      <DetailsCookie v-if="activeDetailsCookie" @isClose="closeModal" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import libraries and references
import { onMounted, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useForm, useField } from 'vee-validate'

// import stores

// import components
import BaseButton from '@/global/BaseButton.vue'
import BaseCheckbox from '@/global/BaseCheckbox.vue'
import type { CheckboxValue } from '@/global/BaseCheckbox.vue'
// import ImageIcon from '@/global/ImageIcon.vue'
// import DetailsCookie from './DetailsCookie.vue'

const { t } = useI18n({ useScope: 'global' })

type CookieOptions = {
  necessary: boolean
  performance: boolean
  targeting: boolean
  functionality: boolean
  unclassified: boolean
  date: string
}
type CookiePreferences = Omit<CookieOptions, 'date'>
type CookiePreferencesWithoutNecessary = Omit<CookiePreferences, 'necessary'>
type KeyPreferences = 'performance' | 'targeting' | 'functionality' | 'unclassified'

const emit = defineEmits<{
  (event: 'close'): void
}>()

const preferences = reactive<CookiePreferences>({
  necessary: true,
  performance: false,
  targeting: false,
  functionality: false,
  unclassified: false
})

// const activeDetailsCookie = ref<boolean>(false)

useForm<CookiePreferences>({
  initialValues: preferences as CookiePreferences
})
const { meta, setTouched } = useField<CookiePreferences>('necessary')

const preferencesReducedObject = computed<CookiePreferencesWithoutNecessary>(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { necessary, ...rest } = preferences
  return rest
})
const hasRightSaveCookies = computed<boolean>(
  () => Object.values(preferencesReducedObject.value).includes(true) || meta.touched
)
// const reSizeBlockModal = computed<string>(() => (activeDetailsCookie.value ? 'w-[450pt]' : 'w-72'))

const getConsent = (): void => {
  const cookies: string | null = localStorage.getItem('cookies_key')
  if (cookies) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { date, ...rest } = JSON.parse(cookies)
    Object.assign(preferences, rest)
  }
}
const setAllToWithKeys = (value: boolean): void => {
  const keys = Object.keys(
    preferencesReducedObject.value
  ) as (keyof CookiePreferencesWithoutNecessary)[]

  keys.forEach((key) => {
    preferences[key] = value
  })
}

const saveCookies = (): void => {
  const cookies: CookieOptions = { ...preferences, date: new Date().toISOString() }
  localStorage.setItem('cookies_key', JSON.stringify(cookies))
  emit('close')
}
const setAll = (): void => {
  setAllToWithKeys(true)
}
const declineAll = (): void => {
  setAllToWithKeys(false)
  setTouched(true)
}

const changeValue = (value: boolean, key: KeyPreferences): void => {
  preferences[key] = value
  setTouched(true)
}
// const toggleActiveDetailsCookie = (): void => {
//   activeDetailsCookie.value = !activeDetailsCookie.value
// }
const closeModal = (): void => {
  setTimeout(() => {
    emit('close')
  }, 300)
}

onMounted((): void => {
  getConsent()
})
</script>
<!-- <style scoped lang="scss">
.wrapper {
  @apply flex gap-2 justify-center items-center my-4 cursor-pointer;
  &__content {
    @apply opacity-70 uppercase text-xs;
  }
  &:hover {
    .active-content {
      @apply opacity-100;
    }
    .active-image {
      @apply text-primary-A300;
    }
  }
}
</style> -->
