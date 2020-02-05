import React from 'react';
import { Col } from 'react-bootstrap';

function DetailLabel({ title, value }: { title: string; value: string }) {
	return (
		<Col xs={12} md={6}>
			<h4 className="m-0">{title}:</h4>
			<p>{value}</p>
		</Col>
	);
}

export default DetailLabel;
