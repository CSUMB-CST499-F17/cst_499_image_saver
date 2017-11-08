import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const BlankPage = (props) => {
	const style = {
		width: "0%", 
	 	height: "0%", 
	}
	
	return (
		<div style={style}>
			<Link to="/blank">
			</Link>
		</div>
	)
}

export default BlankPage;

