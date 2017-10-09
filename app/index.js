import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {green500} from 'material-ui/styles/colors';


import Home from './components/Home';
import GridListExampleComplex from './components/GridListExampleComplex';
import './index.css';

const muiTheme = getMuiTheme({
    appBar:{
        backgroundColor: green500,
    },
  palette: {
    primary: green500,
  },
  appBar: {
    height: 150,
    backgroundColor: green500
  },
});

const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Home/>
            <GridListExampleComplex/>
        </MuiThemeProvider>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);