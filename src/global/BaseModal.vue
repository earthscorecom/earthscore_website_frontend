<template>
  <Transition name="modal">
    <div v-if="isVisible" class="modal-overlay backdrop-blur-sm" @click="handleOutsideClick">
      <div class="text-black-N10 bg-black-N900 py-4 px-5 rounded-lg shadow-base" @click.stop>
        <header class="flex justify-end items-center pb-3">
          <slot name="header"></slot>
          <ImageIcon
            icon="heroicons-outline:x"
            width="20"
            height="20"
            class-icon="text-black-N10 cursor-pointer"
            class-wrap="flex justify-center items-center"
            @click="$emit('close')"
          />
        </header>
        <h3 class="font-medium py-2 text-base">{{ title }}</h3>
        <slot></slot>
        <section>
          <slot name="body"></slot>
        </section>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import ImageIcon from '@/global/ImageIcon.vue'

withDefaults(
  defineProps<{
    isVisible: boolean
    title?: string
  }>(),
  {
    title: 'Cookie settings'
  }
)
const emit = defineEmits<{
  (event: 'close'): void
}>()

const handleOutsideClick = (event: Event): void => {
  if ((event.target as HTMLElement).classList.contains('modal-overlay')) emit('close')
}
</script>

<style scoped>
/* --- Modal Styling --- */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* --- Transition Styles --- */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
