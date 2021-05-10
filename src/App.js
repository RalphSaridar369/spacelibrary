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
              <Route exact path="/spacelibrary/">
                  < Home />
              </Route>
              <Route path="/About/">
                  <About />
              </Route>
              <Route path="/Apod/">
                  <Apod />
              </Route>
              <Route path="/spacelibrary/:id">
                  <ItemDetailed />
              </Route>
          </Switch>
      </div>
  </Router>
  );
}

export default App;
