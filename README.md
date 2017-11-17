# NEO-CRA

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Stack:
1. React 16
2. React-Router 4
3. Express 4
4. React-Helmet
5. Redux
6. Axios
7. Universal-Cookie
8. React-Intl

---------------------------------------------

BRANCH | DESCRIPTION
------------ | -------------
master | Async SSR, Redux, Internationalization
static-ssr | Static SSR Implemented
async-ssr | Async SSR Implemented (Also, Redux, Internationalization and other features)


---------------------------------------------

TASK | COMMAND
------------ | -------------
DEV_MODE | yarn start
BUILD_DEV | yarn build:dev
BUILD_PROD | yarn build:prod
BABELIFY | yarn babelify
TEST | yarn test
SERVE_PROD | pm2 start ecosystem.config.js --env production
SERVE_DEV | pm2 start ecosystem.config.js
EJECT_APP | yarn eject

---------------------------------------------

1. Before starting the project, redux store structure for the app needs to be thought of so that it can cater to all pages and maximum use cases.

---------------------------------------------

2. ENV

a. REACT_APP_ENV is given while building the app - For Browser ENV

b. Also, while starting the app on server(at runtime) - For Server ENV

---------------------------------------------

3. Managing Access Tokens

a. Import cookie instance from CookiesProvider wherever tokens need to be set/reset, i.e., login/logout

b. For making API calls or restricting routes with accesstoken, get the apiContext from ApiContextProvider

---------------------------------------------

4. Sanity Checks

a. App build is running fine

b. SSR is running properly

---------------------------------------------

5. I18N

a. React-Intl has been used for I18N.
IntlProvider is wrapped around the App on server-side(serverRender) and client-side(src/index).

b. On client-side, locale is fetched from navigator languages
On server-side, locale is fetched from accepted-language in header of the request
[Ref. localeMsgs]

c. Adding Locale
Add file to locales folder and add case to localeMsgs.js

d. If explicit widget is required to change preferred language, set it in a cookie and handle it in getLocale of localeMsgs

e. Translations Manager
[babel-plugin-react-intl](https://github.com/yahoo/babel-plugin-react-intl) currently helps spit out all the translations(for Translators) used in the app. If you want this to be in one file, use [React-intl-translations-manager](https://github.com/GertjanReynaert/react-intl-translations-manager) for managing translations. It has other powerful options too, if you want to explore.
