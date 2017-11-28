import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {green500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import Home from './components/Home';
import Router from './components/Router';
import GridListExampleComplex from './components/GridListExampleComplex';
import './index.css';


//import Grid from './components/Grid';

const muiTheme = getMuiTheme({
     //appBar:{
       //backgroundColor: "#3F51B5",
     //},
   //palette: {
    // primary: green500,
   //},
   //appBar: {
    //height: 150,
    // backgroundColor: green500
  // },
});

document.body.onclick = (ev) => {
    ev.preventDefault()
        const tag = document.elementFromPoint(ev.x,ev.y)
        console.log(tag)
    }


const App = () => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Grid />
        </MuiThemeProvider>
    )//Removed <Router/> from inside of the muithemeprovider.
    
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);