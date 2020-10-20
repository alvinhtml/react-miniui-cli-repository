import React, {Component} from 'react';
import {getTodos, createTodo, removeTodo} from '~/actions/TodoList'

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
    getTodos()
      .then((data) => {
        this.setState({
          todos: data,
          title: '',
          errorMessage: ''
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
      <div>
        <ul>
          {todos.map((v, i) => (
            <li key={i}><span>{v.id}.</span> {v.title} <span onClick={this.handleRemove.bind(this, v.id)}>Remove</span></li>
          ))}
        </ul>
        <div>
          <input type="text" onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleCreate.bind(this)}>添加</button>
        </div>
        {!!errorMessage
          && <p style={{color: 'red'}}>{errorMessage}</p>
        }
      </div>
    )
  }
}
