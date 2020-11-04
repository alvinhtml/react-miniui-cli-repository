/* @flow */

import * as React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import TodoList from './components/TodoListUseStores';

export default function Router(): React.Node {
  return(
    <Switch>
      <Route exact path='/' component={Welcome}/>
      <Route path='/welcome' component={Welcome}/>
      <Route path='/todolist' component={TodoList}/>
    </Switch>
  );
}
