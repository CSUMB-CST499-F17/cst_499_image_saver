import React from 'react';
import { MemoryRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import WhitePage from './WhitePage';
import RedPage from './RedPage';
import GreenPage from './GreenPage';
import BluePage from './BluePage';
import BlankPage from './BlankPage';
import Home from './Home';
import GridListExampleComplex from './GridListExampleComplex';

const Router = () => {
	 const style = {
	 	width: "0%", 
	 	height: "0%", 
	 	padding: "16px",
 		display: "flex",
	 	flexDirection: "column",
	 	alignItems: "center",
	 	justifyContent:"center",
	 	zIndex: 0,

	 }
	
	return (
		<MemoryRouter initialEntries={['/']}  initialIndex={0}>
			<Switch>
				<Route exact path="/" component={RedPage}/>
				<Route path="/red" component={null}/>
				<Route path="/green" component={GreenPage}/>
				<Route path="/blue" component={BluePage}/>
				<Route path = "/blank" component={BlankPage}/>
			</Switch>
		</MemoryRouter>
	)
}

export default Router;