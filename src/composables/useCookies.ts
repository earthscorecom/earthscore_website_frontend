import { ref } from 'vue'

const showModalCookie = ref<boolean>(false)

export const useCookies = () => {
  const toggleModalCookie = (newValue: boolean | null = null): void => {
    if (newValue !== null) {
      showModalCookie.value = newValue
    } else {
      showModalCookie.value = !showModalCookie.value
    }
  }

  return { showModalCookie, toggleModalCookie }
}
