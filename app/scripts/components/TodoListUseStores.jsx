/* @flow */

import * as React from 'react';
import {List} from 'immutable';
import {FormGroup, Button, Input} from 'react-miniui';

import {loadTodos, createTodo, removeTodo} from '~/actions/TodoList';
import {useStores} from '~/hooks/UseStores';
import {useLoading} from '~/hooks/UseLoading';
import TodoStore from '~/stores/TodoList';
import type {TodoList as TodoListRecord} from '~/models/TodoList';

export default function TodoList (props: {}): React.Node {
  const [title, setTitle] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  // 更新输入框
  const handleChange = React.useCallback((e: any) => {
    setTitle(e.currentTarget.value);
  }, []);

  // 创建一条 Todo
  const handleCreate = React.useCallback((title: string) => {
    createTodo({
      title
    })
    .then(() => {
      loadTodos();
    })
    .catch((err) => {
      setErrorMessage(err.message || err);
    })
  }, []);

  // 删除
  const handleRemove = React.useCallback((id: number) => {
    removeTodo(id)
      .then(() => {
        loadTodos();
      })
  }, []);

  React.useEffect(() => {
    loadTodos();
  }, []);

  const {todos} = useStores([TodoStore], () => ({
    todos: TodoStore.getAllTodos()
  }));

  const [isLoading, Loading] = useLoading([todos]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{width: '600px', margin: '0 auto'}}>
      <ul>
        {todos.map((v, i) => (
          <li key={i}>{v.get('id')}. {v.get('title')} <Button size="mini" color="red" onClick={handleRemove.bind(this, v.get('id'))}>Remove</Button></li>
        )).toArray()}
      </ul>
      <FormGroup>
        <Input type="text" onChange={handleChange} />
        <Button onClick={handleCreate.bind(this, title)}>添加</Button>
      </FormGroup>
    </div>
  )
}
