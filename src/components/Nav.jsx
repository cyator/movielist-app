import React, { useContext } from 'react';
import { MovielistContext } from '../context/MovielistContext';

const Nav = () => {
	const [movies, setMovies] = useContext(MovielistContext);
	return (
		<div style={navStyle()}>
			<h3>Dev</h3>
			<p>List of movies: {movies.length}</p>
		</div>
	);
};

const navStyle = () => {
	return {
		backgroundColor: '#f4f4f4',
		padding: '3rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '30px',
	};
};

export default Nav;
