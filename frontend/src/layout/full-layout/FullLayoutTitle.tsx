import React, { useContext } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SectionTitleContext } from './FullLayout';

function FullLayoutTitle() {
	const title = useContext(SectionTitleContext);

	return (
		<div className="py-3">
			<Card className="p-2">
				<Row className="align-items-center">
					<Col md={4} className="text-center">
						<Link to={'/'}>
							<Button variant={'light'}>Home</Button>
						</Link>
					</Col>
					<Col md={8}>
						<h3 className="m-0">{title.state}</h3>
					</Col>
				</Row>
			</Card>
		</div>
	);
}

export default FullLayoutTitle;
