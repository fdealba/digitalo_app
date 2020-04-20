import React from 'react';
import { Stats } from './MainStats.module.scss';


const mainStats = ({ statsData }) => {
  
  const stats = statsData.map(dataSet => {
    return <div key={dataSet.data}><p>{dataSet.title}</p><h2>{dataSet.data}</h2></div>
  })

  return (
    <div className={Stats}>
      {stats}
    </div>
  );
}

export default mainStats;