import React, { Component } from 'react';
import logo from './logo.svg';
import Signup from './Signup'
import Signin from './Signin'
import UserStatus from './UserStatus'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Customer Management</h2>
        </div>        
        
        <Signup />
        <hr />
        <Signin />
        <UserStatus />
      </div>
    );
  }
}

export default App;
