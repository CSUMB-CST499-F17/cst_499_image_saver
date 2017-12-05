import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { Redirect } from 'react-router';

var React = require('react');
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
	 	color: '#ffffff',
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
	button:{
	    alignSelf: 'center',
	}
};



class Login extends React.Component {

    handleClick(event){
 var apiBaseUrl = 'http://panafold-backend-staging.us-west-2.elasticbeanstalk.com/';
 var formdata = new FormData();
 formdata.append('username', this.state.username);
 formdata.append('password', this.state.password);
 axios.post('users/authenticate', formdata)
// axios.post('users/authenticate',{
//    params: {
//      username: payload.username,
//      password: payload.password
//    }
// })
 .then(function (response) {
 console.log(response);
 })
 
    }

    
    // handleClick() {
    //    console.log('this is:', this.username);
    //    }
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  fireRedirect: false
  }
   const handleClick = (event) => {
    console.log('Username: '+ this.username);
    }
 }
 
render() {
 
    return (
        
      <div style = {styles.root0}>
        <MuiThemeProvider>
          <div>
          <AppBar  
             title="Login"
           />
           <TextField style = {styles.textField}
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField style = {styles.textField}
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;