import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';

export default class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return (
      <div className="global_Container col">
        <div className="global_Header row">
          <Navbar />
        </div>
        <div className="global_content row">
          <Switch>
            <Route exact path='/' render={ () => <Home page="Home" /> } />
          </Switch>
        </div>
        <div className="global_Footer row">

        </div>
      </div>
    )
  }
}