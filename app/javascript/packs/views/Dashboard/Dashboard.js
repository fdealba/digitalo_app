import React, { Component, Fragment } from 'react';
import css from './Dashboard.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

class Dashboard extends Component {
  render () {
    return (
      <Sidebar view='dashboard' />
    )
  }
}

export default Dashboard;
