import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Image from 'material-ui-image';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

axios.defaults.baseURL = 'http://panafold-backend-staging.us-west-2.elasticbeanstalk.com/';
axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOTQ1MjFmZTItYzA3My00MjhiLThlMjMtNmNkMTBmMzI2ZDEwIiwibmFtZSI6Ik1pY2hhZWwgV29sZmYiLCJ1c2VybmFtZSI6Im13b2xmZjEwIiwiZW1haWwiOiJtd29sZmYxMEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRwakthdGZVRzJ3cGNwNFJFT0RQd2ouS2JxS1B5RFVxNVMzQjZEMHhML21JVDJHSXZ4dnpKRyIsImltYWdlX3VybCI6bnVsbCwicHJpdmFjeSI6ZmFsc2UsImlzX3ByZW1pdW0iOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDE3LTExLTA4VDE4OjM3OjIxLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTExLTA4VDE4OjM3OjIxLjAwMFoiLCJpYXQiOjE1MTIwMDI2MTB9.Adj4gJYRLQYANG45cl2Bb70J5lHBPxJo-EWmSFHig08';

var given_image_url;

function userlogin(userID, pass){
  var temp = userID;
  axios.post('/users/authenticate',{
    params: {
      username: userID,
      password: pass
    }
  })
      .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
    console.log(error);
  });
}

function createFold(givenTitle, givenUrl, givenImage_url){
  //var title = givenTitle;
  //var url = givenUrl;
  //var image_url = givenImage_url;
  
  var formdata = new FormData();
  //formdata.append('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiOTQ1MjFmZTItYzA3My00MjhiLThlMjMtNmNkMTBmMzI2ZDEwIiwibmFtZSI6Ik1pY2hhZWwgV29sZmYiLCJ1c2VybmFtZSI6Im13b2xmZjEwIiwiZW1haWwiOiJtd29sZmYxMEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRwakthdGZVRzJ3cGNwNFJFT0RQd2ouS2JxS1B5RFVxNVMzQjZEMHhML21JVDJHSXZ4dnpKRyIsImltYWdlX3VybCI6bnVsbCwicHJpdmFjeSI6ZmFsc2UsImlzX3ByZW1pdW0iOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDE3LTExLTA4VDE4OjM3OjIxLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDE3LTExLTA4VDE4OjM3OjIxLjAwMFoiLCJpYXQiOjE1MTIwMDI2MTB9.Adj4gJYRLQYANG45cl2Bb70J5lHBPxJo-EWmSFHig08' );
  //formdata.append('title', givenTitle);
  formdata.append('url', given_image_url);
  formdata.append('image_url', given_image_url);
  formdata.append('post_id', '9690baa7-4b5f-4aca-91f8-b7dd08bd43d7');
  ///////////////////////////////////////////////////////////////////===POST===//
  axios.post('posts/add/link',formdata)
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('CREATE FOLD ERROR!! 1');
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log('CREATE FOLD ERROR 2!!');
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('CREATE FOLD ERROR!! 3');
      console.log('Error', error.message);
    }
    console.log('CREATE FOLD ERROR!! 4');
    console.log(error.config);
  });
}

const createNotebook = () => {//Just an example of doing the call differently
  axios.post('/users/authenticate')
      .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
    console.log(error);
  });
}
const tester2 = function(){//Just an example of doing the call differently
  axios.post('/users/authenticate')
      .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
    console.log(error);
  });
}

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

const handleChange = (event) => {
  console.log(event)
  this.setState({
    
  });
};

const BluePage = (props) => {
  console.log(props)
  given_image_url=props.location.state.image;
  console.log(given_image_url);
  createFold('tester', given_image_url, given_image_url);
  return(
<div style = {styles.root0}>
  <div style= {styles.root}>
       <Paper style={styles.gridTile} 
            zDepth={5} 
            img={'https://static.photocdn.pt/images/articles/2017/04/28/iStock-516651882.jpg'}
            backgroundColor='#4286f4'
          >
           <img 
           style={styles.gridImage} 
           src={props.location.state.image}

           />
           
           </Paper>
  </div>
  
  
    <div style= {styles.root}>
    <TextField style = {styles.textField} underlineStyle={styles.underline}
      floatingLabelText="Title"
      />
      
    <TextField style = {styles.textField} underlineStyle={styles.underline}
      floatingLabelText="Description"
      //onChange={this.handleChange}
      id='Description'
      />
      

          <Link to="/">
            
            <FlatButton
            
            // Send a POST reques
            //href = {tile.img}
            label="Save"
            onClick = {
              {/*()=>userlogin()*/}
            }
            textColor="#FFFFFF"
            style={styles.button} />
          </Link>
             <Link to="/Login">
            
            <FlatButton//This is the button for Login
            // Send a POST reques
            //href = {tile.img}
            label="Login"
            onClick = {
              {/*()=>userlogin()*/}
            }
            textColor="#FFFFFF"
            style={styles.button} />
          </Link>
  </div>
</div>
)};

export default BluePage;
