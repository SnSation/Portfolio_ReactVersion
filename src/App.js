import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import MainFooter from './components/MainFooter'

export default class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return (
      <div className="global_Container col">

        <Navbar />

        <div className="global_Content row">
          <Switch>
            <Route exact path='/' render={ () => <Home page="Home" /> } />
            <Route exact path='/projects' render={ () => <Home page="Projects" /> } />
          </Switch>
        </div>

        <MainFooter />

      </div>
    )
  }
}