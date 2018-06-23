import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

// function component() {
//   var element = document.createElement('div');

//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);