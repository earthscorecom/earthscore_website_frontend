<template>
  <div class="data-table">
    <header v-if="props.mainTitle || props.subTitle" class="data-table__header">
      <h1 v-if="props.mainTitle">{{ props.mainTitle }}</h1>
      <p v-if="props.subTitle" class="data-table__subtitle">{{ props.subTitle }}</p>
    </header>
    <nav class="data-table__sorters">
      <button
        v-for="key in sortedKeys"
        :key="key"
        @click="setActiveKey(key)"
        :class="['sorter-btn', { 'sorter-btn--active': activeKey === key }]"
      >
        <slot name="navButton" :buttonName="key">
          {{ key }}
        </slot>
      </button>
    </nav>
    <section class="data-table__section">
      <slot name="sectionText" :text="textData">{{ textData }} </slot>
    </section>
    <table class="data-table__content w-full border-collapse">
      <thead>
        <tr>
          <th v-for="(header, index) in headersList" :key="index" class="">
            <slot name="header" :headerTitle="header">{{ header }} </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in dataList" :key="rowIndex">
          <td v-for="(value, key) in row" :key="key">
            <slot name="body" :bodyTitle="value">
              {{ value }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type TableRowData = { [key: string]: string }

type TableDataStructure = {
  headers: string[]
  text: string
  data: TableRowData[]
}

type TableKeyDataStructure = {
  [key: string]: TableDataStructure[]
}

const props = withDefaults(
  defineProps<{
    mainTitle?: string
    subTitle?: string
    data?: TableKeyDataStructure
    defaultSortKey?: string
  }>(),
  {
    mainTitle: '',
    subTitle: '',
    data: () => ({}) as TableKeyDataStructure,
    defaultSortKey: ''
  }
)

const activeKey = ref<string>(props.defaultSortKey)

const sortedKeys = computed<string[]>(() => Object.keys(props.data))

const headersList = computed<string[]>(() => {
  const currentData = props.data[activeKey.value]

  return currentData && currentData.length > 0 ? currentData[0].headers : []
})
const textData = computed<string>(() => {
  const currentData = props.data[activeKey.value]
  return currentData && currentData.length > 0 ? currentData[0].text : ''
})
const dataList = computed<TableRowData[]>(() => {
  const currentData = props.data[activeKey.value]
  return currentData && currentData.length > 0 ? currentData[0].data : []
})

const setActiveKey = (key: string): void => {
  activeKey.value = key
}
</script>

<style lang="scss">
.data-table {
  @apply max-w-[800px] my-5 mx-auto text-xs;

  &__header {
    @apply mb-5;

    h1 {
      @apply text-black-N900 text-2xl;
    }
    .data-table__subtitle {
      @apply text-base text-black-N900;
    }
  }
  &__section {
    @apply py-2 px-3 text-black-N900;
  }
  &__sorters {
    @apply flex justify-around mb-5;

    .sorter-btn {
      @apply py-2 px-3 capitalize bg-black-N40 text-black-N900 cursor-pointer rounded-full transition-all duration-200 ease-in-out;

      &--active {
        @apply bg-black-N900 text-white;
      }
    }
  }
  &__content {
    @apply w-full border-collapse;

    th {
      @apply p-3 text-left capitalize bg-black-N20 font-medium;
    }
    td {
      @apply py-[7.5pt] px-3 border-b border-solid;

      &:first-child {
        @apply font-medium;
      }
    }
  }
}
</style>
