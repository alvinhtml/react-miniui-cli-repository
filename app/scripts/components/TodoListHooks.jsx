import React, {Component, useState, useEffect, useCallback} from 'react';
import {loadTodos, createTodo, removeTodo} from '~/actions/TodoList'


export default function TodoList () {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoadTodos = useCallback(() => {
    loadTodos()
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setErrorMessage(err.message || err);
      })
  }, []);

  useEffect(() => {
    handleLoadTodos();
  }, [handleLoadTodos]);

  const handleCreate = useCallback(() => {
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

  const handleRemove = useCallback((id: number) => {
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
