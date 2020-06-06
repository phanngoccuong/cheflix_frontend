import React from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { Main, Login } from './pages';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
