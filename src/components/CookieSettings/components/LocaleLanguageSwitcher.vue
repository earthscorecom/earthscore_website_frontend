<template>
  <div>
    <Listbox v-model="currentLanguage">
      <div class="relative z-[22]">
        <ListboxButton
          class="relative w-full flex items-center cursor-pointer space-x-[6px] rtl:space-x-reverse"
        >
          <ImageIcon icon="heroicons-outline:globe-alt" />
        </ListboxButton>

        <Transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-[999] min-w-[60px] w-auto max-h-60 overflow-auto rounded shadow-base2 mt-2 bg-white"
          >
            <ListboxOption
              v-for="(language, index) in languagesList"
              v-slot="{ active }"
              :key="index"
              :value="language"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-black-N900 bg-opacity-90' : 'text-white bg-black-N900',
                  'w-full border-b border-b-gray-500 border-opacity-10 px-2 py-2 cursor-pointer'
                ]"
                @click="switchLanguage(language)"
              >
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                  <span
                    class="flex-1 text-xs capitalize text-center"
                    :class="active ? 'font-bold' : 'font-normal'"
                  >
                    {{ language }}
                  </span>
                </div>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup lang="ts">
// import libraries and references
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

// import stores
import { useLanguage } from '@/composables/useLanguage'

// import components
import ImageIcon from '@/global/ImageIcon.vue'

const { languagesList, changeLocalLanguage } = useLanguage()

const currentLanguage = ref<string | null>(localStorage.getItem('lang'))

const switchLanguage = (newLanguage: string): void => {
  changeLocalLanguage(newLanguage)
}
</script>
