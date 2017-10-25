import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

const WhitePage = (props) => {
	const style = {
		width: "100%",
		maxWidth: "800px", 
		height: "100%", 
		margin: "16px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "white",
		// boxSizing: "border-box"
	}
	
	return (
		<div style={style}>
			<AppBar title="Panafold" />
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