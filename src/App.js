import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import NavBar from './components/Navbar';
import Homepage from './components/Homepage'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <Route exact path='/' component={Homepage}/>
        </div>
    );
  }
}

export default App;
