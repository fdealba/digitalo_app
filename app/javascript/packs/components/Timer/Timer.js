import React, { Component } from 'react';
import classes from './Timer.module.scss';
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

  startTimerCounter = () => {
    this.interval = setInterval(() => {
      let propsData = Object.assign({}, this.props);

      propsData.seconds++;
      if (propsData.seconds === 60) { 
        propsData.minutes += 1;
        propsData.seconds = 0;
        if (propsData.minutes === 60) {
          propsData.hours += 1;
          propsData.minutes = 0;
        }
      }

      this.props.onUpdateTimer({
        seconds: propsData.seconds, 
        minutes: propsData.minutes, 
        hours: propsData.hours
      });
    }, 1000);
  }

  toggleTimer = () => {
    if (this.props.running) {
      this.props.onStopTimer();
      this.props.onStopBackendTimer();
      clearInterval(this.interval);
    } else {
      this.props.onStartTimer();
      this.startTimerCounter();
      this.props.onStartBackendTimer();
    };
  };

  render () {
    const { seconds, minutes, hours, running } = this.props;
    const formatedHours = this.formatTime(hours);
    const formatedMinutes = this.formatTime(minutes);
    const formatedSeconds = this.formatTime(seconds);

    const time = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;
    const buttonClass = running ? 'danger' : 'primary';
    const innerText = running ? 'Stop' : 'Start';
    if (!this.interval && running) this.startTimerCounter();
    return (
    <div className={classes.Timer}>
      <p>{time}</p>
        <Button callback={this.toggleTimer} activeClass={buttonClass}>{innerText}</Button>
    </div>
    );
  }
}

//MAPEAR LAS VARIABLES CON LOS VALORES QUE ESTAN EN EL STORE GENERAL
const mapStateToProps = state => {
  return{
    seconds: state.timer.seconds,
    minutes: state.timer.minutes,
    hours: state.timer.hours,
    running: state.timer.running,
    error: state.error
  };
}

//ACA VAN LAS FUNCIONES QUE QUERES QUE HAGA ESTA VISTA!!!!!!!! TODO ESTO SE MODIFICA DIRECTO EN EL STORE GENERAL
const mapDispatchToProps = dispatch => {
  return{
    onStartTimer: () => dispatch(timerActions.startTimer()),
    onStartBackendTimer: () => dispatch(timerActions.startBackendTimer()),
    onStopTimer: () => dispatch(timerActions.stopTimer()),
    onStopBackendTimer: (state) => dispatch(timerActions.stopBackendTimer(state)),
    onUpdateTimer: (newValues) => dispatch(timerActions.updateTimer(newValues)),
    onInitTimer: () => dispatch(timerActions.initTimer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);