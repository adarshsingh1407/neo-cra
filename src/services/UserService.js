import {githubApi} from '../components/utils/ApiProvider';
import { ENV } from '../config'
import { MSG } from '../messages'

const getUserDetails = (apiContext) => {
  const {username} = apiContext.pathParams;
  return githubApi.request({
      url: `${ENV.GET_USER_DETAILS}/${username}`,
      method: 'GET'
    })
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.error(err);
      return {
        msg: MSG.SWG
      }
    })
}

export {getUserDetails}
