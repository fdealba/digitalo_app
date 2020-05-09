import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const startTimer = () => {
  return {
    type: actionTypes.START_TIMER
  };
};

export const startBackendTimer = () => {
  return dispatch => {
    axios.post('api/start_timer')
      .then(response => {
        console.log(response);
      })
      .catch( error => {
        dispatch(fetchFailedTimer());
      })
  }
};

export const stopTimer = () => {
  return {
    type: actionTypes.STOP_TIMER
  };
};

export const stopBackendTimer = (state) => {
  return dispatch => {
    axios.post('api/stop_timer', {
      ...state
    })
      .then(response => {
        console.log(response);
      })
      .catch( error => {
        dispatch(fetchFailedTimer());
      })
  }
};

export const setTimer = (state) => {
  return {
    type: actionTypes.SET_TIMER,
    timer: state.timer
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

export const updateTimer = (newValues) => {
  return {
    type: actionTypes.UPDATE_TIMER,
    timer: newValues
  }
}