import * as actionTypes from './actionTypes';
import { updateObject } from './utility';

const initialState = {
  views: ['me', 'team'],
  activeView: 'me'
}

const updateView = (state, action) => {
  return updateObject(state, { activeView: action.view });
}

const reducer = (state = initialState, action) => {
  //todos las acciones posibles
  switch (action.type) {
    case actionTypes.UPDATE_VIEW : return updateView(state, action);
    default: return state;
  }
}

export default reducer;