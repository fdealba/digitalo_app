import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const startTimer = () => {
  return {
    type: actionTypes.START_TIMER
  };
};

export const stopTimer = () => {
  return {
    type: actionTypes.START_TIMER
  };
};

export const setTimer = (timer) => {
  return {
    type: actionTypes.SET_TIMER,
    timer: timer
  };
};

export const fetchFailedTimer = () => {
  return {
    type: actionTypes.FETCH_FAILED_TIMER
  }
}

export const initTimer = () => {
  return dispatch => {
    axios.get('api/load_timer')
      .then( response => {
        console.log(response);
        dispatch(setTimer(response.data));
      })
      .catch( error => {
        dispatch(fetchFailedTimer());
      })
  };
};