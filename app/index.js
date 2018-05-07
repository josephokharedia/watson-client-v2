import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Workspace from './components/workspace';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import ChatBox from './components/chatbox';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Workspace}/>
			<Route path="/chatbot" component={ChatBox}/>
		</Switch>
	</Router>,
	document.querySelector('#root'));