<template>
  <label class="sans-serif inline-flex items-center text-xs uppercase">
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      class="hidden"
      @change="handleChange"
    />

    <span
      class="h-[13.5pt] w-[13.5pt] cursor-pointer text-black-N900 rounded"
      :class="value ? activeClass + '' : 'bg-black-N900 border border-black-N10'"
    >
      <CheckIcon v-if="value && !icon" class="w-4 h-4 block m-auto" />
    </span>
    <span v-if="label" class="ml-3" :class="labelClass">
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CheckIcon from '@/global/CheckIcon.vue'

type CheckboxValue = boolean | string | number | (string | number)[]

const props = withDefaults(
  defineProps<{
    modelValue: CheckboxValue
    value?: string | number | boolean
    label?: string
    activeClass?: string
    labelClass?: string
    icon?: string
    iconClass?: string
  }>(),
  {
    value: '',
    label: '',
    activeClass: 'bg-primary-A300',
    labelClass: '',
    icon: '',
    iconClass: 'text-black-N200 text-base font-medium'
  }
)
const emit = defineEmits<{
  (event: 'update:modelValue', value: CheckboxValue): void
}>()

const isChecked = computed<boolean>(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value as string | number)
  }

  return !!props.modelValue
})

const handleChange = (event: Event): void => {
  const target = event.target as HTMLInputElement

  if (Array.isArray(props.modelValue)) {
    const currentArray: CheckboxValue = [...props.modelValue]
    const itemValue = props.value as string | number

    if (target.checked) {
      if (!currentArray.includes(itemValue)) {
        currentArray.push(itemValue)
      }
    } else {
      const index = currentArray.indexOf(itemValue)
      if (index > -1) {
        currentArray.splice(index, 1)
      }
    }

    emit('update:modelValue', currentArray)
  } else {
    emit('update:modelValue', target.checked)
  }
}
</script>
