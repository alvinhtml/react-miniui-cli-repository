/* @flow */

import {request} from '~/services/SuperAgent';

export class TodoList {
  async get(): Promise<any> {
    try {
      const res = await request.get('/api/todos')
        .end();
      return res.body;
    } catch(err) {
      throw new Error(err.text);
    }
  }

  async create(payload: {title: string}): Promise<any> {
    try {
      const res = await request.post('/api/todo')
        .send(payload)
        .end();
      return res.body;
    } catch(err) {
      throw new Error(err.text);
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const res = await request.del(`/api/todo/${id}`)
        .end();
      return res.body;
    } catch(err) {
      throw new Error(err.text);
    }
  }
}
