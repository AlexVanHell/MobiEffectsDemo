import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface SidenavOptionItem {
	title: string;
	route: string;
}

function SidenavOption({ item }: { item: SidenavOptionItem }) {
	return (
		<div>
			<Link to={item.route}>
				<ListGroup.Item action>{item.title}</ListGroup.Item>
			</Link>
		</div>
	);
}

export default SidenavOption;
