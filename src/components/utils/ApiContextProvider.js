import queryString from 'query-string';
import {cookies} from './CookiesProvider';

const getApiContext = (props) => {
  const {staticContext} = props;
  let apiContext = {
    queryParams: {},
    accesstoken: '',
    pathParams: props.match.params,
    isServer: staticContext !== undefined
  };
  if (apiContext.isServer) {
    // On Server
    // queryParams are in staticContext
    apiContext.queryParams = staticContext.req.query;
    //And accesstoken in request header
    var headerCookies = queryString.parse(staticContext.req.headers.cookie)
    apiContext.accesstoken = headerCookies.accesstoken;
  } else {
    // On Browser
    // queryParams are received as search in location object provided by react-router
    apiContext.queryParams = queryString.parse(props.location.search);
    // And accesstoken is retrieved from cookie
    apiContext.accesstoken = cookies.get('accesstoken');
  }
  return {...apiContext, isBrowser: !apiContext.isServer};
}

export {getApiContext}
