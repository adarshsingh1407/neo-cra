import enUS from './locales/enUS'
import enGB from './locales/enGB'
import ruRU from './locales/ruRU'

const defaultLocale = 'en-US';

const getLocaleMsgs = (locale) => {
  switch (locale) {
    case 'en-US':
      return enUS
    case 'en-GB':
      return enGB
    case 'ru-RU':
      return ruRU
    default:
      return enUS
  }
}

const getLocale = (serverRequest) => {
  if (serverRequest) {
    if (serverRequest.headers['accept-language']) {
      var acceptedLang = serverRequest.headers['accept-language'];
      return acceptedLang.substring(0, acceptedLang.indexOf(','));
    } else {
      return defaultLocale;
    }
  } else {
    if (navigator && navigator.languages && navigator.languages[0]) {
      return navigator.languages[0];
    } else if (navigator.language) {
      return navigator.language;
    } else if (navigator.userLanguage) {
      return navigator.userLanguage;
    } else {
      return defaultLocale;
    }
  }
}

export {getLocaleMsgs, getLocale}
