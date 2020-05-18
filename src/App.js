import React from 'react';
import Movielist from './components/Movielist';
import { MovielistProvider } from './context/MovielistContext';
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
	return (
		<MovielistProvider>
			<div className='App'>
				<Nav />
				<AddMovie />
				<Movielist />
			</div>
		</MovielistProvider>
	);
}

export default App;
