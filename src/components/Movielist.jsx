import React, { useContext } from 'react';
import Movie from './Movie';
import { MovielistContext } from '../context/MovielistContext';

const Movielist = () => {
	const [movies, setMovies] = useContext(MovielistContext);
	return (
		<div>
			{movies.map((movie) => (
				<Movie name={movie.name} price={movie.price} key={movie.id} />
			))}
		</div>
	);
};

export default Movielist;
