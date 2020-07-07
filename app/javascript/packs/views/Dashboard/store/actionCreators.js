import * as actionTypes from './actionTypes.js';

export const updateView = (view) => {
  return {
    type: actionTypes.UPDATE_VIEW,
    view: view
  }
}