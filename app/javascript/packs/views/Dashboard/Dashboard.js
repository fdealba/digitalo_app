import React, { Component, Fragment } from 'react';
import { DashboardContainer } from './Dashboard.module.scss';
import Nav from '../../components/Nav/Nav';
import Team from './Team/Team';
import Me from './Me/Me';

class Dashboard extends Component {
  state = {
    views: ['me', 'team'],
    currentView: 'me'
  };

  handleViewChange = (e) => {
    if (this.state.view !== e.target.innerText.toLowerCase()) {
      this.setState({ currentView: e.target.innerText.toLowerCase()})
    };
  }

  render () {
    const { views, currentView } = this.state;

    const teamOrMe = currentView === 'me' ? <Me/> : <Team/>;
    return (
      <Fragment>
        <div className={DashboardContainer}>
          <h2>Dashboard</h2>
          <Nav views={views} currentView={currentView} handleViewChange={this.handleViewChange} />
          {teamOrMe}
        </div>
      </Fragment>
    )
  }
}

export default Dashboard;
