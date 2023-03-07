import 'react-i18next'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // use fix for React18 https://github.com/i18next/react-i18next/pull/1492
    allowObjectInHTMLChildren: true;
  }
}
