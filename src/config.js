import {CONST} from './constants'

const STAG_ENV = {
  BASE_URL: 'https://api.github.com'
}

const PROD_ENV = {
  BASE_URL: 'https://api.github.com'
}

const COMMON = {
  GET_USER_DETAILS: 'users'
}

let ENV = {};

switch (process.env.REACT_APP_ENV) {
  case CONST.PRODUCTION:
    ENV = {...PROD_ENV, ...COMMON};
    console.log('Running in PROD_ENV');
    break;
  default:
    ENV = {...STAG_ENV, ...COMMON};
    console.log('Running in STAG_ENV');
}

const RESPONSE_CODE = {
  AUTH_FAILED: 4000
}

export {
  ENV,
  RESPONSE_CODE
}
