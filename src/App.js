import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import Header from './views/header/Header'
import Home from './components/home/Home'

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
			<Header/>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Router>
    </div>
  );
}

export default App;
