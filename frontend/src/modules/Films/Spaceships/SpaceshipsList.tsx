import React, { useState } from 'react';
import { SpaceshipModel } from '../../../model/spaceship.model';
import { Table } from 'react-bootstrap';
import SpaceshipListRow from './SpaceshipListRow';
import SpaceshipDetail from './SpaceshipDetail';

const fields = ['Name', 'Model', 'Class', 'Select'];

function SpaceshipsList({ spaceships }: { spaceships: SpaceshipModel[] }) {
	const [selected, setSelected] = useState(null as SpaceshipModel | null);

	const handleBackClick = () => {
		setSelected(null);
	};

	const handleItemSelected = (item: SpaceshipModel) => {
		setSelected(item);
	};

	if (selected) {
		return (
			<div>
				<h2>Starship</h2>
				<SpaceshipDetail spaceship={selected} onBackClick={handleBackClick} />
			</div>
		);
	}

	return (
		<div>
			<h2>Starships</h2>
			<Table striped bordered hover>
				<thead>
					<tr>
						{fields.map((field, index) => (
							<th key={index}>{field}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{spaceships.map(ship => (
						<SpaceshipListRow
							key={ship.model}
							spaceship={ship}
							onSelected={handleItemSelected}
						/>
					))}
				</tbody>
			</Table>
		</div>
	);
}

export default SpaceshipsList;
