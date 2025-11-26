<template>
  <form @submit.prevent="onSubmit" ref="targetBlockRef" action="" class="flex justify-center">
    <div class="md:max-w-[546px] w-full">
      <div class="grid md:grid-cols-2 gap-5">
        <div class="relative z-0">
          <label
            for="floating_standard"
            class="text-sm font-medium text-black-N900 uppercase duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >{{ t('homePage.screen9.form.name') }}</label
          >
          <input
            v-model.trim="name"
            type="text"
            class="block px-0 mt-2 w-full text-sm pb-1 text-gray-900 bg-transparent border-0 border-b border-black-N900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            :placeholder="t('homePage.screen9.form.placeholderName')"
            name="contact_name"
          />
          <div class="w-full h-4 mt-1 text-xs text-warning-R300">{{ nameError }}</div>
        </div>
        <div class="relative z-0">
          <label
            for="floating_standard"
            class="text-sm font-medium uppercase text-black-N900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >{{ t('homePage.screen9.form.email') }}</label
          >
          <input
            v-model.trim="email"
            type="text"
            class="block px-0 mt-2 w-full text-sm pb-1 text-gray-900 bg-transparent border-0 border-b border-black-N900 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            :placeholder="t('homePage.screen9.form.placeholderEmail')"
            name="contact_email"
          />
          <div class="w-full h-4 mt-1 text-xs text-warning-R300">{{ emailError }}</div>
        </div>
      </div>

      <div class="mt-10">
        <label
          for="message"
          class="block mb-2 text-[13px] text-sm font-medium text-black-N900 uppercase"
          >{{ t('homePage.screen9.form.message') }}</label
        >
        <textarea
          v-model.trim="message"
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-black-N900 focus:ring-blue-500 focus:outline-blue-600"
          name="contact_description"
        ></textarea>
        <div class="w-full h-4 mt-1 text-xs text-warning-R300">{{ messageError }}</div>
      </div>

      <button
        type="submit"
        :class="{
          'bg-primary-A300': !isSent,
          'bg-primary-A600': isSent,
          'pointer-events-none cursor-not-allowed select-none opacity-60': !hasRightSendMessage
        }"
        class="text-white group border text-center flex justify-center transition-all text-lg rounded-lg px-4 py-2 mt-10 min-w-[150px]"
      >
        <div v-if="isLoading" role="status">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            class="animate-spin fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.9 14C24.5075 14 25.0057 14.4937 24.9451 15.0982C24.7367 17.1754 23.9403 19.1587 22.6385 20.81C21.1088 22.7504 18.9704 24.1193 16.5679 24.6961C14.1654 25.2729 11.6386 25.024 9.39474 23.9896C7.1509 22.9551 5.32065 21.1954 4.19893 18.9939C3.07721 16.7924 2.72933 14.2773 3.21136 11.854C3.69339 9.43068 4.97725 7.2402 6.85607 5.63554C8.73489 4.03087 11.0992 3.10548 13.5681 3.00848C15.6692 2.92593 17.7419 3.44742 19.5449 4.49975C20.0695 4.80599 20.1762 5.49924 19.8191 5.99073C19.462 6.48222 18.7767 6.58432 18.2445 6.29129C16.8478 5.5222 15.2615 5.14364 13.6545 5.20678C11.6794 5.28439 9.78791 6.0247 8.28486 7.30843C6.7818 8.59216 5.75471 10.3445 5.36909 12.2832C4.98346 14.2219 5.26176 16.2339 6.15914 17.9951C7.05652 19.7563 8.52072 21.1641 10.3158 21.9917C12.1109 22.8192 14.1323 23.0183 16.0543 22.5569C17.9764 22.0954 19.6871 21.0003 20.9108 19.448C21.9065 18.185 22.5326 16.6792 22.7313 15.0972C22.8071 14.4944 23.2925 14 23.9 14Z"
              fill="#fff"
            />
            <defs>
              <radialGradient
                id="paint0_angular_694_7983"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14 14) rotate(-21.8014) scale(13.4629 11.8474)"
              >
                <stop offset="0.0915314" stop-color="white" />
                <stop offset="0.978112" stop-color="white" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <span v-else>
          <span v-if="isSent" class="font-medium"> {{ t('homePage.screen9.form.btnSent') }}</span>
          <span v-else class="group-hover:font-medium"> {{ t('homePage.screen9.form.btn') }}</span>
        </span>
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
// import libraries and references
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

// import stores
import { useScrollClear } from '@/composables/useScrollClear'

const { t } = useI18n({ useScope: 'global' })
const { scrollClearForm } = useScrollClear()

type UserFormOption = {
  name: string
  email: string
  message: string
}

const isLoading = ref(false)
const isSent = ref(false)
const targetBlockRef = ref<HTMLElement | null>(null)

const hasRightSendMessage = computed<boolean>(() => meta.value.valid)

const schema = yup.object({
  name: yup.string().required().min(2).max(30),
  email: yup.string().required().email(),
  message: yup.string().required().min(2)
})

const { handleSubmit, values, meta, resetForm } = useForm<UserFormOption>({
  initialValues: {
    name: '',
    email: '',
    message: ''
  },
  validationSchema: schema
})

const { value: name, errorMessage: nameError } = useField<string>('name')
const { value: email, errorMessage: emailError } = useField<string>('email')
const { value: message, errorMessage: messageError } = useField<string>('message')

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const onSubmit = handleSubmit(async () => {
  console.log(values)
  isLoading.value = true
  await delay(2500)
  resetForm()
  isLoading.value = false
  isSent.value = true
})

scrollClearForm(targetBlockRef, resetForm)
</script>
