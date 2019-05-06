import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UserContext from './context/user-context';
import Nav from './views/layout/nav/Nav';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Home from './views/home/Home';
import Dashboard from './views/dashboard/Dashboard';

class App extends Component {

  render() {
    return (
          <div className="app-container">
            <Nav/>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </div>
    );
  }
}

export default App;
