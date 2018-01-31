import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Landing from './landing';
import Login from './login';
import Register from './register';
import Profile from './profile';
import Nav from './nav';
import Browse from './browse';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/home' component={Profile} />
          <Route path='/browse' component={Browse} />
        </div>
      </Router>
    );
  }
}

export default App;
