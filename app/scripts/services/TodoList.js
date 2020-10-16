/* @flow */

import {request} from '~/services/SuperAgent';

export class TodoList {
  async create(payload: {title: string, detail: string}): Promise<any> {
    try {
      const res = await request.post('/api/todolist/create')
        .send(payload)
      return res.body;
    } catch(err) {
      console.error(err);
    }
  }
}
