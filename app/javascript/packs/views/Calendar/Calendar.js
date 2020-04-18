import React, { Component, Fragment } from 'react';
import css from './Calendar.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

class Calendar extends Component {
  render () {
    return (
      <Sidebar view='calendar' />
    )
  }
}

export default Calendar;
