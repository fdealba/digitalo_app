import React, { Component, Fragment } from 'react';
import css from './Office.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

class Office extends Component {
  render () {
    return (
      <Sidebar view='office' />
    )
  }
}

export default Office;
