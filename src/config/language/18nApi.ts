import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    

    supportedLngs: ['en', 'ar', 'fr'],
      fallbackLng: 'en',
      debug: true,
      // Options for language detector
      detection: {
        order: ['path', 'cookie', 'htmlTag'],
        caches: ['cookie'],
      },
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/traduction.json',
    },
  });

export default i18n;