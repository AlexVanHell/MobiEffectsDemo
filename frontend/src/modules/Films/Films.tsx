import React from 'react';
import FilmsList from './FilmsList';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import FilmDetail from './FilmDetail';

function Films() {
	const { path } = useRouteMatch();

	return (
		<Switch>
			<Route exact path={path}>
				<FilmsList></FilmsList>
			</Route>
			<Route path={`${path}/:filmId`}>
				<FilmDetail />
			</Route>
		</Switch>
	);
}

export default Films;
