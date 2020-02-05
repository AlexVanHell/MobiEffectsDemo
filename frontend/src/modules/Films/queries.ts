import axios from 'axios';
import { APP } from '../../constant/AppConstant';
import { FilmModel } from '../../model/film.model';
import { SpaceshipModel } from '../../model/spaceship.model';

const endpoint = `${APP.swapiUrl}/films`;

const queries = {
	getAll: async () => {
		try {
			const response = await axios.get<{ results: FilmModel[] }>(`${endpoint}/`);
			return response.data.results;
		} catch (err) {
			throw err;
		}
	},
	getById: async (id: string) => {
		try {
			const response = await axios.get<FilmModel>(`${endpoint}/${id}/`);
			return response.data;
		} catch (err) {
			throw err;
		}
	},
	getStartShips: async (ships: string[]) => {
		const result: SpaceshipModel[] = []

		for (const ship of ships) {
			try {
				const response = await axios.get<SpaceshipModel>(ship);
				result.push(response.data);
			} catch (err) {
			}
		}

		return result;
	}
}

export default queries;