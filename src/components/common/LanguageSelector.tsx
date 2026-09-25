import { useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'
import { languageLabels, setLanguage, type Language } from '@/i18n'

export default function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const [language, setCurrentLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    const value = window.localStorage.getItem('krishilink_lang')
    return value === 'hi' || value === 'mr' ? value : 'en'
  })

  const changeLanguage = (next: Language) => {
    setLanguage(next)
    setCurrentLanguage(next)
    window.dispatchEvent(new CustomEvent('krishilink-language-changed', { detail: next }))
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm">
      <SafeIcon name="Languages" size={16} aria-hidden="true" />
      {!compact && <span className="sr-only sm:not-sr-only">{languageLabels[language]}</span>}
      <select aria-label="Select language" value={language} onChange={(event) => changeLanguage(event.target.value as Language)} className="bg-transparent outline-none">
        {Object.entries(languageLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
      </select>
    </label>
  )
}
