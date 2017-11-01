import React, {Component} from 'react';
import MetaHelmet from './common/MetaHelmet';
import {Aux} from './utils/CommonUtil';
// import Header from './common/Header';

class Main extends Component {
  render() {
    return (
      <Aux>
        <MetaHelmet/>
        {/* <Header/> component will go here */}
        <div>Home Page Content Goes here</div>
      </Aux>
    );
  }
}

export default Main
