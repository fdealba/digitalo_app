import React, { Component } from 'react';
import { 
  Sidebar, Logo, ProfilePicture, Active 
} from './Sidebar.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import logo from 'images/logo/white-color/white-color.svg';
import profilePictureExample from 'images/test-pics/profile-picture.jpg';

const ICONS = {
  dashboard: 'dashboard',
  tasks: 'assignment',
  calendar: 'calendar_today',
  office: 'work',
  time: 'schedule',
  alerts: 'notification_important'
};

const CAPITALIZED_LINKS = {
  dashboard: 'Dashboard',
  tasks: 'Tasks',
  calendar: 'Calendar',
  office: 'Office',
  time: 'Time',
  alerts: 'Alerts'
}

const sidebar = ({
  profilePicture, view
}) => { 
  const navlinks = ['dashboard', 'tasks', 'calendar', 'office', 'time', 'alerts'];

  const links = navlinks.map(link => {
    return (
      <li key={link}><NavLink to={`/${link === 'dashboard' ? '' : link}`} exact activeClassName={Active} ><i className="material-icons">{`${ICONS[link]}`}</i><span>{`${CAPITALIZED_LINKS[link]}`}</span></NavLink></li>
    );
  })
  const html = (
    <div className={Sidebar}>
      <img src={profilePictureExample} className={ProfilePicture} alt="User Picture"/>
      <ul>
        {links}
      </ul>
      <img src={logo} className={Logo} alt="Logo"/>
    </div>
  );

  return html;
}

export default sidebar;