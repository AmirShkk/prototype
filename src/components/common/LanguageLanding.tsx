import { useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'
import { languageLabels, setLanguage, type Language } from '@/i18n'

export default function LanguageLanding() {
  const [selected, setSelected] = useState<Language | null>(null)

  const continueToAuth = () => {
    if (!selected) return
    setLanguage(selected)
    window.location.href = './auth-portal.html'
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
      <section className="w-full max-w-md space-y-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <SafeIcon name="Sprout" size={34} />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-foreground">KrishiLink</h1>
            <p className="mt-2 text-sm text-muted-foreground">Choose your preferred language</p>
          </div>
        </div>
        <div className="grid gap-3">
          {(Object.entries(languageLabels) as [Language, string][]).map(([value, label]) => (
            <button key={value} type="button" onClick={() => setSelected(value)} className={`rounded-xl border px-5 py-4 text-left text-lg font-semibold transition-colors ${selected === value ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-card hover:border-primary/50 hover:bg-muted/40'}`}>
              {label}
            </button>
          ))}
        </div>
        <button type="button" onClick={continueToAuth} disabled={!selected} className="w-full rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-50">
          Continue
        </button>
      </section>
    </main>
  )
}
