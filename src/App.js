import React, { Component } from 'react';
import { render } from 'react-dom'

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';


class App extends Component {
	render () {
			return (
				<div className="App" >
					{this.props.children}
				</div>
			);
	}
}

export default App;
