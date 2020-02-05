import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { SIDENAV_OPTIONS } from '../../constant/SidenavOptionsConstant';
import SidenavOption from './SidenavOption';

const options = SIDENAV_OPTIONS;

function Sidenav() {
	return (
		<div>
			<Card className="p-2">
				<ListGroup variant={'flush'}>
					{options.map(option => (
						<SidenavOption key={option.title} item={option}></SidenavOption>
					))}
				</ListGroup>
			</Card>
		</div>
	);
}

export default Sidenav;
