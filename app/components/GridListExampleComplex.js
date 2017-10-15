import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


var background = chrome.extension.getBackgroundPage();

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: window.width,
    height: window.height,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: background.resultImgs[0],
    //img: 'https://i.redd.it/d3zti26pnmqz.jpg',
    featured: true,
  },
  {
    img: background.resultImgs[1],
  },
  {
    img: background.resultImgs[2],
  },
  {
    img: background.resultImgs[3],
    featured: false,//This means that the image is going to be larger than others
  },
  {
    img: background.resultImgs[4],
  },
  {
    img: background.resultImgs[5],
  },
  {
    img: background.resultImgs[6],
  },
  {
    img: background.resultImgs[7],
  },
    {
    img: background.resultImgs[8],
  },
    {
    img: background.resultImgs[9],
  },
    {
    img: background.resultImgs[10],
  },
    {
    img: background.resultImgs[11],
  },
    {
    img: background.resultImgs[12],
  },
    {
    img: background.resultImgs[13],
  },
    {
    img: background.resultImgs[14],
  },
    {
    img: background.resultImgs[15],
  },
    {
    img: background.resultImgs[16],
  },
    {
    img: background.resultImgs[17],
  },
  
];



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
      cols={2}
      cellHeight={200}
      padding={5}
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
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;