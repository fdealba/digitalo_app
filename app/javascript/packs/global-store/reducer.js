import * as actionTypes from './actionTypes';
import { updateObject } from './utility';

const initialState = {
  user: null
}

const setUserData = (state, action) => {
  return updateObject(state, { user: action.user });
}

const reducer = (state = initialState, action) => {
  //todos las acciones posibles
  switch (action.type) {
    case actionTypes.SET_USER_DATA : return setUserData(state, action);
    default: return state;
  }
}

export default reducer;