import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main';
import AboutUs from './components/AboutUs';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route component={Main}/>
      </Switch>
    );
  }
}

export default App;
