import React from 'react';
import { 
  Sidebar,
  Logo,
  ProfilePicture,
  UserDataContainer,
  Active,
  Logout
} from './Sidebar.module.scss';

import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import Timer from '../Timer/Timer';

import logo from 'images/logo/white-logo.svg';
import profilePictureExample from 'images/test-pics/profile-picture.jpg';

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

const sidebar = () => {
  const user = useSelector(state => state.app.user);

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

  const userData = (
    <div className={UserDataContainer}>
      <img src={profilePictureExample} className={ProfilePicture} alt="User Picture"/>
      <p>{user ? user.name + ' ' + user.last_name  : ''}</p>
    </div>
  );

  const html = (
    <div className={Sidebar}>
      <ul>
        {userData}
        {links}
      </ul>
      <div>
        <Timer/>
        {logout}
        {businessLogo}
      </div>
    </div>
  );

  return html;
}

export default sidebar;