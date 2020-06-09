import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { Main, Login } from './pages';
import { axios, isAuthenticated } from './utils';

function App() {
  // Check if authenticated and add bearer token to every request
  if (isAuthenticated()) {
    axios.injectToken(localStorage.getItem('token'));
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
