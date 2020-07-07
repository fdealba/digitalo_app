import React, { Component, Fragment } from 'react';
import { OfficeContainer } from './Office.module.scss';

class Office extends Component {
  render () {
    return (
      <div className={OfficeContainer}>
        <h2>Office</h2>
      </div>
    )
  }
}

export default Office;
