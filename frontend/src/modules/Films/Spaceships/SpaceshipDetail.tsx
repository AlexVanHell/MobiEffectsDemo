import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { SpaceshipModel } from '../../../model/spaceship.model';
import DetailLabel from '../../../components/DetailLabel';

interface SpaceshipDetailProps {
	spaceship: SpaceshipModel;
	onBackClick: () => void;
}

function SpaceshipDetail({ spaceship, onBackClick }: SpaceshipDetailProps) {
	return (
		<div>
			<Row className="align-items-center mb-3">
				<Col xs={6} md={3}>
					<Button variant="info" onClick={() => onBackClick()}>
						&lt; Back
					</Button>
				</Col>
				<Col xs={6} md={9}>
					<h3>{spaceship.name}</h3>
				</Col>
			</Row>
			<Row>
				<DetailLabel title="Model" value={spaceship.model} />
				<DetailLabel
					title="Cost in credits"
					value={spaceship.cost_in_credits}
				/>
				<DetailLabel title="Consumables" value={spaceship.consumables} />
				<DetailLabel title="Length" value={`${spaceship.length} mts`} />
				<DetailLabel title="Class" value={spaceship.starship_class} />
			</Row>
		</div>
	);
}

export default SpaceshipDetail;
