import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getUserDetails} from '../services/UserService'
import Internationalize from './Internationalize';
import * as userActions from '../actions/user'

import {getApiContext} from './utils/ApiContextProvider';
import {Aux} from './utils/CommonUtil';
import Main from './presentational/Main'

class MainParent extends Component {
  async componentWillMount(){
    this.props.userActions.setUser({isLoading: true})
    const apiContext = getApiContext(this.props);

    // StaticContext has been set in the props by StaticRouter
    const {staticContext} = this.props;
    //TODO: Find the purpose of this key
    this._handleData('github-user', staticContext, apiContext)
  }
  async _handleData(key, staticContext, apiContext){
    const {isServer, isBrowser} = apiContext;
    if (isServer && staticContext.data[key]){
      // On Server (2nd-Rendering)
      // Get data from within staticContext which was set during 1st-Rendering
      // And use it to setState of the component
      const user = staticContext.data[key]
      this.props.userActions.setUser(user)
    } else if (isServer){
      // On Server (1st-Rendering)
      // Make API call to fetch data
      // And set data in staticContext for use in 2nd-Rendering
      staticContext.data[key] = this._getData(apiContext);
    } else if (isBrowser && window.USE_SERVER_DATA){
      // On Browser and SERVER_DATA is fresh and can be used
      // SSRed page has been received
      // setState from window.DATA
      this.props.userActions.setUser(this.props.user)
      // This causes updated data to be received on further visits to this page
      // SERVER_DATA is old now as it has already been used
      window.USE_SERVER_DATA = false
    } else if (isBrowser) {
      // On Browser, make API call to fetch data
      // Await here since we are calling an async function
      const user = await this._getData(apiContext)
      this.props.userActions.setUser(user)
    }
  }
  async _getData(apiContext){
    const user = await getUserDetails(apiContext)
    return user
  }
  render(){
    console.log('Main Rendered');
    return (
      <Aux>
        <Main {...this.props} />
        <Internationalize user={this.props.user} />
      </Aux>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainParent)
