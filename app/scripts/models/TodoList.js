/* @flow */

import {Record} from 'immutable';

export class TodoList extends Record({
  id: 0,
  title: ''
}) {
  id: number;
  title: string;
}

export function toTodo(todo: Object): TodoList {
  return new TodoList({
    id: todo.id,
    title: todo.title
  });
}
