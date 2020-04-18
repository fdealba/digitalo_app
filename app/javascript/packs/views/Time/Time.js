import React, { Component, Fragment } from 'react';
import css from './Time.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

class Time extends Component {
  render () {
    return (
      <Sidebar view='time' />
    )
  }
}

export default Time;
