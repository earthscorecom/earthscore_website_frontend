<template>
  <div class="flex items-center mt-20">
    <div class="box mx-auto sm:px-6 pb-20 md:pb-0 md:pt-0 md:px-16 text-base text-black-N900">
      <div class="grid md:grid-cols-2 gap-5 sm:pt-10 items-start">
        <div class="order-last md:order-first px-6 sm:px-0">
          <h1 class="text-[32px] leading-[35px]">{{ t('data_protection.title') }}</h1>
          <p class="font-medium pb-4 pt-2">{{ t('data_protection.sub_title_one') }}</p>
          <p class="font-medium">{{ t('data_protection.sub_title_two') }}:</p>
          <p class="font-medium py-4">WhatsGreen Research & Science GmbH</p>
          <p>Rommerskirchener Str. 21</p>
          <p>50259 Pulheim</p>
          <p class="pb-4">Deutschland</p>
          <p>Telefon: +49 (0)223 4786954 (Zentrale)</p>
          <p class="pb-4">Email: info@earthscore.com</p>

          <p class="pb-4">
            {{ t('data_protection.info_top') }}
          </p>
          <p>
            {{ t('data_protection.info_bottom') }}
          </p>
        </div>
        <div
          :style="{ 'background-image': 'url(' + Img + ')' }"
          class="h-[445px] bg-cover bg-center sm:rounded-[4px]"
        ></div>
      </div>

      <div class="mt-10 px-6 sm:px-0">
        <h5 class="font-medium py-4">1. {{ t('data_protection.section_1') }}?</h5>

        <p>
          {{ t('data_protection.section_1_text') }}
        </p>

        <h5 class="font-medium py-4">2. {{ t('data_protection.section_2') }}</h5>
        <p>
          {{ t('data_protection.section_2_text') }}
        </p>
        <p>1. a) {{ t('data_protection.section_2_1_text') }}</p>
        <p>
          {{ t('data_protection.section_2_2_text') }}
        </p>
        <p>1. b) {{ t('data_protection.section_2_3_text') }}</p>
        <p>
          {{ t('data_protection.section_2_4_text') }}
        </p>
        <p>– {{ t('data_protection.section_2_5_text') }},</p>
        <p>– {{ t('data_protection.section_2_6_text') }},</p>
        <p>– {{ t('data_protection.section_2_7_text') }},</p>
        <p>– {{ t('data_protection.section_2_8_text') }},</p>
        <p>– {{ t('data_protection.section_2_9_text') }},</p>
        <p>– {{ t('data_protection.section_2_10_text') }},</p>
        <p>1. c) {{ t('data_protection.section_2_11_text') }}</p>
        <p>
          {{ t('data_protection.section_2_12_text') }}
        </p>
        <p>
          {{ t('data_protection.section_2_13_text') }}
        </p>

        <h5 class="font-medium py-4">3. {{ t('data_protection.section_3') }}?</h5>
        <p>
          {{ t('data_protection.section_3_text') }}
        </p>

        <h5 class="font-medium py-4">4. {{ t('data_protection.section_4') }}?</h5>
        <p>
          {{ t('data_protection.section_4_text') }}
        </p>
        <p>
          {{ t('data_protection.section_4_1_text') }}
        </p>
        <p>
          {{ t('data_protection.section_4_2_text') }}
        </p>
        <h5 class="font-medium py-4">5. {{ t('data_protection.section_5') }}?</h5>
        <p>
          {{ t('data_protection.section_5_text') }}
        </p>
        <p>
          {{ t('data_protection.section_5_1_text') }}
        </p>
        <p>
          {{ t('data_protection.section_5_2_text') }}
        </p>
        <p>
          {{ t('data_protection.section_5_3_text') }}
        </p>

        <h5 class="font-medium py-4">6. {{ t('data_protection.section_6') }}?</h5>
        <p>
          {{ t('data_protection.section_6_text') }}
        </p>
        <p>
          {{ t('data_protection.section_6_1_text') }}
        </p>
        <p>
          {{ t('data_protection.section_6_2_text') }}
        </p>
        <p>{{ t('data_protection.section_6_3_text') }}:</p>
        <p>{{ t('data_protection.section_6_4_text') }}</p>
        <p>{{ t('data_protection.section_6_5_text') }}</p>
        <p>{{ t('data_protection.section_6_6_text') }} 20 04 44</p>
        <p>40102 Düsseldorf</p>
        <p>Tel.: 0211/38424-0</p>
        <p>Fax: 0211/38424-10</p>
        <p>E-Mail: poststelle@ldi.nrw.de</p>
        <h5 class="font-medium py-4">7. {{ t('data_protection.section_7') }}?</h5>
        <p>{{ t('data_protection.section_7_text') }}:</p>
        <p>WhatsGreen Research & Science GmbH</p>
        <p>{{ t('data_protection.section_7_1_text') }}</p>
        <p>Rommerskirchener Str. 21</p>
        <p>50259 Pulheim</p>
        <p>{{ t('data_protection.section_7_2_text') }}:</p>
        <p>info@earthscore.com</p>

        <h5 class="font-medium py-4">8. {{ t('data_protection.section_8') }}?</h5>
        <p>{{ t('data_protection.section_8_text') }}:</p>
        <p>
          {{ t('data_protection.section_8_1_text') }}
        </p>
        <p>– {{ t('data_protection.ip_address') }}</p>
        <p>– {{ t('data_protection.date_and_time') }}</p>
        <p>– {{ t('data_protection.time_zone') }}</p>
        <p>– {{ t('data_protection.content_request') }}</p>
        <p>– {{ t('data_protection.operating_system') }}</p>
        <p>– {{ t('data_protection.amount_data_transferred') }}</p>
        <p>– {{ t('data_protection.website_from_which_request') }}</p>
        <p>– {{ t('data_protection.browser_language_and_version') }}</p>
        <p>
          {{ t('data_protection.section_8_2_text') }}
        </p>
        <p>{{ t('data_protection.section_8_3_text') }}:</p>
        <p>{{ t('data_protection.google_analytics') }}</p>
        <p>
          {{ t('data_protection.section_8_4_text') }}
        </p>
        <p>
          {{ t('data_protection.section_8_5_text') }}
        </p>
        <p>{{ t('data_protection.google_maps') }}</p>
        <p>
          {{ t('data_protection.section_8_6_text') }}
        </p>
        <p>{{ t('data_protection.contact_form') }}</p>
        <p>
          {{ t('data_protection.section_8_7_text') }}
        </p>
        <p>{{ t('data_protection.inquiries') }}</p>
        <p>
          {{ t('data_protection.section_8_8_text') }}
        </p>

        <h5 class="font-medium py-4">9. {{ t('data_protection.section_9') }}</h5>
        <p>
          {{ t('data_protection.section_9_text') }}
        </p>
        <p class="py-4">
          {{ t('data_protection.stand') }}: 16. {{ t('data_protection.month') }} 2022
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Img from '@/assets/img/privacy-policy.svg'

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>
