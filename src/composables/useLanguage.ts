import { ref } from 'vue'

const localLanguage = ref<string>('')
const languagesList = <string[]>['en', 'de']

export const useLanguage = () => {
  const changeLocalLanguage = (newLang: string): void => {
    localLanguage.value = newLang
  }

  return {
    localLanguage,
    languagesList,
    changeLocalLanguage
  }
}
