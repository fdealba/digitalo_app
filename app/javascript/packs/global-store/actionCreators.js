import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const onFetchUserData = () => {
  return dispatch => {
    axios.get('api/user_data')
      .then( response => {
        dispatch(setUserData(response.data));
      })
      .catch( error => {
        dispatch(fetchFailedTimer());
      })
  };
};

export const setUserData = (state) => {
  return {
    type: actionTypes.SET_USER_DATA,
    user: state.user
  };
};