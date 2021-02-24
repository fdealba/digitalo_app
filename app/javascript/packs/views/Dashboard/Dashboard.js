import React, { Component, Fragment } from 'react';
import { DashboardContainer } from './Dashboard.module.scss';

// Components
import Nav from '../../components/Nav/Nav';
import Team from './Team/Team';
import Me from './Me/Me';

// Redux
import { connect } from 'react-redux';
import * as dashboardActions from './store/actionCreators';

class Dashboard extends Component {
  handleViewChange = (e) => {
    if (this.props.activeView !== e.target.innerText.toLowerCase()) {
      this.props.onUpdateView(e.target.innerText.toLowerCase());
    };
  }

  render () {
    const { views, activeView } = this.props;
    const teamOrMe = activeView === 'me' ? <Me/> : <Team/>;
    return (
      <Fragment>
        <div className={DashboardContainer}>
          <h2>Dashboard</h2>
          <Nav views={views} currentView={activeView} handleViewChange={this.handleViewChange} />
          {teamOrMe}
        </div>
      </Fragment>
    )
  }
}

//MAPEAR LAS VARIABLES CON LOS VALORES QUE ESTAN EN EL STORE GENERAL
const mapStateToProps = state => {
  return {
    views: state.dashboard.views,
    activeView: state.dashboard.activeView
  };
}

//ACA VAN LAS FUNCIONES QUE QUERES QUE HAGA ESTA VISTA!!!!!!!! TODO ESTO SE MODIFICA DIRECTO EN EL STORE GENERAL
const mapDispatchToProps = dispatch => {
  return {
    onUpdateView: (view) => dispatch(dashboardActions.updateView(view))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);