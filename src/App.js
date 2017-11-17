import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Main from './components/Main';
import Protected from './components/Protected';
import FormPage from './components/FormPage';
import AboutUs from './components/presentational/AboutUs';
import {Aux} from './components/utils/CommonUtil';
import {cookies} from './components/utils/CookiesProvider';

class App extends Component {
  removeAccessToken() {
    cookies.remove('accesstoken');
    console.log('cookie removed');
  }
  render() {
    return (
      <Aux>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/home" component={Main}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/formPage" component={FormPage}/>
          <Route path="/protected" component={Protected}/>
          <Route exact path="/:username" component={Main}/>
          <Route component={Main}/>
        </Switch>
        <button onClick={this.removeAccessToken}>
          Fake Logout
        </button>
        <br />
        <Link to={'/formPage'}>Form Page</Link>
        <br />
        <Link to={'/protected'}>Protected Page</Link>
      </Aux>
    );
  }
}

export default App;
