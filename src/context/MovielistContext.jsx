import React, { useState, createContext } from 'react';

export const MovielistContext = createContext();

export const MovielistProvider = ({ children }) => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '$10',
			id: 1,
		},
		{
			name: 'Game of Thrones',
			price: '$10',
			id: 2,
		},
		{
			name: 'Inception',
			price: '$10',
			id: 3,
		},
	]);
	return (
		<MovielistContext.Provider value={[movies, setMovies]}>
			{children}
		</MovielistContext.Provider>
	);
};
