import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { authEn } from './features/auth';
import { contentEn } from './features/content';
import { layoutEn } from './features/layout';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        ...authEn,
        ...contentEn,
        ...layoutEn,
      },
    },
  },
});

export default i18n;
