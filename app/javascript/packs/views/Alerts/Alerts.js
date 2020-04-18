import React, { Component, Fragment } from 'react';
import css from './Alerts.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

class Alerts extends Component {
  render () {
    return (
      <Sidebar view='alerts' />
    )
  }
}

export default Alerts;
