import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'EN',
    lng: 'EN', // Default language
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
