import React, { Component, Fragment } from 'react';
import { CalendarContainer } from './Calendar.module.scss';

class Calendar extends Component {
  render () {
    return (
      <div className={CalendarContainer}>
        <h2>Calendar</h2>
      </div>
    )
  }
}

export default Calendar;
