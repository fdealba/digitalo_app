import React, { Component } from 'react';
import { 
  Sidebar, Logo, ProfilePicture, Active 
} from './Sidebar.module.scss';
import logo from 'images/logo/white-color/white-color.svg';
import profilePictureExample from 'images/test-pics/profile-picture.jpg';

const sidebar = ({
  profilePicture
}) => {
  const html = (
    <div className={Sidebar}>
      <img src={profilePictureExample} className={ProfilePicture} alt="User Picture"/>
      <ul>
        <li><i className="material-icons">dashboard</i><a href="/">Dashboard</a></li>
        <li className={Active}><i className="material-icons">assignment</i><a href="/tasks">Tasks</a></li>
        <li><i className="material-icons">calendar_today</i><a href="/calendar">Calendar</a></li>
        <li><i className="material-icons">work</i><a href="/office">Office</a></li>
        <li><i className="material-icons">schedule</i><a href="/time">Time</a></li>
        <li><i className="material-icons">notification_important</i><a href="/alerts">Alerts</a></li>
      </ul>
      <img src={logo} className={Logo} alt="Logo"/>
    </div>
  );

  return html;
}

export default sidebar;
