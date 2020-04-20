import React, { Component } from 'react';
import { TimerMain } from './Timer.module.scss';
import Button from '../Button/Button';

class Timer extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    running: false,
    buttonClass: 'primary'
  }

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  toggleTimer = () => {


    // ACA PASE LO QUE PASE SE LE TIENE QUE AVISAR AL BACK Q VOS TOCASTE START/STOP PARA SABER SI ESTAS LABURANDO O NO


    if (!this.state.running) {
      this.setState({ running: true, buttonClass: 'danger' });
      this.interval = setInterval(() => {
        let stateCopy = Object.assign({}, this.state);

        stateCopy.seconds++;
        if (stateCopy.seconds === 60) { 
          stateCopy.minutes += 1;
          stateCopy.seconds = 0;
          if (stateCopy.minutes === 60) {
            stateCopy.hours += 1;
            stateCopy.minutes = 0;
          }
        }

        this.setState({ 
          seconds: stateCopy.seconds, 
          minutes: stateCopy.minutes, 
          hours: stateCopy.hours
        })
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.setState({ running: false, buttonClass: 'primary' });
    }
  }

  render () {
    const { seconds, minutes, hours, running, buttonClass } = this.state;
    const formatedHours = this.formatTime(hours);
    const formatedMinutes = this.formatTime(minutes);
    const formatedSeconds = this.formatTime(seconds);

    const time = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;

    const innerText = running ? 'Stop' : 'Start';
    return (
    <div className={TimerMain}>
      <p>{time}</p>
        <Button innerText={innerText} callback={this.toggleTimer} activeClass={buttonClass}/>
    </div>
    );
  }
}

export default Timer;