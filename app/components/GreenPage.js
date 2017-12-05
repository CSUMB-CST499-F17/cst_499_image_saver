import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
//Page to be used for user login

const styles = {
	    root0:{
        backgroundColor: '#766F6F',
		width: '25%',
    	height: '50%',
    	justifyContent: 'space-around',
    	position: 'absolute',
    	padding: "16px",//This is how far componeonts are required to be from the edge of a component
		display: "flex",
	 	flexDirection: "rows",	
	 	margin: 'auto',
	 	textAlign: 'center',
	 	alignItems: 'center',
    },
    root:{
        backgroundColor: '#766F6F',
		width: '100%',
    	height: '100%',
    	justifyContent: 'space-around',
    	position: 'absolute',
    	padding: "16px",//This is how far componeonts are required to be from the edge of a component
		display: "flex",
	 	flexDirection: "rows",	
	 	margin: 'auto',
	 	textAlign: 'center',
	 	alignItems: 'flex-end',
    },
    	textField:{
		backgroundColor: '#766F6F',
        width: '100%',
        maxHeight: '100%',
    	position: 'relative',
		display: "flex",
	 	margin: 'auto',
		flexDirection: 'column',
	 	textAlign: 'top',
	 	margin: 0,
	 	color: '#ff3300',
	 	alignItems: 'flex-start',//These two may be irrelevant
	 	alignSelf: 'flex-start',
	},
	underline:{
	    backgroundColor: '#000000',
        width: '100%',
        maxHeight: '100%',
    	position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
	 	margin: 'auto',
	 	alignItems: 'flex-start',//These two may be irrelevant
	 	alignSelf: 'flex-start',
	 	show: 'true',
	},
};


const GreenPage = (props) => {
	
	const style = {
		width: "25%", 
		height: "50%", 
		padding: "16px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "green"
	}
	
	return (
		<div style = {styles.root0}>
		<div style={root}>
			<h1>LOGIN</h1>
				 <TextField style = {styles.textField} underlineStyle={styles.underline}
    				floatingLabelText="Username"
    				//onChange={this.handleChange}
    				id='Username'
    			 />
    			 <TextField style = {styles.textField} underlineStyle={styles.underline}
    				floatingLabelText="Password"
    				//onChange={this.handleChange}
    				type = 'password'
    				id='Password'
    			 />
			<Link to="/">
				<RaisedButton label="LOGIN"/>
			</Link>
		</div>
		</div>
	)
}

export default GreenPage;
