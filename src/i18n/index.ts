import en from './en.json'
import hi from './hi.json'
import mr from './mr.json'

export type Language = 'en' | 'hi' | 'mr'
export const languageLabels: Record<Language, string> = { en: 'English', hi: 'हिंदी', mr: 'मराठी' }
const dictionaries = { en, hi, mr }

export function getLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  const value = window.localStorage.getItem('krishilink_lang')
  return value === 'hi' || value === 'mr' ? value : 'en'
}

export function setLanguage(language: Language) {
  window.localStorage.setItem('krishilink_lang', language)
}

export function t(key: string, language: Language = getLanguage()) {
  return dictionaries[language][key as keyof typeof en] || dictionaries.en[key as keyof typeof en] || key
}

export { dictionaries }
