import { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [lang, setLangState] = useState(i18n.language);

  const setLang = (next) => {
    i18n.changeLanguage(next);
    localStorage.setItem('flowerhub_lang', next);
    setLangState(next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguageContext = () => useContext(LanguageContext);
