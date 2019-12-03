import React, {Component, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {ButtonGroup, Button} from 'react-miniui';

export default class Header extends Component {
  render() {
    return(
      <main>
        <div>
          <ButtonGroup>
            <Link to="/welcome"><Button>welcome</Button></Link>
            <Link to="use"><Button>use</Button></Link>
          </ButtonGroup>
        </div>
        {this.props.children}
      </main>
    )
  }
}
