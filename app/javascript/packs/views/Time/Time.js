import React, { Component, Fragment } from 'react';
import { TimeContainer } from './Time.module.scss';

class Time extends Component {
  render () {
    return (
      <div className={TimeContainer}>
        <h2>Time</h2>
      </div>
    )
  }
}

export default Time;
