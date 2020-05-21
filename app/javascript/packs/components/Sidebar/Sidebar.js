import React, { Component } from 'react';
import { 
  Sidebar, Logo, ProfilePicture, Active, Logout
} from './Sidebar.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import logo from 'images/logo/white-logo.svg';
import profilePictureExample from 'images/test-pics/profile-picture.jpg';
import Timer from '../Timer/Timer';

const ICONS = {
  dashboard: 'dashboard',
  tasks: 'assignment',
  calendar: 'calendar_today',
  office: 'work',
  time: 'schedule',
  alerts: 'notification_important'
};

const LINKS = {
  dashboard: 'Dashboard',
  tasks: 'Tasks',
  calendar: 'Calendar',
  office: 'Office',
  time: 'Time',
  alerts: 'Alerts'
};

const NAVLINKS = ['dashboard', 'tasks', 'calendar', 'office', 'time', 'alerts'];

const sidebar = ({
  profilePicture
}) => { 

  const links = NAVLINKS.map(link => {
    return (
      <li key={link}>
        <NavLink to={`/${link === 'dashboard' ? '' : link}`} exact activeClassName={Active} >
          <i className="material-icons">{`${ICONS[link]}`}</i>
          <span>{`${LINKS[link]}`}</span>
        </NavLink>
      </li>
    );
  })

  const logout = (
    <a className={Logout} rel="nofollow" data-method="delete" href="/user/sign_out">
      <i className="material-icons">exit_to_app</i>
    </a>
  );

  const businessLogo = (
    <img src={logo} className={Logo} alt="Logo"/>
  );

  const userProfilePicture = (
    <img src={profilePictureExample} className={ProfilePicture} alt="User Picture"/>
  );

  const html = (
    <div className={Sidebar}>
      {userProfilePicture}
      <ul>
        {links}
      </ul>
      <Timer/>
      {logout}
      {businessLogo}
    </div>
  );

  return html;
}

export default sidebar;