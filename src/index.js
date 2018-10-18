import _ from 'lodash';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


class Welcome extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {name: ''};
	}


	handleAlert = () => {
	    console.log('#####################');
	}

	handleInput = (evt) => {
	  	// console.log('当前值是：', evt.target.value)
	  	this.setState({name: evt.target.value});
	}

  	render() {
    	return (<><h1 onClick={this.handleAlert} >Hello, {(this.state.name || this.props.name)}</h1>
    			请输入：<input onChange={this.handleInput} /></>);
  	}
}

ReactDOM.render(
  <Welcome  name="jack cheng" />,
  document.getElementById('root')
);
