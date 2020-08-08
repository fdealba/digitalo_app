// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Dashboard from './views/Dashboard/Dashboard';
import Alerts from './views/Alerts/Alerts';
import Calendar from './views/Calendar/Calendar';
import Time from './views/Time/Time';
import Office from './views/Office/Office';
import Tasks from './views/Tasks/Tasks';
import Layout from './hoc/Layout/Layout';

// Redux
import * as appActions from './global-store/actionCreators';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount () {
    this.props.onFetchUserData();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    onFetchUserData: () => dispatch(appActions.onFetchUserData())
  };
}

export default connect(null, mapDispatchToProps)(App);
