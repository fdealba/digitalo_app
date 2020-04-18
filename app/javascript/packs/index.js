import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const body = document.querySelector('.main-container');

ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>,body 
);
