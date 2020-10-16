/* @flow */

import {TodoList} from '~/services/TodoList';

export async function createTodo(payload: {title: string, detail: string}): Promise<void> {
  const response = await new TodoList().create(payload);

  console.log("response", response);
}
