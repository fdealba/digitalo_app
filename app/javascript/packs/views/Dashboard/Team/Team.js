import React, { Component, Fragment } from 'react';
import { } from './Team.module.scss';
import MainStats from '../../../components/MainStats/MainStats';

class Team extends Component {
  state = {
    statsData: [
      { title: 'Worked Today', 
        data: 60.2 },
      { title: 'Worked this Week', 
        data: 150.20 },
      { title: 'Proyects Worked',
        data: 12 },
      { title: 'Worked Today', 
        data: 100.40 },
      { title: 'Worked this Week', 
        data: 402.20 },
      { title: 'Proyects Worked',
        data: 23 },
      { title: 'Proyects Worked',
        data: 0.34 }
    ]
  }
  render () {
    const { statsData } = this.state;
    return (
      <MainStats statsData={statsData}/>
    )
  }
}

export default Team;
