import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Element from '../Element/Element';

const App = () => {
  return (
    <section className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
          <Route exact path="/cards">
            <Header />
            <Element />
          </Route>
        </Switch>
      </Router>
    </section>
  );
};

export default App;
