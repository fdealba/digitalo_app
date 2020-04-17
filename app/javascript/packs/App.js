// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard}/>
      </Switch>  
    )
  }
}

export default App;
