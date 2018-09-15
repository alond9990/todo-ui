import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import SecuredRoute from './components/SecuredRoute';

import NavBar from './components/Navbar';
import Homepage from './components/Homepage'
import Loginpage from './components/Loginpage'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <SecuredRoute exact path='/' component={Homepage}/>
            <Route exact path='/login' component={Loginpage}/>
        </div>
    );
  }
}

export default App;
