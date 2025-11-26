import { onMounted, onUnmounted, type Ref } from 'vue'

export const useScrollClear = () => {
  const scrollClearForm = (targetRef: Ref<HTMLElement | null>, callBack: () => void) => {
    let observer: IntersectionObserver | null = null

    onMounted(() => {
      const targetElement = targetRef.value

      if (!targetElement) return

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              callBack()
            }
          })
        },
        {
          threshold: 0.0
        }
      )

      observer.observe(targetElement)
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })
  }
  return {
    scrollClearForm
  }
}
