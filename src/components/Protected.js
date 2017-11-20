import React, {Component} from 'react'
import {getApiContext} from './utils/ApiContextProvider';
import asyncComponent from "./AsyncComponent";
import {Redirect} from 'react-router-dom';

class Protected extends Component {
  render(){
    const {accesstoken} = getApiContext(this.props);
    if (accesstoken) {
      const AsyncPrivateRoute = asyncComponent(() => import("./presentational/PrivateRoute"));
      return(
        <AsyncPrivateRoute />
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
