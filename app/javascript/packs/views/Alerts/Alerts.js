import React, { Component } from 'react';
import { AlertsContainer } from './Alerts.module.scss';

class Alerts extends Component {
  render () {
    return (
      <div className={AlertsContainer}>
        <h2>Alerts</h2>
      </div>
    )
  }
}

export default Alerts;
