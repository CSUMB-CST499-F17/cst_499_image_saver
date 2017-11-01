import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';



//var background = chrome.extension.getBackgroundPage();
const background = Array.from(document.getElementsByTagName('img')).map(img => img.src);
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: "100%",
    height: "100%",
    background: "#FAFAFA",
  },
  gridList: {
    width: window.width,
    height: window.height,
    overflowY: 'auto',
    border: 'white',
  },
  
  img:{
    
  },
  
  margin:12,
};

const tilesData = [
  //background.map((image,i) => <img key={i} src={image}/>)
  //push more images

  {
    img: background[15],
    //img: 'https://i.redd.it/d3zti26pnmqz.jpg',
    featured: false,
  },
  
  {
img: background[1],
  },
  {
img: background[2],
  },
  {
img: background[3],
    featured: false,//This means that the image is going to be larger than others
  },
  {
img: background[4],
  },
  {
    img: background[5],
  },
  {
    img: background[6],
  },
  {
    img: background[7],
  },
    {
    img: background[8],
  },
    {
    img: background[9],
  },
    {
    img: background[10],
  },
    {
    img: background[11],
  },
    {
    img: background[12],
  },
    {
    img: background[13],
  },
    {
    img: background[14],
  },
    {
    img: background[15],
  },
    {
    img: background[16],
  },
    {
    img: background[17],
  },
  
];
var url;

for(var i = 18; i < background.length && i < 100; i++){
  var skip = false;
  for(var j = 0; j < tilesData.length; j++){
    if(tilesData[j].img == background[i]){
      skip = true;
      break;
    }
  }
  if(skip == false){
  const temp = {img: background[i], featured: false};
    tilesData.push(temp);
    url == background[i];
    
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
      cellHeight={275}
      padding={10}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 5 : 1}
          rows={tile.featured ? 50 : 1}
          
        >
         
         <RaisedButton
          href = {tile.img}
          label="Save"
          target="_blank"
          backgroundColor="#3949AB"
          style={styles}
          
          
    />
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;

