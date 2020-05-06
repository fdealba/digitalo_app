// To reference this file, add <%= javascript_pack_tag 'App' %> to the appropriate

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import Alerts from './views/Alerts/Alerts';
import Calendar from './views/Calendar/Calendar';
import Time from './views/Time/Time';
import Office from './views/Office/Office';
import Tasks from './views/Tasks/Tasks';
import Layout from './hoc/Layout/Layout';


class App extends Component {
  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/alerts" component={Alerts}/>
          <Route exact path="/calendar" component={Calendar}/>
          <Route exact path="/time" component={Time}/>
          <Route exact path="/office" component={Office}/>
          <Route exact path="/tasks" component={Tasks}/>
        </Switch>
      </Layout>
    )
  }
}

export default App;
