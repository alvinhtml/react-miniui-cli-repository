if (process.env.NODE_ENV !== 'production') {
  const Immutable = require('immutable');
  const installDevTools = require('immutable-devtools');

  installDevTools(Immutable);
}
// 
// const fn: (a: string) => any = function() {
//   return {};
// }
//
// fn.get = () => { return 'get';}
// fn.post = () => { return 'post';}
//
// export {
//   fn
// }
//
// // 函数 fn 有两个静态属性，导出的时候怎么写类型注释
//
//
// class fn {
//   constructor() {
//     return {};
//   }
//   static get(): string {
//     return 'get';
//   }
//   static post(): string {
//     return 'post';
//   }
// }
