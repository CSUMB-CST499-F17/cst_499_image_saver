import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';

const images = Array.from(document.getElementsByTagName('img')).map(img => img.src);
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
		
		<div style={style}>
			<h1>Page 2</h1>
			<div style={{display: "flex", flexWrap:"wrap", overflow:"scroll"}}>
				{
					images.map((image,i) => <img key={i} src={image}/>)
				}
			</div>
			<Link to="/">
				<RaisedButton label="white"/>
			</Link>
		</div>
	)
}

export default RedPage;