import React, { useEffect, useState, useContext } from 'react';
import queries from './queries';
import { FilmModel } from '../../model/film.model';
import { Spinner, Table } from 'react-bootstrap';
import FilmListRow from './FilmListRow';
import { SectionTitleContext } from '../../layout/full-layout/FullLayout';

const fields = ['Title', 'Director', 'Release Date', 'Producer', 'More'];

function FilmsList() {
	const [films, setFilms] = useState([] as FilmModel[]);
	const [loading, setLoading] = useState(false);

	const titleContext = useContext(SectionTitleContext);

	useEffect(() => {
		titleContext.dispatch({ type: 'CHANGE_TITLE', value: 'Films' });
		setLoading(true);
		queries
			.getAll()
			.then(data => {
				setFilms(data);
				setLoading(false);
			})
			.catch(() => {
				setFilms([]);
				setLoading(false);
			});
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return (
			<div className="text-center">
				<Spinner animation="border" role="status" variant="info">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		);
	}

	if (!films.length) {
		return (
			<div className="text-center text-muted">
				<p className="display-4">There are no films</p>
			</div>
		);
	}

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						{fields.map((field, index) => (
							<th key={index}>{field}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{films.map(film => (
						<FilmListRow key={film.episode_id} film={film} />
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default FilmsList;
