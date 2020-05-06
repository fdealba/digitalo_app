import React, { Component } from 'react';
import { TimerMain } from './Timer.module.scss';
import Button from '../UI/Button/Button';

import { connect } from 'react-redux';
import * as timerActions from './store/actionCreators';


class Timer extends Component {
  componentDidMount() {
    this.props.onInitTimer();
  }

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  toggleTimer = () => {
    // ACA PASE LO QUE PASE SE LE TIENE QUE AVISAR AL BACK Q VOS TOCASTE START/STOP PARA SABER SI ESTAS LABURANDO O NO
    this.props.timer.running ? this.props.onStopTimer() : this.props.onStartTimer();

    // if (!this.state.running) {
    //   this.setState({ running: true, buttonClass: 'danger' });
    //   this.interval = setInterval(() => {
    //     let stateCopy = Object.assign({}, this.state);

    //     stateCopy.seconds++;
    //     if (stateCopy.seconds === 60) { 
    //       stateCopy.minutes += 1;
    //       stateCopy.seconds = 0;
    //       if (stateCopy.minutes === 60) {
    //         stateCopy.hours += 1;
    //         stateCopy.minutes = 0;
    //       }
    //     }

    //     this.setState({ 
    //       seconds: stateCopy.seconds, 
    //       minutes: stateCopy.minutes, 
    //       hours: stateCopy.hours
    //     })
    //   }, 1000);
    // } else {
    //   clearInterval(this.interval);
    //   this.setState({ running: false, buttonClass: 'primary' });
    // }
  }

  render () {
    const { seconds, minutes, hours, running } = this.props.timer;
    const formatedHours = this.formatTime(hours);
    const formatedMinutes = this.formatTime(minutes);
    const formatedSeconds = this.formatTime(seconds);

    const time = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;
    const buttonClass = running ? 'danger' : 'primary';
    const innerText = running ? 'Stop' : 'Start';
    return (
    <div className={TimerMain}>
      <p>{time}</p>
        <Button innerText={innerText} callback={this.toggleTimer} activeClass={buttonClass}/>
    </div>
    );
  }
}

//MAPEAR LAS VARIABLES CON LOS VALORES QUE ESTAN EN EL STORE GENERAL
const mapStateToProps = state => {
  return{
    timer: state.timer,
    error: state.error
  };
}

//ACA VAN LAS FUNCIONES QUE QUERES QUE HAGA ESTA VISTA!!!!!!!! TODO ESTO SE MODIFICA DIRECTO EN EL STORE GENERAL
const mapDispatchToProps = dispatch => {
  return{
    onStartTimer: () => dispatch(timerActions.startTimer()),
    onStopTimer: () => dispatch(timerActions.stopTimer()),
    onInitTimer: () => dispatch(timerActions.initTimer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);