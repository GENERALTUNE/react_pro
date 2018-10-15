import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <Welcome  name="jack cheng" />,
  document.getElementById('root')
);


// function component() {
//   var element = document.createElement('div');
//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }
// document.body.appendChild(component());