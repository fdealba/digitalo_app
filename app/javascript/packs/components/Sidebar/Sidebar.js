import React, { Component } from 'react';
import { 
  Sidebar, Logo, ProfilePicture, Active 
} from './Sidebar.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from 'images/logo/white-color/white-color.svg';
import profilePictureExample from 'images/test-pics/profile-picture.jpg';

const sidebar = ({
  profilePicture, view
}) => { 
  const html = (
    <div className={Sidebar}>
      <img src={profilePictureExample} className={ProfilePicture} alt="User Picture"/>
      <ul>
        <Link to="/"><li className={view === 'dashboard' ? Active : ''}><i className="material-icons">dashboard</i><span>Dashboard</span></li></Link>
        <Link to="/tasks"><li className={view === 'tasks' ? Active : ''}><i className="material-icons">assignment</i><span>Tasks</span></li></Link>
        <Link to="/calendar"><li className={view === 'calendar' ? Active : ''}><i className="material-icons">calendar_today</i><span>Calendar</span></li></Link>
        <Link to="/office"><li className={view === 'office' ? Active : ''}><i className="material-icons">work</i><span>Office</span></li></Link>
        <Link to="/time"><li className={view === 'time' ? Active : ''}><i className="material-icons">schedule</i><span>Time</span></li></Link>
        <Link to="/alerts"><li className={view === 'alerts' ? Active : ''}><i className="material-icons">notification_important</i><span>Alerts</span></li></Link>
      </ul>
      <img src={logo} className={Logo} alt="Logo"/>
    </div>
  );

  return html;
}

export default sidebar;
