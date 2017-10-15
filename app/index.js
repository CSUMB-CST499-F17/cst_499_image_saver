import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {green500} from 'material-ui/styles/colors';


import Home from './components/Home';
import GridListExampleComplex from './components/GridListExampleComplex';
import './index.css';

const muiTheme = getMuiTheme({//Not really sure that I'm changing anything here
    appBar:{
        backgroundColor: green500,
    },
  palette: {
    primary: green500,
  },
  appBar: {
    height:50,
    //backgroundColor: green500,
    position: 'fixed'
  },
});



const App = () => {//Change me so that not all of the components are being called at once all the time
console.log("Testing a print from inside of the return in index.")
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <h1><Home/></h1>
            <h2><GridListExampleComplex/></h2>
        </MuiThemeProvider>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);