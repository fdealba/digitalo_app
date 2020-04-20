import React, { Component } from 'react';
import { TimerMain } from './Timer.module.scss';


class Timer extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    running: false
  }

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  }

  toggleTimer = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.interval = setInterval(() => {
        let stateCopy = Object.assign({}, this.state);

        stateCopy.seconds++;
        if (stateCopy.seconds === 60) { 
          stateCopy.minutes += 1;
          stateCopy.seconds = 0;
          if (stateCopy.minutes === 60) {
            stateCopy.hours += 1;
            stateCopy.minutes = 0;
          };
        }

        this.setState({ 
          seconds: stateCopy.seconds, 
          minutes: stateCopy.minutes, 
          hours: stateCopy.hours 
        })
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.setState({ running: false });
    }
  }

  render () {
    const { seconds, minutes, hours, running } = this.state;
    const formatedHours = this.formatTime(hours);
    const formatedMinutes = this.formatTime(minutes);
    const formatedSeconds = this.formatTime(seconds);

    const time = `${formatedHours}:${formatedMinutes}:${formatedSeconds}`
    return (
    <div className={TimerMain}>
      <p>{time}</p>
      <p onClick={this.toggleTimer}>{ running ? 'Stop' : 'Start' }</p>
    </div>
    );
  }
}

export default Timer;