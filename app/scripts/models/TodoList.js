/* @flow */

import type { RecordOf, RecordFactory } from "immutable";
import { Record, List } from "immutable";


type TodoListProps = {
  id: number;
  title: string;
}

export type TodoList = RecordOf<TodoListProps>;

const makeRecord: RecordFactory<TodoListProps> = Record({
  id: 0,
  title: ''
});

export function toTodo(todo: TodoListProps): TodoList {
  return makeRecord({
    id: todo.id,
    title: todo.title
  });
}
