import * as actionTypes from './actionTypes';
import { updateObject } from './utility';

const initialState = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  running: false
}

const startTimer = (state) => {
  return updateObject(state, { running: true });
}

const stopTimer = (state) => {
  return updateObject(state, { running: false });
}

const setTimer = (state, action) => {
  return updateObject(state, {
    seconds: action.timer.seconds,
    minutes: action.timer.minutes,
    hours: action.timer.hours,
    running: action.timer.running
  });
}

const updateTimer = (state, action) => {
  return updateObject(
    state, {
      seconds: action.timer.seconds,
      minutes: action.timer.minutes,
      hours: action.timer.hours
    });
}

const fetchFailedTimer = (state, action) => {
  return updateObject(state, action);
}

const reducer = (state = initialState, action) => {
  //todos las acciones posibles
  switch (action.type) {
    case actionTypes.START_TIMER : return startTimer(state);
    case actionTypes.STOP_TIMER : return stopTimer(state);
    case actionTypes.SET_TIMER : return setTimer(state, action);
    case actionTypes.UPDATE_TIMER : return updateTimer(state, action);
    case actionTypes.FETCH_FAILED_TIMER : return fetchFailedTimer(state, action);
    default: return state;
  }
}

export default reducer;