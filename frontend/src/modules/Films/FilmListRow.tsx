import React from 'react';
import { FilmModel } from '../../model/film.model';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FilmListRow({ film }: { film: FilmModel }) {
	return (
		<tr>
			<td>{film.title}</td>
			<td>{film.director}</td>
			<td>{film.release_date}</td>
			<td>{film.producer}</td>
			<td>
				<Link to={`/films/${film.episode_id}`}>
					<Button variant={'primary'}>Show more</Button>
				</Link>
			</td>
		</tr>
	);
}

export default FilmListRow;
