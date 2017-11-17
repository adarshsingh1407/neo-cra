import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {cookies} from '../utils/CookiesProvider';
import MetaHelmet from '../common/MetaHelmet';
import {Aux} from '../utils/CommonUtil';
import Header from '../common/Header';

//Main is a Presentational Component
class Main extends Component {
  setAccessToken() {
    cookies.set('accesstoken', 'EVIQXN0QA7JS0D0HGMLB7GVFDC3OZWPT');
    console.log('cookie set');
  }
  printToken() {
    console.log(cookies.get('accesstoken'));
  }
  render() {
    const {login = 'loading', name = 'loading'} = this.props.user
    return (
      <Aux>
        <MetaHelmet title={name}/>
        <Header />
        <div className='bold'>
          <h2>GitHub User Details:</h2>
          <p>{`Username: ${login}`}</p>
          <p>{`Name: ${name}`}</p>
          <Link to={'/aboutus'}>About Us</Link>
          <button onClick={this.setAccessToken}>
            Fake Login
          </button>
          <br />
          <button onClick={this.printToken}>
            Print accesstoken
          </button>
        </div>
      </Aux>
    )
  }
}

export default Main
