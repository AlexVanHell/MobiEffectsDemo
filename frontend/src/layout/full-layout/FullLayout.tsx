import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './FullLayout.scss';
import Navbar from '../navbar/Navbar';
import Sidenav from '../sidenav/Sidenav';
import { Row, Col, Container } from 'react-bootstrap';
import FullLayoutTitle from './FullLayoutTitle';
import Films from '../../modules/Films/Films';

type FullLayoutActionType = 'CHANGE_TITLE' | 'REMOVE_TITLE';

interface FullLayoutAction {
	type: FullLayoutActionType;
	value: string;
}

export const SectionTitleContext: React.Context<{
	state: string;
	dispatch: React.Dispatch<FullLayoutAction>;
}> = React.createContext({} as any);

const initialTitleState = 'TestTitle';

const reducer = (state: string, action: FullLayoutAction) => {
	switch (action.type) {
		case 'CHANGE_TITLE':
			return action.value;
		case 'REMOVE_TITLE':
			return '';
		default:
			return state;
	}
};

function FullLayout() {
	const [state, dispatch] = useReducer(reducer, initialTitleState);

	return (
		<SectionTitleContext.Provider value={{ state, dispatch }}>
			<Router>
				<div className="FullLayout-container">
					<div className="FullLayout-navbar">
						<Navbar></Navbar>
					</div>
					<div className="FullLayout-main">
						<Container>
							<Row className="w-100">
								<Col>
									<div className="FullLayout-title">
										<FullLayoutTitle></FullLayoutTitle>
									</div>
								</Col>
							</Row>
							<Row className="w-100">
								<Col md={4} className="FullLayout-sidenav">
									<Sidenav></Sidenav>
								</Col>
								<Col md={8} className="FullLayout-content">
									<Switch>
										<Route path="/films">
											<Films />
										</Route>
									</Switch>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</Router>
		</SectionTitleContext.Provider>
	);
}

export default FullLayout;
