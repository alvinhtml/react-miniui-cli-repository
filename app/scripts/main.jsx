import React, {Component, useState, useEffect} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


// if use react-miniui Modal, import ActiveModal
import {ActiveModal} from 'react-miniui';

import Header from '~/components/Header';
import Router from '~/routes';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Header />
        <Router />
      </React.Fragment>
    )
  }
}

render(
  <BrowserRouter>
    <div>
      <App />
      <div><ActiveModal /></div>
    </div>
  </BrowserRouter>,
document.getElementById('webApplication'))
