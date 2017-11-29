import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Image from 'material-ui-image';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';


const styles = {
    root0:{
        backgroundColor: '#766F6F',
		width: '50%',
    	height: '50%',
    	justifyContent: 'space-around',
    	position: 'absolute',
    	padding: "16px",//This is how far componeonts are required to be from the edge of a component
		display: "flex",
	 	flexDirection: "rows",	
	 	margin: 'auto',
	 	textAlign: 'center',
	 	alignItems: 'flex-end',
    },
	root: {
		backgroundColor: '#766F6F',
		width: '90%',
    	height: '90%',
    	justifyContent: 'flex-start',
    	position: 'relative',
    	padding: "16px",//This is how far componeonts are required to be from the edge of a component
		display: "flex",
	 	flexDirection: "column",	
	 	margin: 'auto',
	 	textAlign: 'center',
	 	alignItems: 'flex-start',//These two may be irrelevant
	 	alignSelf: 'center',
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
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
    gridTile:{
    width: '90%',
    height: '90%',
    border: 'black',
    resizeMode: 'contain',
    margin: 'auto',
    //alignSelf: 'center',
    //alignItems: 'cemter',
    //alignContent: 'center',
    //display: 'flex',
    //flex: 1,
    textAlign: 'center',
    display: 'inline-block',
        justifyContent: 'center',

    ///position: 'absolute',
  },
      gridImage:{
    width: '90%',
    height: '70%',
    border: 'black',
    resizeMode: 'stretch',
    //margin: 'auto',
    marginTop: 20,
    //alignSelf: 'center',
    //alignItems: 'cemter',
    //alignContent: 'center',
    //display: 'flex',
    //flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    display: 'inline-block',
    justifyContent: 'center',
    ///position: 'absolute',
  },
    button: {
   backgroundColor: '#000000',
   alignSelf: 'flex-end',
  },
};

const BluePage = () => (
<div style = {styles.root0}>
  <div style= {styles.root}>
       <Paper style={styles.gridTile} 
            zDepth={5} 
            img={'https://static.photocdn.pt/images/articles/2017/04/28/iStock-516651882.jpg'}
            backgroundColor='#4286f4'
          >
           <img 
           style={styles.gridImage} 
           src={'https://static.photocdn.pt/images/articles/2017/04/28/iStock-516651882.jpg'} 

           />
           
           </Paper>
  </div>
  
  
    <div style= {styles.root}>
    <TextField style = {styles.textField} underlineStyle={styles.underline}
      floatingLabelText="Title"
      />
      
    <TextField style = {styles.textField} underlineStyle={styles.underline}
      floatingLabelText="Description"
      />
      

          <Link to="/">
            <FlatButton
            //href = {tile.img}
            label="Save"
            textColor="#FFFFFF"
            style={styles.button} />
          </Link>
  </div>
</div>
);

export default BluePage;
