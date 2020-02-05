import React from 'react';
import './Navbar.scss';
import { APP } from '../../constant/AppConstant';
import { Row, Col, Container } from 'react-bootstrap';

function Navbar() {
	const title = APP.name;
	// const titleContext = useContext(SectionTitleContext);

	return (
		<div className="Navbar-container">
			<Container className="text-center">
				<Row className="align-items-middle pt-2">
					<Col md={4} lg={3}>
						<div className="Navbar-logo">
							<img src="/main_logo.png" alt="logo" />
						</div>
					</Col>
					<Col md={8} lg={9} className="Navbar-title">
						<h1 className="m-0">{title}</h1>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Navbar;
