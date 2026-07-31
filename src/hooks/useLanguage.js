import { useLanguageContext } from '../context/LanguageContext';

const BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// Converts standard Arabic numerals to Eastern Arabic (Bengali) numerals
// when the site is in Bengali mode — required by the dual-language spec.
export function toLocaleDigits(num, lang) {
  const str = String(num);
  if (lang !== 'bn') return str;
  return str.replace(/[0-9]/g, (d) => BENGALI_DIGITS[Number(d)]);
}

export function useLanguage() {
  const { lang, setLang } = useLanguageContext();

  const formatCurrency = (amount) => {
    const formatted = Number(amount).toLocaleString('en-US');
    return `৳${toLocaleDigits(formatted, lang)}`;
  };

  const formatNumber = (num) => toLocaleDigits(num, lang);

  return { lang, setLang, formatCurrency, formatNumber };
}
