import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const BluePage = (props) => {
	const style = {
		width: "100%", 
		height: "100%", 
		padding: "16px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "lightblue"
	}
	
	return (
		<div style={style}>
			<h1>Page 4</h1>
			<Link to="/">
				<RaisedButton label="white"/>
			</Link>
		</div>
	)
}

export default BluePage;
