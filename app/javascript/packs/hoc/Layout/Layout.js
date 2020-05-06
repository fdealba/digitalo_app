import React, { Component, Fragment } from 'react';
import classes from './Layout.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';


class Layout extends Component {
  render () {
    return (
      <Fragment>
        <Sidebar />
              {this.props.children}
      </Fragment>
    )
  }
}

export default Layout;