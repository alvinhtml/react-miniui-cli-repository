/* @flow */

import React, {Component} from 'react';
import {Button} from 'react-miniui';
import {loadTodos, createTodo, removeTodo} from '~/actions/TodoList';

export default class TodoList extends Component<{}, {todos: Array<{title: string}>}> {

  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentWillMount() {
    this.getTodo();
  }

  getTodo() {
    loadTodos()
      .then((data) => {
        this.setState({
          todos: data
        });
      })
  }

  handleChange(event: any) {
    this.setState({
      title: event.target.value
    });
  }

  handleCreate(event: any) {
    createTodo({
      title: this.state.title
    })
    .then(() => {
      this.getTodo();
    })
    .catch((err) => {
      this.setState({
        errorMessage: err.message || err
      });
    })
  }

  handleRemove(id: number, event: any) {
    removeTodo(id).then(() => {
      this.getTodo();
    })
  }

  render() {
    const {todos, title, errorMessage} = this.state;
    return(
      <div className="todo-wrap">
        <table>
          <tr>
            <th>ID</th>
            <th>标题</th>
            <th>操作</th>
          </tr>
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td><Button size="mini" color="blue" onClick={this.handleRemove.bind(this, item.id)}>删除</Button></td>
            </tr>
          ))}
        </table>
        <div>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <Button color="blue" onClick={this.handleCreate.bind(this)}>添加</Button>
        </div>
        {!!errorMessage
          && <p style={{color: 'red'}}>{errorMessage}</p>
        }
      </div>
    )
  }
}
