import * as React from "react";
import { Admin, Resource } from 'react-admin';
import pokemons from './pokemons';
import dataProvider from './dataProvider/dataProvider';
import MyLayout from './globalTheme/MyLayout';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import spanishMessages from './i18n/spanishMessages';
import englishMessages from './i18n/englishMessages';

const messages = {
  es: spanishMessages,
  en: englishMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

const App = () => (
  <Admin title="Poke" dataProvider={dataProvider} layout={ MyLayout } i18nProvider={ i18nProvider } >
    <Resource name="pokemon" {...pokemons}/>
  </Admin>
  );
  
export default App;