import React from 'react';
import { Nav, Active } from './Nav.module.scss';


const nav = ({ views, currentView, handleViewChange }) => {
  
  const links = views.map(link => {
    return <p key={link} className={currentView === link ? Active : ''} onClick={handleViewChange}>{link.toUpperCase()}</p>
  })

  return (
    <div className={Nav}>
      {links}
    </div>
  );
}

export default nav;