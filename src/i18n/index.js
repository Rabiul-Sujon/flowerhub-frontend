import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import bn from './bn.json';
import en from './en.json';

i18n.use(initReactI18next).init({
  resources: {
    bn: { translation: bn },
    en: { translation: en },
  },
  lng: localStorage.getItem('flowerhub_lang') || 'bn', // Bengali-first, per spec
  fallbackLng: 'bn',
  interpolation: { escapeValue: false },
});

export default i18n;
