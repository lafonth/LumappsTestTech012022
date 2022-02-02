/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Hero from '../components/Hero';
import SearchResult from '../components/SearchResult';

function App() {
  return (
	<>
		<Router>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
				>
					<Home />
				</Route>
				<Route
					exact
					path="/Hero/:heroId"
				>
					<Hero />
				</Route>
				<Route
					exact
					path="/SearchResult/:searchString"
				>
					<SearchResult />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
