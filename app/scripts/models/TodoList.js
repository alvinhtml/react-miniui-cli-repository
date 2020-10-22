/* @flow */

import {Record, List, Map} from 'immutable';

export class Todo extends Record({
  id: 0,
  title: ''
}) {
  id: number;
  title: string;

  get title(): string {
    return title;
  }
}

export function toTodo(todo: Object) {
  return new Todo({
    id: todo.id,
    title: todo.title || '--'
  });
}
