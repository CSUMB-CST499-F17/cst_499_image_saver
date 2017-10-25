import React from 'react';
import { MemoryRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import WhitePage from './WhitePage';
import RedPage from './RedPage';
import GreenPage from './GreenPage';
import BluePage from './BluePage';

const Router = () => {
	// const style = {
	// 	width: "100%", 
	// 	height: "100%", 
	// 	padding: "16px",
	// 	display: "flex",
	// 	flexDirection: "column",
	// 	alignItems: "center",
	// 	justifyContent:"center"
	// }
	
	return (
		<MemoryRouter initialEntries={['/']}  initialIndex={0}>
			<Switch>
				<Route exact path="/" component={WhitePage}/>
				<Route path="/red" component={RedPage}/>
				<Route path="/green" component={GreenPage}/>
				<Route path="/blue" component={BluePage}/>
			</Switch>
		</MemoryRouter>
	)
}

export default Router;