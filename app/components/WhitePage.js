import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const WhitePage = (props) => {
	const style = {
		width: "100%", 
		height: "100%", 
		padding: "16px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "white"
	}
	
	return (
		<div style={style}>
			<h1>Page 1</h1>
			<Link to="/red">
				<RaisedButton label="red" backgroundColor="red"/>
			</Link>
			<Link to="/green">
				<RaisedButton label="green" backgroundColor="green"/>
			</Link>
			<Link to="/blue">
				<RaisedButton label="blue" backgroundColor="blue"/>
			</Link>
		</div>
	)
}

export default WhitePage;
