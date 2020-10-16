import React, {Component, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import TodoList from './components/TodoList';


export default class Router extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/todolist' component={TodoList}/>
      </Switch>
    )
  }
}
