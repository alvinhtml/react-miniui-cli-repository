/* @flow */

import {List} from 'immutable';

import Store from '~/stores/Store';
import Loading from '~/services/Loading';
import NotFound from '~/services/NotFound';
import {ActionTypes} from '~/Constants';
import {TodoList as TodoListRecord, toTodo} from '~/models/TodoList';

class TodoList extends Store {
  getAllTodos(): List<TodoListRecord> | Loading {
    return this.get('todos') || new Loading();
  }
}

const store: TodoList = new TodoList('todos', {
  todos: []
});

export default store;

store.addHandler(ActionTypes.TODO_LIST_LOAD_SUCCESS, (cursor, body) => {
  const {todos} = body;
  cursor.set('todos', List(todos.map(item => toTodo(item))));
});
