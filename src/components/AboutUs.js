import React, {Component} from 'react';
import MetaHelmet from './common/MetaHelmet';
import {Aux} from './utils/CommonUtil';
// import Header from './common/Header';

class AboutUs extends Component {
  render() {
    return (
      <Aux>
        <MetaHelmet/>
        {/* <Header/> component will go here */}
        <div>About Us Page Content Goes here</div>
      </Aux>
    );
  }
}

export default AboutUs
