import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home';

export default class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return (
      <div>
        <div className="PageContainer">
          <Switch>
            <Route exact path='/' render={ () => <Home /> } />
          </Switch>
        </div>
      </div>
    )
  }
}