import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './locales';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en,
  },
});

export default i18n;
