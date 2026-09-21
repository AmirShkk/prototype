
import React, { useEffect,useState } from 'react';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  iconName: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    iconName: 'Globe',
    flag: '🇬🇧',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    iconName: 'Globe',
    flag: '🇮🇳',
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    iconName: 'Globe',
    flag: '🇮🇳',
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    iconName: 'Globe',
    flag: '🇮🇳',
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    iconName: 'Globe',
    flag: '🇮🇳',
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    iconName: 'Globe',
    flag: '🇮🇳',
  },
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  const handleProceed = () => {
    setIsLoading(true);

    useEffect(() => {
      if (isLoading) {
        try {
          localStorage.setItem('preferredLanguage', selectedLanguage);
          const selectedLang = LANGUAGES.find(l => l.code === selectedLanguage);
          toast.success(`Language set to ${selectedLang?.name}`);

          setTimeout(() => {
            window.location.href = `./auth-portal.html?lang=${selectedLanguage}`;
          }, 300);
        } catch (error) {
          console.error('Failed to set language preference:', error);
          toast.error('Failed to set language. Please try again.');
          setIsLoading(false);
        }
      }
    }, [isLoading]);
  };

  const selectedLangObj = LANGUAGES.find(l => l.code === selectedLanguage);

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-page-title text-foreground">
          Select Your Language
        </h1>
        <p className="text-caption max-w-sm mx-auto">
          Choose your preferred language to get started with FarmHub Connect
        </p>
      </div>

      {/* Language Grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {LANGUAGES.map((language) => {
          const isSelected = selectedLanguage === language.code;

          return (
            <Card
              key={language.code}
              className={cn(
                "surface-base card-lift cursor-pointer transition-all duration-200 border-2",
                isSelected
                  ? "border-primary bg-primary/5 shadow-card"
                  : "border-border hover:border-primary/30"
              )}
              onClick={() => handleLanguageSelect(language.code)}
            >
              <CardContent className="card-padding flex flex-col items-center justify-center text-center space-y-3 py-6">
                {/* Flag Emoji */}
                <div className="text-4xl">{language.flag}</div>

                {/* Language Name */}
                <div className="space-y-1">
                  <h3 className="text-item-title font-bold text-foreground">
                    {language.name}
                  </h3>
                  <p className="text-caption text-muted-foreground">
                    {language.nativeName}
                  </p>
                </div>

                {/* Selection Indicator */}
                {isSelected && (
                  <div className="mt-2 flex items-center gap-1 text-primary font-medium text-xs">
                    <SafeIcon name="CheckCircle2" size={16} strokeWidth={2.5} />
                    <span>Selected</span>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <Button
          onClick={handleProceed}
          disabled={isLoading}
          className="w-full h-11 font-semibold shadow-md hover:shadow-lg transition-shadow"
        >
          {isLoading ? (
            <>
              <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
              Proceeding...
            </>
          ) : (
            <>
              <span>Continue with {selectedLangObj?.name}</span>
              <SafeIcon name="ArrowRight" size={18} className="ml-2" />
            </>
          )}
        </Button>

        <p className="text-center text-caption text-muted-foreground">
          You can change your language preference anytime in settings
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-accent/5 border border-accent/20 rounded-[--radius] p-4 space-y-2">
        <div className="flex items-start gap-2">
          <SafeIcon
            name="Info"
            size={18}
            className="text-accent mt-0.5 shrink-0"
            strokeWidth={2}
          />
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">
              Localization in Progress
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Full localization for all languages is coming soon. Currently, the interface is available in English with regional language support planned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
