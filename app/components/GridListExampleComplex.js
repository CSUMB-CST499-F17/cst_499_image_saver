import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    //img: resultImgs[0],
    img: 'https://i.redd.it/d3zti26pnmqz.jpg',
    featured: true,
  },
  {
    img: 'https://i.redd.it/ktpwf5ajauqz.jpg',
  },
  {
    img: 'https://i.redd.it/d3zti26pnmqz.jpg',
  },
  {
    img: 'https://i.redd.it/5jnc1tucrtqz.jpg',
    featured: false,/*This means that the image is going to be larger than others*/
  },
  {
    img: 'https://i.imgur.com/k1uG7TY.jpg',
  },
  {
    img: 'https://i.imgur.com/yEqEsly.jpg',
  },
  {
    img: 'https://i.redd.it/3txbwlqzebqz.jpg',
  },
  {
    img: 'https://i.redd.it/lu6zvqf7ubqz.jpg',
  },
];

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