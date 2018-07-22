import React, { Component } from 'react';
import './App.css';
import FoodJokes from './Components/FoodJokes';
import { Route, Switch } from 'react-router-dom';
import CelebrityJokes from './Components/CelebrityJokes';
import { requireAuth } from './utils/AuthService';
import Callback from './Components/Callback';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Switch>
          <Route exact path="/" component={FoodJokes}/>
          <Route path="/special" component={CelebrityJokes} onEnter={requireAuth} />
          <Route path="/callback" component={Callback} />
      </Switch>
      </div>
    );
  }
}

export default App;
