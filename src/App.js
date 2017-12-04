import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import {Aux} from './components/utils/CommonUtil';
import {cookies} from './components/utils/CookiesProvider';
import Main from './components/Main';
import asyncComponent from "./components/AsyncComponent";
const AsyncAbout = asyncComponent(() => import("./components/presentational/AboutUs"));
const AsyncMain = asyncComponent(() => import("./components/Main"));
const AsyncProtected = asyncComponent(() => import("./components/Protected"));
const AsyncFormPage = asyncComponent(() => import("./components/FormPage"));

class App extends Component {
  removeAccessToken() {
    cookies.remove('accesstoken');
    console.log('cookie removed');
  }
  render() {
    return (
      <Aux>
        <Switch>
          <Route exact path="/" component={AsyncMain}/>
          <Route exact path="/home" component={AsyncMain}/>
          <Route exact path="/aboutus" component={AsyncAbout}/>
          <Route exact path="/formPage" component={AsyncFormPage}/>
          <Route path="/protected" component={AsyncProtected}/>
          <Route exact path="/:username" component={Main}/>
          <Route component={AsyncMain}/>
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
