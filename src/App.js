import './App.css';
import  ItemDetailed from './ItemDetailed';
import Header from './Header';
import Home from './Home';
import About from './About';
import Apod from './Apod';

import React, { Component, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
  <Router>
      <div className="App">
          <Header />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/apod" component={Apod} />
              <Route path="/:id" component={ItemDetailed} />
          </Switch>
      </div>
  </Router>
  );
}

export default App;
