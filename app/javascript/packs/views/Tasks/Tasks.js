import React, { Component, Fragment } from 'react';
import { TasksContainer } from './Tasks.module.scss';

class Tasks extends Component {
  render () {
    return (
      <div className={TasksContainer}>
        <h2>Tasks</h2>
      </div>
    )
  }
}

export default Tasks;
