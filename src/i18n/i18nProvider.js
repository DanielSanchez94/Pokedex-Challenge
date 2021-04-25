import polyglotI18nProvider from 'ra-i18n-polyglot';
import spanishMessages from './spanishMessages';
import englishMessages from './englishMessages';

const i18nProvider = polyglotI18nProvider(locale => 
    locale === 'fr' ? spanishMessages : englishMessages,
    'en' // Default locale
);

export default i18nProvider;