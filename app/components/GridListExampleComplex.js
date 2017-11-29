import React from 'react';
import { Link } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Image from 'material-ui-image';


import Home from './Home';

//var background = chrome.extension.getBackgroundPage();
const background = Array.from(document.getElementsByTagName('img'));//.map(img => img.src);
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    backgroundColor: '#766F6F',
    
    //alignItems: 'stretch',
    //resizeMode: 'stretch',
    //width: "100%",
    //height: "100%",
    
  },
  gridList: {
    width: window.width,
    height: window.height,
    ///overflowY: 'auto',
   //// border: 'white',
    //resizeMode: 'contain',
    //alignSelf: 'center',
  },
  gridTile:{
    maxWidth: '90%',
    maxHeight: '90%',
    border: 'black',
    resizeMode: 'contain',
    margin: 10,
    //alignSelf: 'center',
    //alignItems: 'cemter',
    //alignContent: 'center',
    //display: 'flex',
    //flex: 1,
    textAlign: 'center',
    display: 'inline-block',
    ///position: 'absolute',
  },
  gridImage:{
    maxWidth: '90%',
    maxHeight: '90%',
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
  }
  

};

function handleTouchTap() {
  window.location.href = 'https://panafold.co/';
}

const tilesData = [];
for(var i = 0; i < background.length && i < 100; i++){//How many images to save the link to
  var skip = false;
  for(var j = 0; j < tilesData.length; j++){
    //if(tilesData[])
    if(tilesData[j].img == background[i].getAttribute('src')){
      skip = true;
      break;
    }
  }
  if(skip == false){
      if(background[i].width>=128 && background[i].height >= 128){
      const temp = {img: background[i].getAttribute('src'), featured: false};
      tilesData.push(temp);
    }
  }

}







 


//My array that I am going to populate with a flippin array :P
/*
const tilesData = [];
for(i = 0; i <background.resultImgs.length;i++){
  tilesData[i].img = background.resultImgs[i]
}
*/
/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListExampleComplex = () => (
  
  <div style={styles.root}>
    <GridList
      cols={5}
      cellHeight={330}
      padding={0}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile style={styles.gridTile}
        
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 1 : 1}
          rows={tile.featured ? 1 : 1}
          onTouchTap={handleTouchTap}
        >
          <Paper style={styles.gridTile} 
            zDepth={2} 
            img={tile.img}
            backgroundColor='#4286f4'
             
          >
            <img style={styles.gridImage} src={tile.img} />
          
          

          <Link to="/blue/:image" params = {{image: tile.img}}>
          <FlatButton
          //href = {tile.img}
          label="Save"
          textColor="#3949AB"
          style={styles.button} />
          </Link>
          </Paper>
          
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;