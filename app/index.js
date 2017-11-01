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

const App = () => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Home/>
            <GridListExampleComplex/>
        </MuiThemeProvider>
    )//Removed <Router/> from inside of the muithemeprovider.
    
}
console.log("hello react!!!!!")

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);