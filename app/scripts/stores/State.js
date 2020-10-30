/* @flow */

import {Map} from 'immutable';
import {createStore} from 'redux';
import type {Store} from 'redux';

import {makeRootReducer} from '~/stores/Reducer';
import type {KeyPath} from '~/stores/Reducer';

const {rootReducer, addCursorHandler} = makeRootReducer();


const {getState, subscribe, dispatch} = createStore(rootReducer, new Map());

export function observe(paths: Array<KeyPath>, listener: Function): Function {
  let state = getState();
  return subscribe(() => {
    const newState = getState();
    if (paths.some(path => state.getIn(path) !== newState.getIn(path))) {
      listener();
    }
    state = newState;
  });
}

export {dispatch, getState, addCursorHandler};
