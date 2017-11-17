import axios from 'axios';
import qs from 'query-string';
import { ENV, RESPONSE_CODE } from '../../config';

const getApiInstance = (baseUrl) => {
  const config = {
    baseURL: baseUrl,
    timeout: 5000,
    paramsSerializer: function(queryParams) {
      return qs.stringify(queryParams)
    }
  };
  var axiosInstance = axios.create(config);
  // Req Intercept
  axiosInstance.interceptors.request.use((config) => {
    // Do something before request is sent
    // console.info('config:', config);
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });
  // Response interceptor
  axiosInstance.interceptors.response.use((response) => {
    // Do something with response data
    // if (RESPONSE_CODE.AUTH_FAILED === result.data.status) {
    //   // Logic to redirect to login screen and remove cookies and userData
    //   // based on internal status of your API
    //   console.log('AUTH_FAILED');
    // }
    return response;
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  });
  return axiosInstance;
}

const githubApi = getApiInstance(ENV.BASE_URL);

export {githubApi}
