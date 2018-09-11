import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { PrivateRoute, HeaderNavbar } from './_components';
import { LoginPage } from './views/LoginPage';
import { HomePage } from './views/HomePage';

import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <HeaderNavbar />
            </header>
            <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                      <Router history={history}>
                          <div className="container">
                              <PrivateRoute exact path="/" component={HomePage} />
                              <Route path="/login" component={LoginPage} />
                          </div>
                      </Router>
                  </div>
              </div>
          </div>
        );
  }
}

export default App;
