import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.scss';
import FullLayout from './layout/full-layout/FullLayout';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<FullLayout />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
