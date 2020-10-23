/* @flow */

import {fromJS} from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import type {Cursor as CursorType} from 'immutable/contrib/cursor';

import {observe, getState, addCursorHandler} from '~/State';

type NewActionHander = (cursor: CursorType, body: Object) => void;
type ActionHandler = NewActionHander;

function createReadCursor(path: Array<string>) {
  return Cursor.from(getState(), path, (prevState, newState, changedPath = []) => {
    throw new Error(`Attempted alter state from read only cursor [${changedPath.join(',')}]`);
  });
}

class Store {

  path: Array<string>;
  initialState: any;
  handlers: Array<{
    key: string;
    handler: ActionHandler
  }>;

  constructor(path: string | Array<string>, initialState: mixed = null) {
    this.path = Array.isArray(path) ? path : [path];

    this.initialState = fromJS(initialState);
    this.handlers = [];

    addCursorHandler(this.path, this.initialState, (cursor, action) => {
      const {type, ...body} = action;
      this.handlers.forEach(({key, handler}) => {
        if (key === type) {
          handler(cursor, body);
        }
      });
    });
  }

  cursor(): any {
    return createReadCursor(this.path);
  }

  get(path: string | Array<string>, notSetValue?: any): any {
    if (!Array.isArray(path)) {
      path = [path];
    }
    return this.getIn(path, notSetValue);
  }

  getIn(path: Array<string>, notSetValue?: any): any {
    const result = this.cursor().getIn(path, notSetValue);
    return (result && result.deref) ? result.deref() : result;
  }

  has(path: string): boolean {
    return this.cursor().has(path);
  }

  hasIn(path: Array<string>): boolean {
    return this.cursor().hasIn(path);
  }

  addHandler(key: string, handler: ActionHandler) {
    this.handlers.push({
      key,
      handler
    });
  }

  static observe(stores: Array<Store>, listener: Function) {
    return observe(stores.map(store => store.path), listener);
  }
}

export default Store;
