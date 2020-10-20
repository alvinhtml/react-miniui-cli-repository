const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const app = new Koa();
app.use(koaBody());

let todos = [{
  id: 0,
  title: 'Hello React'
}, {
  id: 1,
  title: 'It\'s a nice day today'
}]

const todoList = ctx => {
  ctx.response.type = 'json';
  ctx.response.body = todos;
};

const todoCreate = ctx => {
  ctx.response.type = 'json';
  const payload = ctx.request.body;

  if (payload && payload.title) {
    payload.id = todos[todos.length - 1].id + 1;
    todos.push(payload);
    ctx.response.body = '';
  } else {
    ctx.throw(400, 'Title cannot be empty.');
  }
};

const todoRemove = ctx => {
  ctx.response.type = 'json';
  const id = parseInt(ctx.params.id);

  if (id < todos.length) {
    todos = todos.filter(item => item.id !== id);
    ctx.response.body = '';
  } else {
    ctx.throw(400, 'This ID cannot be found.');
  }

  ctx.response.body = todos;
};

const todoRouter = new Router();

todoRouter.get('/api/todos', todoList);
todoRouter.post('/api/todo', todoCreate);
todoRouter.delete('/api/todo/:id', todoRemove);

app.use(todoRouter.routes())

app.listen(8800);
