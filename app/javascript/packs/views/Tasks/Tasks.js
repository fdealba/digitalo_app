import React, { Component, Fragment } from 'react';
import css from './Tasks.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

class Tasks extends Component {
  render () {
    return (
      <Sidebar view='tasks' />
    )
  }
}

export default Tasks;
