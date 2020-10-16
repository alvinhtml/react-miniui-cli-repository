import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

export default class Header extends Component {

  render() {
    return(
      <div style={{testAlign: 'right'}}>
        <Link to="/welcome">welcome</Link>
         |
        <Link to="/todolist">TodoList</Link>
      </div>
    )
  }
}
