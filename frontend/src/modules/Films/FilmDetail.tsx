import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import queries from './queries';
import { FilmModel } from '../../model/film.model';
import { Spinner, Row, Col } from 'react-bootstrap';
import { SectionTitleContext } from '../../layout/full-layout/FullLayout';
import SpaceshipsList from './Spaceships/SpaceshipsList';
import { SpaceshipModel } from '../../model/spaceship.model';
import DetailLabel from '../../components/DetailLabel';

const backRoute = '/films';

function FilmDetail() {
	const { filmId } = useParams();
	const [film, setFilm] = useState({} as FilmModel);
	const [loading, setLoading] = useState(false);
	const [spaceships, setSpaceships] = useState([] as SpaceshipModel[]);
	const titleContext = useContext(SectionTitleContext);
	const routerHistory = useHistory();

	const fetchSpaceships = (ships: string[]) => {
		queries
			.getStartShips(ships)
			.then(data => {
				setLoading(false);
				setSpaceships(data);
			})
			.catch(() => {
				setLoading(false);
			});
	};

	const fetchFilm = () => {
		setLoading(true);
		queries
			.getById(filmId as string)
			.then(data => {
				setFilm(data);

				titleContext.dispatch({
					type: 'CHANGE_TITLE',
					value: `Film - ${data.title}`
				});

				fetchSpaceships(data.starships);
			})
			.catch(() => {
				setLoading(false);
				routerHistory.push(backRoute);
			});
	};

	useEffect(() => {
		fetchFilm();
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

	return (
		<div>
			<Row>
				<DetailLabel title="Director" value={film.director} />
				<DetailLabel title="Release Date" value={film.release_date} />
				<DetailLabel title="Producer" value={film.producer} />
			</Row>
			<Row>
				<Col>
					<SpaceshipsList spaceships={spaceships} />
				</Col>
			</Row>
		</div>
	);
}

export default FilmDetail;
