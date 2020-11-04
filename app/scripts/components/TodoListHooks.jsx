/* @flow */

import * as React from 'react';
import {loadTodos, createTodo, removeTodo} from '~/actions/TodoList';


export default function TodoList (): React.Node {
  const [title, setTitle] = React.useState<string>('');
  const [todos, setTodos] = React.useState<Array<Object>>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const handleLoadTodos = React.useCallback(() => {
    loadTodos()
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setErrorMessage(err.message || err);
      })
  }, []);

  React.useEffect(() => {
    handleLoadTodos();
  }, [handleLoadTodos]);

  const handleCreate = React.useCallback(() => {
    createTodo({
      title
    })
    .then(() => {
      handleLoadTodos();
    })
    .catch((err) => {
      setErrorMessage(err.message || err);
    })
  }, [title]);

  const handleRemove = React.useCallback((id: number) => {
    removeTodo(id)
      .then(() => {
        handleLoadTodos();
      })
  }, []);

  return (
    <div>
      <ul>
        {todos.map((v, i) => (
          <li key={i}><span>{v.id}.</span> {v.title} <span onClick={handleRemove.bind(this, v.id)}>Remove</span></li>
        ))}
      </ul>
      <div>
        <input type="text" onChange={(event: any) => {setTitle(event.target.value)}} />
        <button onClick={handleCreate}>添加</button>
      </div>
      {!!errorMessage
        && <p style={{color: 'red'}}>{errorMessage}</p>
      }
    </div>
  )
}
