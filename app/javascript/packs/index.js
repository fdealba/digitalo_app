import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRoutes as Router, Route } from 'react-router-dom';
import App from './App';

document.addEventListener('', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App}/>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
});