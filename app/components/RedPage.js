//======================================================USER LOGIN================================================================//
//This page is linked in Router.js and is used to allow the user to login, there will be buttons located on GridListExample and BluePage
//That bring up this page. 
import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';
import Home from './Home';
import GridListExampleComplex from './GridListExampleComplex';


//Array used to retrieve images on the
//const images = Array.from(document.getElementsByTagName('img')).map(img => img.src);
//console.log(images);

const RedPage = (props) => {
	const style = {
		width: "100%", 
		height: "100%", 
		padding: "16px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		zIndex: 2147483647,
		backgroundColor: "#222e2e"
	}
	
	return (
		
		<div style={{display: "flex", flexWrap:"wrap", overflow:"auto"}}>
			<Home/>
			<GridListExampleComplex />
		</div>
	)
}

export default RedPage;