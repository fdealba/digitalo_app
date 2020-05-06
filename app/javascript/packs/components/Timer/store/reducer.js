import * as actionTypes from './actionTypes';
import { updateObject, updateTimer } from './utility';

const initialState = {
  timer: {
    seconds: 0,
    minutes: 0,
    hours: 0,
    running: false
  },
  error: false
}

const reducer = (state = initialState, action) => {
  //todos las acciones posibles
  switch (action.type) {
    case actionTypes.START_TIMER:
      return updateTimer(state, { running: true })
    case actionTypes.STOP_TIMER:
      return updateTimer(state, { running: false })
    case actionTypes.SET_TIMER:
      return updateObject(state, { timer: action.timer, error: false })
    case actionTypes.FETCH_FAILED_TIMER:
      return updateObject(state, { error: true })
    };
    return state
}

export default reducer;