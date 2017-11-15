import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import * as Colors from 'material-ui/styles/colors';

import Home from './components/Home';
import Router from './components/Router';
import GridListExampleComplex from './components/GridListExampleComplex';
import './index.css';

const muiTheme = getMuiTheme({
     //appBar:{
      //   backgroundColor: Colors.pink100,
     //},
   //palette: {
   // textColor: Colors.darkBlack,
   // primary1Color: Colors.white,
   // primary2Color: Colors.indigo700,
   // accent1Color: Colors.redA200,
   // pickerHeaderColor: Colors.darkBlack,
  // },
   appBar: {
     height: 50,
     //backgroundColor: Colors.pink100,
   },
});

const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router/>
        </MuiThemeProvider>
    )//Removed <Router/> from inside of the muithemeprovider.Also removed --> <GridListExampleComplex/>
    
}
console.log("hello react!!!!!")

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);