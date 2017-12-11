import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { MemoryRouter } from 'react-router';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import BluePage from './BluePage';

axios.defaults.headers.common['Authorization'] = 'tester';

var React = require('react');
var token = 'tester';
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
            const token2 = event;
            formdata.append('username', this.state.username);
            formdata.append('password', this.state.password);
            console.log(token);
            console.log(this.state.token);
            //this.setState({token: token});

            axios.post('users/authenticate', formdata)
        .then(function (response) {
            //this.state.token = response.data.token;
            //token2 = String(response.data.token);
            formdata.append('token', response.data.token);
            axios.defaults.headers.common.Authorization = response.data.token;
            
            //console.log(response);
            //console.log(response.data.token);
        })
        console.log(axios.defaults.headers.common.Authorization);
        console.log('End of the token');
        //return token;

    }
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  token: ''
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
              <Link to={{ pathname: '/:token', state: { token: this.state.token } }}>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             </Link>
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