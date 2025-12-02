import { ref } from 'vue'

const showModalCookie = ref<boolean>(false)

export const useCookies = () => {
  const toggleModalCookie = (): void => {
    showModalCookie.value = !showModalCookie.value
  }

  return { showModalCookie, toggleModalCookie }
}
