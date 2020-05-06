import React, { Component, Fragment } from 'react';
import { DashboardContainer, DashboardNav, Active } from './Dashboard.module.scss';
import Nav from '../../components/Nav/Nav';
import Team from './Team/Team';
import Me from './Me/Me';

//PONER ESTO EN CADA VISTA QUE USA REDUX!!!!
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    views: ['me', 'team'],
    currentView: 'me'
  };

  handleViewChange = (e) => {
    if (this.state.view !== e.target.innerText.toLowerCase()) {
      this.setState({ currentView: e.target.innerText.toLowerCase()})
    };
  }

  render () {
    const { views, currentView } = this.state;

    //Aca nos falta usar la magia de REDUX
    //Ahora no chupas mas desde STATE sino que chupas todo desde PROPS!!!
    //...this.props.ings

    const teamOrMe = currentView === 'me' ? <Me/> : <Team/>;
    return (
      <Fragment>
        <div className={DashboardContainer}>
          <h2>Dashboard</h2>
          <Nav views={views} currentView={currentView} handleViewChange={this.handleViewChange} />
          {teamOrMe}
        </div>
      </Fragment>
    )
  }
}


//MAPEAR LAS VARIABLES CON LOS VALORES QUE ESTAN EN EL STORE GENERAL
// const mapStateToProps = state => {
//   return{
//     ings: state.ingredients
//   };
// }

// //ACA VAN LAS FUNCIONES QUE QUERES QUE HAGA ESTA VISTA!!!!!!!! TODO ESTO SE MODIFICA DIRECTO EN EL STORE GENERAL
// const mapDispatchToProps = dispatch => {
//   return{
//     onIngredientsAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName})
//   };
// }

//Cableamos todo
export default Dashboard;
