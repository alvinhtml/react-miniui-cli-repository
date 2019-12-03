import React, {Component, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Use from './container/Use';
import Welcome from './container/Welcome';
import Main from './container/Main';


export default class Router extends Component {
  render() {
    return(
      <Main>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/welcome' component={Welcome}/>
          <Route path='/use' component={Use}/>
        </Switch>
      </Main>
    )
  }
}
