import React, {Component} from 'react';
import {createTodo} from '~/actions/TodoList'

export default class TodoList extends Component {

  constructor(props) {
    super(props)
  }

  handleCreate(event: any) {
    createTodo({
      title: 'aa',
      detail: 'bb'
    })
  }

  render() {
    return(
      <div>
        <dl>
          <dt>1</dt>
          <dd>2</dd>
        </dl>
        <div>
          <form>
            <label>
              <span>title:</span>
              <input name="title" type="text"/>
            </label>
            <label>
              <span>detail:</span>
              <input name="detail" type="text"/>
            </label>
            <button onClick={this.handleCreate.bind(this)}></button>
          </form>
        </div>
      </div>
    )
  }
}
