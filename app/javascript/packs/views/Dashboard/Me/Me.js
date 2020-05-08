import React, { Component, Fragment } from 'react';
import { } from './Me.module.scss';
import MainStats from '../../../components/MainStats/MainStats';
import Timer from '../../../components/Timer/Timer';

class Me extends Component {
  state = {
    statsData: [
      { title: 'Worked Today', 
        data: 8.46 },
      { title: 'Worked this Week', 
        data: 41.20 },
      { title: 'Proyects Worked',
        data: 1 },
      { title: 'Worked Today', 
        data: 8.40 },
      { title: 'Worked this Week', 
        data: 43.20 },
      { title: 'Proyects Worked',
        data: 5 },
      { title: 'Proyects Worked',
        data: 0.34 }
    ]
  }
  render () {
    const { statsData } = this.state;
    return (
      <Fragment>
        <MainStats statsData={statsData}/>
      </Fragment>
    )
  }
}

export default Me;
