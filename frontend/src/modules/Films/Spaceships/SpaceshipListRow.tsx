import React from 'react';
import { SpaceshipModel } from '../../../model/spaceship.model';
import { Button } from 'react-bootstrap';

interface SpaceshipListRowProps {
	spaceship: SpaceshipModel;
	onSelected: (item: SpaceshipModel) => void;
}

function SpaceshipListRow({ spaceship, onSelected }: SpaceshipListRowProps) {
	return (
		<tr>
			<td>{spaceship.name}</td>
			<td>{spaceship.model}</td>
			<td>{spaceship.starship_class}</td>
			<td>
				<Button onClick={() => onSelected(spaceship)}>Select</Button>
			</td>
		</tr>
	);
}

export default SpaceshipListRow;
