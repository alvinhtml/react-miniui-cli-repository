/* @flow */

import {TodoList} from '~/services/TodoList';

export async function getTodos(): Promise<void> {
  const response = await new TodoList().get();

  console.log("response", response);
  return response;
}

export async function createTodo(payload: {title: string}): Promise<void> {
  const response = await new TodoList().create(payload);

  console.log("response", response);
}

export async function removeTodo(id: number): Promise<void> {
  const response = await new TodoList().remove(id);

  console.log("response", response);
}
