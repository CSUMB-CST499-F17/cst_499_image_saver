import React from 'react';
import { MemoryRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import WhitePage from './WhitePage';
import RedPage from './RedPage';
import GreenPage from './GreenPage';
import BluePage from './BluePage';
import BlankPage from './BlankPage';
import Login from './Login';
import Home from './Home';
import GridListExampleComplex from './GridListExampleComplex';

const Router = (props) => {
	 const style = {
	 	width: "100%", 
	 	height: "100%", 
	 	padding: "16px",
 		display: "flex",
	 	flexDirection: "column",
	 	alignItems: "center",
	 	justifyContent:"center",
	 	zIndex: 0,

	 }
	
	return (
		<MemoryRouter initialEntries={['/:token']}  initialIndex={0}>
			<Switch>
				<Route exact path="/:token" component={RedPage}/>
				<Route path="/red/:token" component={null}/>
				<Route path="/Login/:token" component={Login}/>
				<Route path="/green/:token" component={GreenPage}/>
				<Route path="/blue/:image:token" component={BluePage}/>
				<Route path = "/blank" component={BlankPage}/>
			</Switch>
		</MemoryRouter>
	)
}

export default Router;