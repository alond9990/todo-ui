import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderNavbar from './_components/HeaderNavbar';
import { history } from './_helpers';
import { alertActions } from './_actions';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
          <div className="App">
            <header className="App-header">
              <HeaderNavbar />
            </header>
            <div className="container">
                  <div className="col-sm-8 col-sm-offset-2">
                      {alert.message &&
                      <div className={`alert ${alert.type}`}>{alert.message}</div>
                          }
                      <Router history={history}>
                          <div>

                          </div>
                      </Router>
                  </div>
              </div>
          </div>
        );
  }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
