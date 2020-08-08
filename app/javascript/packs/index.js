import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import timerReducer from './components/Timer/store/reducer';
import dashboardReducer from './views/Dashboard/store/reducer';
import appReducer from './global-store/reducer';

// Axios
import axios from 'axios';

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  timer: timerReducer,
  dashboard: dashboardReducer,
  app: appReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const body = document.querySelector('.main-container');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>, body);
