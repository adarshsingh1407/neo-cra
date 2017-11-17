import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import PrivateRoute from './presentational/PrivateRoute';
import {getApiContext} from './utils/ApiContextProvider';

class Protected extends Component {
  render(){
    const {accesstoken} = getApiContext(this.props);
    if (accesstoken) {
      return(
        <PrivateRoute />
      )
    } else {
      return(
        <Redirect to={{
            pathname: '/aboutus'
          }} />
      )
    }
  }
}

export default Protected
