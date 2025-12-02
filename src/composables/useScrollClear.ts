import { onMounted, onUnmounted, type Ref } from 'vue'

export const useScrollClear = () => {
  const scrollClearForm = (targetRef: Ref<HTMLElement | null>, callBack: () => void) => {
    let observer: IntersectionObserver | null = null

    onMounted(() => {
      const targetElement: HTMLElement | null = targetRef.value

      if (!targetElement) return

      observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (!entry.isIntersecting) {
              callBack()
              Object.values(entry.target).forEach((element: HTMLElement) => element.blur())
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
