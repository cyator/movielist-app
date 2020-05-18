import React, { useState, useContext } from 'react';
import { MovielistContext } from '../context/MovielistContext';

const AddMovie = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [movies, setMovies] = useContext(MovielistContext);

	const updateName = (e) => {
		setName(e.target.value);
	};

	const updatePrice = (e) => {
		setPrice(e.target.value);
	};

	const addMovie = (e) => {
		e.preventDefault();
		setMovies((previousMovies) => [...previousMovies, { name, price }]);
	};

	return (
		<form onSubmit={addMovie}>
			<input
				type='text'
				name='name'
				id='name'
				value={name}
				onChange={updateName}
			/>
			<input
				type='text'
				name='price'
				id='price'
				value={price}
				onChange={updatePrice}
			/>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default AddMovie;
