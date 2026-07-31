import { useLanguage } from '../../hooks/useLanguage';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-ink/20 overflow-hidden text-xs font-medium">
      <button
        onClick={() => setLang('bn')}
        className={`px-3 py-1.5 transition-colors ${
          lang === 'bn' ? 'bg-marigold text-ink' : 'text-ink/50 hover:text-ink'
        }`}
      >
        বাং
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1.5 transition-colors ${
          lang === 'en' ? 'bg-marigold text-ink' : 'text-ink/50 hover:text-ink'
        }`}
      >
        EN
      </button>
    </div>
  );
}